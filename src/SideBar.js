import React from 'react';
import './SideBar.css';
import LogoutButton from "./logout";
import IconButton from '@mui/material/IconButton';

function SideBar({ isOpen, toggleSidebar }) {
    const HandleRedirToPPP = () => {
        navigate('/Pastiprenotatiprecedenza');
    };
    const HandleRedirToContacts = () => {
        navigate('/ContactsForm');
    };
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button onClick={toggleSidebar} className="close-button">
                X
            </button>

            <button onClick={HandleRedirToPPP} className="ppp-button">
                Pasti Prenotati in precedenza
            </button>
            <button onClick={HandleRedirToContacts} className="contacts-button">
                Contacts
            </button>
            <LogoutButton />
        </div>
    );
}

export default SideBar;
