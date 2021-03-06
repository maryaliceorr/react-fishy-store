import React from 'react';
import {Link} from 'react-router-dom';
import authRequests from '../../firebaseRequests/auth';

import './Navbar.css';

class Navbar extends React.Component {
  render () {
    const {authed, runaway} = this.props;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      runaway();
    };

    return (
      <div className="Navbar">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">Fish Store</Link>
            </div>
            <div className="collapse navbar-collapse">
              {
                authed ? (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/inventory" className="navbar-brand">Inventory</Link>
                    </li>
                    <li>
                      <Link to="/orders" className="navbar-brand">Orders</Link>
                    </li>
                    <li className="navbar-form">
                      <button
                        className="btn btn-danger"
                        onClick = {logoutClickEvent}
                        >
                        Logout
                      </button>
                    </li>
                  </ul>
                ) : (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/login" className="navbar-brand">Login</Link>
                    </li>
                  </ul>
                )
              }

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;