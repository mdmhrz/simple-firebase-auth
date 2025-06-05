import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;