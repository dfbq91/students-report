/** Navbar component */
import React from "react";
import { Link } from "react-router-dom";

import "./styles/navbar.css";
import foto from "./images/Diego-Betancourt.jpg";

function Navbar() {
  return (
    <div className="w-100 ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className='h4'>L O G O</div>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="form-inline my-2 my-lg-0 position-relative d-inline-block">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button className="btn btn-search position-absolute" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="_blank"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={foto}
                    className="img-fluid rounded-circle avatar mr-2"
                    alt="user logged"
                  ></img>
                  Diego Betancourt
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/">
                    Reporte 1
                  </Link>
                  <Link className="dropdown-item" to="/reporte">
                    Reporte 2
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
