import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.js';
import './app.css';
import './Home.css';
import './SideBar.css';
import './PrenotazionePasti.css'; // Nuovo file CSS
import './MenuPage';
import './SideBar'

function PrenotazionePasti() {
    const navigate = useNavigate();
    const [menuItems, setMenuItems] = useState([]);
    const [selectedMeals, setSelectedMeals] = useState({});

    useEffect(() => {
        async function fetchMenu() {
            try {
                const response = await axios.get('http://localhost:5001/menu');
                console.log('Risposta dal backend:', response.data); // Log della risposta
                if (response.data && Array.isArray(response.data)) {
                    setMenuItems(response.data);
                } else {
                    console.error('Dati non validi ricevuti dal backend:', response.data);
                }
            } catch (error) {
                console.error('Errore nel recupero del menù:', error);
            }
        }

        fetchMenu();
    }, []);


    const handleMealChange = (id) => {
        setSelectedMeals(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const handleSubmit = async () => {
        const selectedOrder = menuItems.filter(item => selectedMeals[item.id]);
        if (selectedOrder.length > 0) {
            try {
                await axios.post('http://localhost:5000/order', {
                    userId: 1,
                    selectedOrder
                });
                alert('Ordine inviato con successo!');
            } catch (error) {
                console.error('Errore durante l\'invio dell\'ordine:', error);
                alert('Errore durante l\'invio dell\'ordine.');
            }
        } else {
            alert('Seleziona almeno un pasto!');
        }
    };

    const handleNavigation = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <h1 className="header">Prenotazione Pasti</h1>
            <div className="menu-container">
                {menuItems.length > 0 ? (
                    menuItems.map(item => (
                        <div key={item.id} className="menu-item">
                            <label className="menu-label">
                                <input
                                    type="checkbox"
                                    checked={!!selectedMeals[item.id]}
                                    onChange={() => handleMealChange(item.id)}
                                />
                                {item.name} - {item.price}€
                            </label>
                        </div>
                    ))
                ) : (
                    <p>Caricamento del menù in corso...</p>
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
