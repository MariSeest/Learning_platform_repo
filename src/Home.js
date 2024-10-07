import React from "react";
import { useNavigate } from 'react-router-dom';
import './App.js';
import './app.css';
import {useAuth0} from '@auth0/auth0-react';

function Home() {
    const navigate = useNavigate();
    const { user,isAuthenticated, isLoading } = useAuth0;

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita il comportamento di default del form (es. refresh pagina)
        console.log("Form submitted");
    };

    const handleNavigation = () => {
        navigate('/prenotazionepasti');
    };
if (isLoading) return <div>Loading...</div>;
    return (
        isAuthenticated && (
        <div>
            <h1 className="header">
                Benvenuto nella piattaforma di prenotazione Pasti
            </h1>

                <button className="center-button" onClick={handleNavigation}>
                    Vai a Prenotazione Pasti
                </button>
        </div>
        )
    );
}

export default Home;
