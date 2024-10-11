import React, { useState } from 'react';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";
import './App.js';
import './Home.css';

function Pastiprenotatiprecedenza() {
    const navigate = useNavigate();
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div>
            <h1 className="header">Benvenuto nello storico</h1>

            <button className="center-button" onClick={handleSendOrder}>
                invia
            </button>
        </div>
    );
}


export default Pastiprenotatiprecedenza;