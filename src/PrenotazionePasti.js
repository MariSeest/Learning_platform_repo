import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import './App.js';
import './app.css';


function PrenotazionePasti() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Pagina di Prenotazione dei Pasti</h1>
            <button className="center-button" onClick={handleNavigation}>
                Vai a Home
            </button>
        </div>
    );
}

export default PrenotazionePasti;

