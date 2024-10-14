import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.js';
import './app.css';
import './Home.css';
import './SideBar.css';
import './PrenotazionePasti.css';

function PrenotazionePasti() {
    const navigate = useNavigate();
    const [menuItems, setMenuItems] = useState({ combinazioni: [], piatti: [], prezzi: [], allergeni: [] });
    const [selectedMeals, setSelectedMeals] = useState({});

    // Funzione per recuperare il menù
    const fetchMenu = async () => {
        try {
            const response = await axios.get('http://localhost:5001/menu');
            console.log('Risposta dal backend:', response.data);

            // Controlla se i dati sono validi
            if (response.data && typeof response.data === 'object') {
                // Filtriamo i piatti per rimuovere le righe non necessarie
                const validDishes = response.data.piatti.filter(item =>
                    item && !item.startsWith('Combinazione') && !item.includes('Menn')
                );

                // Imposta solo i piatti validi
                setMenuItems({ ...response.data, piatti: validDishes });
            } else {
                console.error('Dati non validi ricevuti dal backend:', response.data);
            }
        } catch (error) {
            console.error('Errore nel recupero del menù:', error);
            alert(`Errore: ${error.response ? error.response.data : error.message}`); // Mostra il messaggio di errore
        }
    };

    // Funzione per gestire la selezione dei pasti
    const handleMealChange = (id) => {
        setSelectedMeals((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    // Funzione di convalida dell'ordine
    const validateOrder = (order) => {
        if (!order.menuItemId || order.quantity <= 0) {
            throw new Error('Dati dell\'ordine non validi');
        }
    };

    // Funzione per inviare l'ordine
    const handleSubmit = async () => {
        const selectedOrder = menuItems.piatti.filter((item) => selectedMeals[item.id]);

        if (selectedOrder.length > 0) {
            try {
                // Aggiunta della convalida
                validateOrder({ menuItemId: selectedOrder[0].id, quantity: selectedOrder.length });

                await axios.post('http://localhost:5001/order', {
                    userId: 1,  // Assicurati di sostituire con l'ID utente corretto
                    menuItemId: selectedOrder[0].id, // Invia l'ID del primo piatto selezionato
                    quantity: selectedOrder.length, // Numero di piatti selezionati
                });
                alert('Ordine inviato con successo!');
            } catch (error) {
                console.error('Errore durante l\'invio dell\'ordine:', error);
                alert(error.message); // Mostra il messaggio di errore
            }
        } else {
            alert('Seleziona almeno un pasto!');
        }
    };

    // Funzione per navigare alla home
    const handleNavigation = () => {
        navigate('/');
    };

    // Uso dell'effetto per caricare il menù
    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div className="container">
            <h1 className="header">Prenotazione Pasti</h1>
            <div className="menu-container">
                {/* Visualizzazione delle combinazioni senza checkbox */}
                <h2>Combinazioni</h2>
                {menuItems.combinazioni.map((combinazione, index) => (
                    <div key={index} className="menu-item">{combinazione}</div>
                ))}

                {/* Visualizzazione dei piatti con checkbox solo per alimenti specifici */}
                <h2>Piatti</h2>
                {menuItems.piatti && menuItems.piatti.length > 0 ? (
                    menuItems.piatti.map((item, index) => {
                        const isFoodItem = item.includes('Primi:') || item.includes('Secondi:') || item.includes('Contorni:') ||
                            item.includes('Piatti Unici:') || item.includes('Le Nostre Pinse:') ||
                            item.includes('Insalatone:');

                        return (
                            <div key={item.id} className="menu-item">
                                <label className="menu-label">
                                    {isFoodItem ? (
                                        <>
                                            <input
                                                type="checkbox"
                                                checked={!!selectedMeals[item.id]}
                                                onChange={() => handleMealChange(item.id)}
                                            />
                                            {item.name || item} - {menuItems.prezzi[index]} {/* Associa il prezzo corretto */}
                                        </>
                                    ) : (
                                        <span>{item.name || item} - {menuItems.prezzi[index]}</span>
                                    )}
                                </label>
                            </div>
                        );
                    })
                ) : (
                    <p>Caricamento del menù in corso...</p>
                )}

                {/* Visualizzazione degli allergeni senza checkbox */}
                <h2>Allergeni</h2>
                {menuItems.allergeni && menuItems.allergeni.length > 0 ? (
                    menuItems.allergeni.map((allergene, index) => (
                        <div key={index} className="menu-item">{allergene}</div>
                    ))
                ) : (
                    <p>Nessun allergene registrato.</p>
                )}
            </div>
            <div className="button-container">
                <button className="center-button" onClick={handleSubmit}>
                    Invia Ordine
                </button>
                <button className="center-button" onClick={handleNavigation}>
                    Vai a Home
                </button>
            </div>
        </div>
    );
}

export default PrenotazionePasti;
