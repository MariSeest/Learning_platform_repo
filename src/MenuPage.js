import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {withAuthenticationRequired} from "@auth0/auth0-react";

function MenuPage() {
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState({ menuItemId: '', quantity: 1 });

    useEffect(() => {
        // Recupera il menù dal backend
        axios.get('/menu')
            .then(response => {
                setMenu(response.data);
            })
            .catch(error => {
                console.error('Errore nel caricamento del menù:', error);
            });
    }, []);

    const handleOrder = () => {
        axios.post('/order', {
            userId: 1, // Supponiamo che l'utente loggato abbia id 1
            menuItemId: order.menuItemId,
            quantity: order.quantity
        })
            .then(response => {
                alert('Ordine inviato con successo!');
            })
            .catch(error => {
                console.error('Errore nell\'invio dell\'ordine:', error);
            });
    };

    return (
        <div>
            <h1>Menù del giorno</h1>
            <ul>
                {menu.map(item => (
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
                onChange={e => setOrder({ ...order, quantity: e.target.value })}
            />
            <button onClick={handleOrder}>Invia Ordine</button>
        </div>
    );
}

export default MenuPage;
