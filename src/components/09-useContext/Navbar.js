import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    useContext
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">
                            Home
                        </NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="/about">
                            About
                        </NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="/login">
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
