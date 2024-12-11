import React from "react";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          {/* Logo or Brand */}
          <a className="navbar-brand" href="#">Aurora Resort</a>
          
          {/* Toggle button for small screens */}
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

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">หน้าแรก</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ห้องพัก</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ติดต่อเรา</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
