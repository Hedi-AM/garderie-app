"use client";

import { useEffect } from "react";

export default function Home() {
  // Loads Bootstrap's JavaScript (needed for the mobile menu button)
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar navbar-expand-lg bg-warning sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            <span className="fs-3 me-2">🧸</span>
            Les Petits Anges
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

      {/* ===== HERO ===== */}
      <section id="home" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">
                A happy place for your little ones
              </h1>
              <p className="lead">
                At Les Petits Anges, your children learn, play and grow in a
                safe, caring and colorful environment.
              </p>
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

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Services</h2>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <div className="display-4">🍎</div>
                  <h5 className="card-title mt-2">Healthy Meals</h5>
                  <p className="card-text">
                    Balanced and tasty meals prepared fresh every day.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <div className="display-4">🎨</div>
                  <h5 className="card-title mt-2">Creative Workshops</h5>
                  <p className="card-text">
                    Drawing, music and crafts to develop creativity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <div className="display-4">😴</div>
                  <h5 className="card-title mt-2">Nap Time</h5>
                  <p className="card-text">
                    A calm, comfortable space for a good rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-dark text-white text-center py-4">
        <p className="mb-0">📞 +216 22 345 678 | contact@petitsanges.tn</p>
      </footer>
    </>
  );
}