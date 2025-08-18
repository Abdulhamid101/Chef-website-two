import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BookMe.module.css";
import heroImg from "../../assets/headerimg.png";
import logo from "../../assets/logo.png";

export default function BookUs() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      e.currentTarget.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 700);
  }

  return (
    <section className={styles.book_page}>
      <header className={styles.hero}>
        <div className={styles.hero_inner}>
          <h1>Book us</h1>
        </div>
      </header>

      <section className={styles.form_strip}>
        <div className={`${styles.container} ${styles.form_wrap}`}>
          {sent && <div className={styles.success}>🎉 Thanks! We’ll confirm availability shortly.</div>}

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" placeholder="Your full name" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="type">Type of event</label>
              <input id="type" name="type" type="text" placeholder="Wedding, birthday, etc." />
            </div>

            <div className={styles.field}>
              <label htmlFor="date">Date of event</label>
              <input id="date" name="date" type="date" />
            </div>

            <div className={styles.field}>
              <label htmlFor="location">Location of event</label>
              <input id="location" name="location" type="text" placeholder="Venue / address" />
            </div>

            <div className={styles.field}>
              <label htmlFor="guests">Number of guests</label>
              <input id="guests" name="guests" type="number" min="1" placeholder="e.g. 120" />
            </div>

            <div className={styles.field}>
              <label htmlFor="menu">Menu requirement</label>
              <input id="menu" name="menu" type="text" placeholder="Dishes, cuisine, dietary, etc." />
            </div>

            <div className={styles.field}>
              <label htmlFor="services">Additional services required</label>
              <input id="services" name="services" type="text" placeholder="Decor, rentals, bar, staff…" />
            </div>

            <div className={`${styles.field} ${styles.span2}`}>
              <label htmlFor="message">Additional message (optional)</label>
              <textarea id="message" name="message" rows={6} placeholder="Anything else we should know?" />
            </div>

            <div className={`${styles.actions} ${styles.span2}`}>
              <button className={styles.btn_primary} type="submit" disabled={loading}>
                {loading ? "Submitting…" : "Submit form"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer band / callout */}
      <section className={styles.footer_band}>
        <div className={`${styles.container} ${styles.band_grid}`}>
          <div className={styles.brand_side}>
            {logo ? <img src={logo} alt="Brand" /> : <div className={styles.brand_placeholder}>Logo</div>}
            <p className={styles.tagline}>Ready to spice up your event?</p>
          </div>

          <div className={styles.links_side}>
            <h4>About us</h4>
            <ul>
              <li><Link to="/about">Who we are</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
            </ul>
          </div>

          <div className={styles.contact_side}>
            <a
              className={styles.whatsapp}
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>

            <div className={styles.contact_list}>
              <span>📍 Lagos, Nigeria</span>
              <a href="tel:+2348000000000">📞 +234 800 000 0000</a>
              <a href="mailto:hello@yourcatering.com">✉️ hello@yourcatering.com</a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">@madamekemspecial</a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
