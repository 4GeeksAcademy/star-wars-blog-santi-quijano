import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-secondary" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="https://cdn1.kibrispdr.org/data/929/star-wars-white-background-40.png" alt="StarWars Logo" width="120" height="75" style={{ marginLeft: "35px" }} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown ms-auto">
                <button className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Favorites
                </button>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
