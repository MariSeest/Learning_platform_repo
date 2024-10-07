import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './app.css';
import Home from './Home';
import PrenotazionePasti from './PrenotazionePasti';

function App() {
    return (
        <div>
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

