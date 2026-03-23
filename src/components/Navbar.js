import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.home}
                </Link>
              </li>
            </ul>

            <div className="d-flex">
              <div
                className="btn-light btn rounded-circle mx-2 border-dark"
                style={{ height: "30px", width: "30px" }}
                onClick={() => props.toggleMode("light")}
              ></div>
              <div
                className="btn-dark btn rounded-circle mx-2 border-dark"
                style={{ height: "30px", width: "30px" }}
                onClick={() => props.toggleMode("dark")}
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here",
};
