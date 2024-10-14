import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withAuthenticationRequired } from "@auth0/auth0-react";

function MenuPage() {
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState({ menuItemId: '', quantity: 1 });
    const [loading, setLoading] = useState(true); // Stato di caricamento
    const [error, setError] = useState(''); // Stato per gli errori

    // Funzione per recuperare il menù
    const fetchMenu = async () => {
        try {
            const response = await axios.get('http://localhost:5001/menu');
            if (response.data && response.data.piatti) {
                setMenu(response.data.piatti);
            } else {
                throw new Error('Dati non validi ricevuti dal backend');
            }
        } catch (error) {
            console.error('Errore nel caricamento del menù:', error);
            setError('Impossibile caricare il menù. Riprova più tardi.'); // Aggiorna lo stato dell'errore
        } finally {
            setLoading(false); // Imposta loading a false dopo il tentativo di recupero
        }
    };

    // Funzione di convalida dell'ordine
    const validateOrder = (orderData) => {
        if (!orderData.menuItemId) {
            throw new Error('L\'ID del piatto è richiesto');
        }
        if (orderData.quantity <= 0) {
            throw new Error('La quantità deve essere maggiore di zero');
        }
    };

    // Funzione per gestire l'ordine
    const handleOrder = async () => {
        try {
            // Convalida l'ordine
            validateOrder(order);

            await axios.post('http://localhost:5001/order', {
                userId: 1, // Assicurati di sostituire con l'ID utente corretto
                menuItemId: order.menuItemId,
                quantity: order.quantity,
            });
            alert('Ordine inviato con successo!');
        } catch (error) {
            console.error('Errore nell\'invio dell\'ordine:', error);
            alert(error.message); // Mostra il messaggio di errore
        }
    };

    // Uso dell'effetto per caricare il menù
    useEffect(() => {
        fetchMenu();
    }, []);

    // Gestione del caricamento
    if (loading) {
        return <p>Caricamento del menù in corso...</p>;
    }

    // Gestione degli errori
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Menù del giorno</h1>
            <ul>
                {menu.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price}€
                        <button onClick={() => setOrder({ ...order, menuItemId: item.id })}>
                            Ordina
                        </button>
                    </li>
                ))}
            </ul>
            <input
                type="number"
                value={order.quantity}
                onChange={(e) => setOrder({ ...order, quantity: Number(e.target.value) })}
                min="1"
            />
            <button onClick={handleOrder}>Invia Ordine</button>
        </div>
    );
}

export default withAuthenticationRequired(MenuPage);
