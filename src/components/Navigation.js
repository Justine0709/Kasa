import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul className="Navigation">
                <NavLink
                    className={(nav) => (nav.isActive ? "nav-active NavLink" : "NavLink")}
                    to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink 
                 className={(nav) => (nav.isActive ? "nav-active NavLink"  : "NavLink")}
                 to="/About">
                    <li>A propros</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;