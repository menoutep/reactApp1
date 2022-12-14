import React from 'react';
import { NavLink } from "react-router-dom"
const Navigation = () => {
    return (
       <div className="navigation">
        <ul>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>acceuil</li>
            </NavLink>
            <NavLink to="about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>à propos</li>
            </NavLink>
            <NavLink to="connexion" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>connexion</li>
            </NavLink>           
        </ul>
       </div>
    );
};

export default Navigation;