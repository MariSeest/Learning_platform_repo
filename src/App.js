import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './app.css';
import Home from './Home';
import PrenotazionePasti from './PrenotazionePasti';
import sfondo from './assets/PrenotazionePasti.jpg';

function App() {
    return (
        <div style={{
            backgroundImage: `url(${sfondo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh'
        }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/PrenotazionePasti" element={<PrenotazionePasti />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

