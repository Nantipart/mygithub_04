import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">Aurora Resort</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">หน้าแรก</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rooms">ห้องพัก</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">ติดต่อเรา</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;