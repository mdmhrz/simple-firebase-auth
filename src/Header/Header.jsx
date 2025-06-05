import React from 'react';
import { NavLink } from 'react-router';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;