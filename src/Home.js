import React from "react";
import { useNavigate } from 'react-router-dom';
import './App.js';
import './app.css';

function Home() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/prenotazionepasti');
    };
    return(
        <div>
            <h1 className="header">
                Benvenuto nella piattaforma di prenotazione Pasti
            </h1>
            <button className="center-button" onClick={handleNavigation}>
                Vai a Prenotazione Pasti
            </button>
        </div>
    );
}
export default Home;