import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark mb-5">
            <Link to="/" className="mx-auto">
            <span className="navbar-brand mb-0 h1 mx-auto">Lyrics Finder</span></Link>
            </nav>
        </div>
    )
}

export default Navbar;
