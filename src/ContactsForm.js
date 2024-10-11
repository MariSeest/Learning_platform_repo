import React from 'react';
import Sidebar from './SideBar';
import { useNavigate } from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";
import './App.js';
import './Home.css';

function ContactsForm() {
    const navigate = useNavigate();
    const { user, isAuthenticated, isLoading } = useAuth0();

return (
    <div>
        <h1 className="header">Form dei contatti</h1>
        <h2 className="header">Segnalaci un problema</h2>
        <button className="center-button" onClick={handleSendRequest}>
            invia
        </button>
    </div>
);
}


export default ContactsForm