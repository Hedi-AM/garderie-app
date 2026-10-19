"use client";

import { useEffect, useState } from "react";
import { API_URL } from "../config";

export default function Services() {
  const [services, setServices] = useState([]);
  const [activites, setActivites] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/services`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch(() => setError(true));

    fetch(`${API_URL}/api/activites`)
      .then((res) => res.json())
      .then((data) => setActivites(data))
      .catch(() => setError(true));
  }, []);

  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>

        {error && (
          <div className="alert alert-danger">
            Could not load data. Is the backend running?
          </div>
        )}

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-12 col-md-4" key={service.id}>
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <div className="display-4">{service.icon}</div>
                  <h5 className="card-title mt-2">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-center mt-5 mb-4">Daily Activities</h3>
        <ul className="list-group">
          {activites.map((a) => (
            <li
              className="list-group-item d-flex justify-content-between flex-wrap"
              key={a.id}
            >
              <span>
                <strong>{a.name}</strong> ({a.ageGroup})
              </span>
              <span className="text-muted">{a.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}