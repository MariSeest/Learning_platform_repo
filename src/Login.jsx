import { useAuth0} from "@auth0/auth0-react";
import React from "react";
import {Navigate} from "react-router-dom";
const LoginButton =() =>{
    const {loginWithRedirect}=useAuth0();
    return<button onClick={
        ()=>loginWithRedirect()}>Usa Auth0 per autenticarti !</button>;
    };

export default LoginButton;
