"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  // Loads Bootstrap's JavaScript (needed for the mobile menu button)
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />

      <footer id="contact" className="bg-dark text-white text-center py-4">
        <p className="mb-0">📞 +216 00 000 000 | contact@petitsanges.tn</p>
      </footer>
    </>
  );
}