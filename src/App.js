import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './app.css';
import Home from './Home';
import LoginButton from './Login';
import LogoutButton from "./logout";
import PrenotazionePasti from './PrenotazionePasti';
import {useAuth0} from "@auth0/auth0-react";
import PageLoader from "./components/page-loader";
import {AuthenticationGuard} from "./components/authentication-guard";

function App() {
    const {isLoading} =useAuth0();
    if (isLoading) return <div><PageLoader/></div>;
    return (
        <div>
                <Routes>
                    <Route path="/" element={<AuthenticationGuard component = {Home} />}/>
                    <Route path="/Home" element={<AuthenticationGuard component = {Home} />}/>
                    <Route path="/logout" element={<AuthenticationGuard component={LogoutButton} />} />
                    <Route path="/PrenotazionePasti" element={<AuthenticationGuard component = {PrenotazionePasti} />}/>
                    <Route path="/login" element={<AuthenticationGuard component = {LoginButton} />}/>
                </Routes>
        </div>
    );
}

export default App;

