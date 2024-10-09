import { useNavigate } from 'react-router-dom';
import {withAuthenticationRequired} from "@auth0/auth0-react";
import React from 'react';
import './App.js';
import './app.css';
import './Home.css';
import MenuIcon from '@mui/icons-material/Menu';


function PrenotazionePasti() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
    };

    return (
        <div>
            <h1 className="header">Pagina di Prenotazione dei Pasti</h1>
            <button className="center-button" onClick={handleNavigation}>
                Vai a Home
            </button>
        </div>
    );
}

export default PrenotazionePasti;

