import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class Header extends Component {
  render() {
    return (
      <div className="row" id="header">
        <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to="/">Test App</NavLink>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><NavLink activeClassName="activenav" to="/signin" history={history}>Signin</NavLink></li>
                </ul>
            </div>
        </div>
        </nav>
      </div>
    );
  }
}

export default Header;
