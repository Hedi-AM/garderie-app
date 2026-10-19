"use client";

import { useEffect, useState } from "react";
import { API_URL } from "../config";

export default function Navbar() {
  const [garderie, setGarderie] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/garderie`)
      .then((res) => res.json())
      .then((data) => setGarderie(data))
      .catch((err) => console.error("Could not load garderie:", err));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-warning sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <img
  src="/daycare.png"
  alt="Logo"
  height="100"
  className="me-2"
/>
          {garderie ? garderie.name : "Loading..."}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}