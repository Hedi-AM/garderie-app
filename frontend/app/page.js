"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { API_URL } from "./config";
import Register from "./components/Register";
import Gallery from "./components/Gallery";

export default function Home() {
  const [garderie, setGarderie] = useState(null);

  // Loads Bootstrap's JavaScript (needed for the mobile menu button)
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/api/garderie`)
      .then((res) => res.json())
      .then((data) => setGarderie(data))
      .catch((err) => console.error("Could not load garderie:", err));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Register />

      <footer id="contact" className="bg-dark text-white text-center py-4">
        {garderie && (
          <>
            <p className="mb-1">📍 {garderie.address}</p>
            <p className="mb-1">🕒 {garderie.openingHours}</p>
            <p className="mb-0">
              📞 {garderie.phone} | ✉️ {garderie.email}
            </p>
          </>
        )}
      </footer>
    </>
  );
}