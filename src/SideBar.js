import React from 'react';
import './SideBar.css';

function SideBar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button onClick={toggleSidebar} className="close-button">
                Chiudi Sidebar
            </button>

            <ul>
                <li>Pasti Prenotati in precedenza</li>
                <li>Contacts</li>
            </ul>
        </div>
    );
}

export default SideBar;
