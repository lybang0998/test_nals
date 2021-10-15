import React from 'react';
import { NavLink } from 'react-router-dom'
import './header.scss'

function Header(props) {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand h1 mb-0" href="/">Hi Nals</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav mr-auto"></div>
                        <div className="form-inline my-2 my-lg-0">
                            <div className="navbar-nav mr-auto">
                                <NavLink
                                    className="navbar-link"
                                    to="/thanks"
                                    activeClassName="active"
                                >
                                    Thanks You !
                                </NavLink>
                                <NavLink
                                    className="navbar-link"
                                    to="/blog"
                                    activeClassName="active"
                                    exact
                                >
                                    Blog
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;