import React from "react";
import { useNavigate } from 'react-router-dom';
import './App.js';
import './app.css';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from "./logout";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import './icons.css';
import './Login';

function Home() {
    const navigate = useNavigate();
    const { user, isAuthenticated, isLoading } = useAuth0();


    const handleNavigation = () => {
        navigate('/prenotazionepasti');
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        isAuthenticated && (
            <div>
                <h1 className="header" style={{ position: 'relative', textAlign: 'center' }}>
                    Piattaforma di prenotazione Pasti
                    <IconButton
                        aria-label="menu"
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            fontSize: '50px',
                            borderColor:'black'
                        }}>
                        <MenuIcon style={{ fontSize: 'inherit' }} />
                    </IconButton>
                </h1>

                <button className="center-button" onClick={handleNavigation}>
                    Vai a Prenotazione Pasti
                </button>
                <LogoutButton />
            </div>
        )
    );
}

export default Home;
