import React from "react";
import { useNavigate } from 'react-router-dom';
import './App.js';
import './app.css';

function Home() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita il comportamento di default del form (es. refresh pagina)
        console.log("Form submitted");
    };

    const handleNavigation = () => {
        navigate('/prenotazionepasti');
    };

    return (
        <div>
            <h1 className="header">
                Benvenuto nella piattaforma di prenotazione Pasti
            </h1>
            <form onSubmit={handleSubmit}>
                <label className="form-control">
                    username
                    <input type="text" required className="form-control"/>
                </label>
                <label className="form-control">
                    password
                    <input type="text" required className="form-control"/>
                </label>
                <button className="center-button" onClick={handleNavigation}>
                    Vai a Prenotazione Pasti
                </button>
            </form>
        </div>
    );
}

export default Home;
