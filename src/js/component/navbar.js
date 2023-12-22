import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar mb-3 mt-3 justify-content-evenly navbar-secondary" style={{ backgroundColor: "#F7F7F7" }}>
      <Link to="/">
        <img className="w-25" src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" alt="star wars logo" />
        <button className="btn btn-outline-success border-3">Go Home</button>
      </Link>
      <div className="dropdown">
        <button className="btn btn-outline-success border-3 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Favorites
          <span className="border border-success rounded-pill ms-2 p-1">
            <strong>{store.favorites.length}</strong>
          </span>
        </button>

        <ul className="dropdown-menu dropdown-menu-end" aria-aria-labelledby="dropdownMenuButton1">
          {(store.favorites && store.favorites.length > 0) ?
            store.favorites.map((item, index) => (
              <Link to={item && item.path ? ("/" + item.path + "/" + item.index) : ""} style={{ textDecoration: "none" }}>
                <li key={item}>
                  <a className="dropdown-item d-flex justify-content-between">{item}<i className="trash fas fa-trash-alt mt-1 ms-3" onClick={() => actions.removeFavorite(index)}></i></a>
                </li>
              </Link>
            ))
            : <li className="text-center text-muted">No Favorites</li>}
        </ul>
      </div>
    </nav>
  );
};
