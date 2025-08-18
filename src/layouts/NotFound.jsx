
import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section style={{ padding: 24, textAlign: "center" }}>
      <h1>404 — Page not found</h1>
      <p><Link to="/">Go home</Link></p>
    </section>
  );
}
