"use client";

import { useEffect, useState } from "react";
import { API_URL } from "../config";

export default function Hero() {
  const [garderie, setGarderie] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/garderie`)
      .then((res) => res.json())
      .then((data) => setGarderie(data))
      .catch((err) => console.error("Could not load garderie:", err));
  }, []);

  return (
    <section id="home" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">
              {garderie ? garderie.slogan : "Loading..."}
            </h1>
            <p className="lead">{garderie ? garderie.description : ""}</p>
            <a href="#contact" className="btn btn-warning btn-lg">
              Register your child
            </a>
          </div>
          <div className="col-md-6">
            <img
              src="https://placehold.co/600x400?text=Happy+Kids"
              alt="Children playing"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}