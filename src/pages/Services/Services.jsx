import React from "react";
import { Link } from "react-router-dom";
import styles from "./Services.module.css";

// import heroImg from "../../assets/services-hero.jpg";
import wedding from "../../assets/servicesimg1.jpeg";
import corporate from "../../assets/servicesimg2.jpeg";
import privateChef from "../../assets/serviceimg3.jpeg";
import buffet from "../../assets/serviceimg4.jpeg";
import canapes from "../../assets/serviceimg5.jpeg";
import trays from "../../assets/serviceimg6.jpeg";

const PACKAGES = [
  {
    title: "Wedding Catering",
    desc: ["Signature menus & tastings", "Full service staff", "Elegant table setups"],
    from: 250000, // ₦
    img: wedding,
    icon: "💍",
  },
  {
    title: "Corporate Catering",
    desc: ["Conferences & launches", "Buffets, plated, or boxes", "Dietary options covered"],
    from: 150000,
    img: corporate,
    icon: "💼",
  },
  {
    title: "Private Chef & Intimate Dining",
    desc: ["3–7 course experiences", "On-site chef & service", "Custom wine pairing"],
    from: 120000,
    img: privateChef,
    icon: "👨‍🍳",
  },
  {
    title: "Buffet & Live Stations",
    desc: ["Jollof, grill & pasta bars", "Chef-manned stations", "Guest interaction"],
    from: 180000,
    img: buffet,
    icon: "🍽️",
  },
  {
    title: "Canapés & Cocktail Receptions",
    desc: ["Hot & cold bites", "Styled displays", "Mixologist optional"],
    from: 90000,
    img: canapes,
    icon: "🥂",
  },
  {
    title: "Meal Trays & Packed Lunches",
    desc: ["Corporate & crew meals", "Sealed, labeled, on-time", "Bulk discounts"],
    from: 35000,
    img: trays,
    icon: "🥡",
  },
];

export default function Services() {
  return (
    <section
      className={styles.services_page}
    >
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.hero_inner}>
          <p className={styles.kicker}>What we do</p>
          <h1>Catering services for weddings, corporate & private events</h1>
          <p className={styles.sub}>
            From intimate dinners to large celebrations—we plan, cook, style, and serve.
          </p>
          <div className={styles.hero_actions}>
            <Link to="/contact" className={styles.btn_primary}>Get a Quote</Link>
            <a href="#packages" className={styles.btn_ghost}>View Packages</a>
          </div>
        </div>
      </header>

      {/* Packages */}
      <section id="packages" className={`${styles.container} ${styles.packages_section}`}>
        <h2>Service Packages</h2>
        <p className={styles.section_sub}>
          Flexible options you can tailor to your guest count, venue, and theme.
        </p>

        <div className={styles.packages_grid}>
          {PACKAGES.map((p) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.card_media}>
                {p.img ? (
                  <img src={p.img} alt={p.title} loading="lazy" />
                ) : (
                  <div className={styles.media_placeholder} aria-hidden />
                )}
                <span className={styles.badge} aria-hidden>{p.icon}</span>
              </div>

              <div className={styles.card_body}>
                <h3>{p.title}</h3>
                <ul className={styles.bullets}>
                  {p.desc.map((d) => <li key={d}>{d}</li>)}
                </ul>

                <div className={styles.card_footer}>
                  <div className={styles.price_line}>
                    From <strong>₦{p.from.toLocaleString("en-NG")}</strong>
                  </div>
                  <Link to="/contact" className={styles.btn_primary} aria-label={`Get quote for ${p.title}`}>
                    Get Quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={`${styles.container} ${styles.process_section}`}>
        <h2>How it Works</h2>
        <div className={styles.process_grid}>
          <div className={styles.step}>
            <span className={styles.step_num}>1</span>
            <h4>Tell us about your event</h4>
            <p>Date, venue, guest count, dietary needs.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.step_num}>2</span>
            <h4>Menu proposal & tasting</h4>
            <p>We tailor menus and schedule a tasting if needed.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.step_num}>3</span>
            <h4>Plan staffing & logistics</h4>
            <p>Service team, rentals, timeline & floor plan.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.step_num}>4</span>
            <h4>Cook. Style. Serve.</h4>
            <p>We execute flawlessly—so you can enjoy the moment.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={`${styles.container} ${styles.faq_section}`}>
        <h2>FAQs</h2>
        <div className={styles.faq_list}>
          <details>
            <summary>Do you handle rentals, decor, and staffing?</summary>
            <p>Yes. We can provide full service: chefs, wait staff, bar, basic decor, and rentals coordination.</p>
          </details>
          <details>
            <summary>Can you accommodate dietary restrictions?</summary>
            <p>Absolutely—vegan, vegetarian, halal, gluten-free, and allergies. We label everything clearly.</p>
          </details>
          <details>
            <summary>What areas do you cover?</summary>
            <p>Lagos and surrounding areas by default; we can travel for destination events on request.</p>
          </details>
          <details>
            <summary>What’s the payment schedule?</summary>
            <p>30–50% deposit to secure your date, balance due 3–5 days before the event.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta_strip}>
        <div className={styles.cta_inner}>
          <h2>Ready to plan your menu?</h2>
          <p>Let’s craft something delicious for your guests.</p>
          <Link to="/contact" className={styles.btn_primary}>Book a Tasting</Link>
        </div>
      </section>
    </section>
  );
}
