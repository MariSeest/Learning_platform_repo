import React from "react";
import { Navigate } from "react-router-dom";
import './login.css';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <h1 className="header-login">
                Prenotazione Pasti
            </h1>
            <div className="icon-wrapper">
                <FoodBankIcon className="icon-style" style={{fontSize: 300}}/>
            </div>
            <button className="center-button" onClick={() => loginWithRedirect()}>
                Usa Auth0 per autenticarti!
            </button>
        </div>
    );
};

export default LoginButton;
