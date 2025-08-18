import React, { useState } from "react";
import styles from "./contact.module.css";

// Optional: use your own hero image or remove the style prop.
// import contactHero from "../../assets/contact-hero.jpg";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate a submit (replace with your API or email service)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      e.currentTarget.reset();
    }, 600);
  }

  return (
    <section
      className={styles.contact_page}
      // style={{ "--hero-bg": `url(${contactHero})` }}  // <- uncomment if you import a hero image
    >
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.hero_inner}>
          <h1>Contact Us</h1>
          <p>Tell us about your event — we’ll get back to you quickly.</p>
        </div>
      </header>

      {/* Content */}
      <div className={`${styles.container} ${styles.contact_grid}`}>
        {/* Info column */}
        <aside className={styles.info_card}>
          <h2>Get in touch</h2>
          <ul className={styles.info_list}>
            <li>📍 Lagos, Nigeria</li>
            <li>📞 +234 800 000 0000</li>
            <li>✉️ hello@yourcatering.com</li>
          </ul>

          <div className={styles.hours}>
            <h3>Hours</h3>
            <p>Mon–Sat: 9:00 – 19:00</p>
            <p>Sun: By appointment</p>
          </div>

          <div className={styles.socials}>
            <a href="#" aria-label="Instagram">Instagram</a>
            <span>·</span>
            <a href="#" aria-label="Facebook">Facebook</a>
            <span>·</span>
            <a href="#" aria-label="WhatsApp">WhatsApp</a>
          </div>
        </aside>

        {/* Form column */}
        <div className={styles.form_card}>
          <h2>Tell us about your event</h2>

          {submitted && (
            <div className={styles.success}>
              🎉 Thanks! We’ll reach out shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.grid_2}>
              <div className={styles.field}>
                <label htmlFor="name">Full name*</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email*</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>

              <div className={styles.field}>
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" inputMode="tel" placeholder="+234…" />
              </div>

              <div className={styles.field}>
                <label htmlFor="date">Event date</label>
                <input id="date" name="date" type="date" />
              </div>

              <div className={styles.field}>
                <label htmlFor="guests">Guests</label>
                <input id="guests" name="guests" type="number" min="1" placeholder="e.g. 120" />
              </div>

              <div className={styles.field}>
                <label htmlFor="service">Service type</label>
                <select id="service" name="service">
                  <option>Wedding</option>
                  <option>Corporate</option>
                  <option>Private dining</option>
                  <option>Buffet / Live stations</option>
                  <option>Canapés / Cocktail</option>
                  <option>Meal trays</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your venue, timing, cuisine style, and any dietary needs…"
              />
            </div>

            {/* Honeypot (spam protection) */}
            <input
              type="text"
              name="company"
              tabIndex="-1"
              autoComplete="off"
              className={styles.hpot}
              aria-hidden="true"
            />

            <div className={styles.actions}>
              <button type="submit" className={styles.btn_primary} disabled={loading}>
                {loading ? "Sending…" : "Send Enquiry"}
              </button>
              <p className={styles.privacy}>
                By sending this form you agree to our <a href="/privacy">Privacy Policy</a>.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className={styles.map_wrap}>
        <iframe
          title="Map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Lagos%2C%20Nigeria&output=embed"
        />
      </div>
    </section>
  );
}
