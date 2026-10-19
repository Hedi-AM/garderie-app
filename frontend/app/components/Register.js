"use client";

import { useState } from "react";
import { API_URL } from "../config";

const emptyForm = {
  parentName: "",
  email: "",
  phone: "",
  childName: "",
  childAge: "",
  message: "",
};

export default function Register() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  // Updates the field that was typed in
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault(); // stops the page from reloading
    setStatus("sending");

    try {
      const res = await fetch(`${API_URL}/api/inscriptions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setForm(emptyForm);
      setStatus("success");
    } catch (err) {
      setErrorMsg("Could not reach the server. Is the backend running?");
      setStatus("error");
    }
  }

  return (
    <section id="register" className="py-5 bg-light">
      <div className="container" style={{ maxWidth: "700px" }}>
        <h2 className="text-center mb-2">Register Your Child</h2>
        <p className="text-center text-muted mb-4">
          Fill in the form and we will contact you shortly.
        </p>

        {status === "success" && (
          <div className="alert alert-success">
            🎉 Thank you! Your registration was received.
          </div>
        )}
        {status === "error" && (
          <div className="alert alert-danger">{errorMsg}</div>
        )}

        <form onSubmit={handleSubmit} className="card card-body shadow-sm">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label">Parent name *</label>
              <input
                type="text"
                name="parentName"
                className="form-control"
                value={form.parentName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Child name *</label>
              <input
                type="text"
                name="childName"
                className="form-control"
                value={form.childName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12">
              <label className="form-label">Child age *</label>
              <select
                name="childAge"
                className="form-select"
                value={form.childAge}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                rows="3"
                className="form-control"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-baby btn-lg w-100"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Register"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}