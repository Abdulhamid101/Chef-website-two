import React, { useState } from "react";
import styles from "./FeedBack.module.css";

export default function Feedback() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const rating = form.get("rating");
    const message = (form.get("message") || "").trim();

    const nextErrors = {};
    if (!rating) nextErrors.rating = "Please select a rating.";
    if (message.length < 10) nextErrors.message = "Tell us a bit more (min 10 characters).";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      e.currentTarget.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 700);
  }

  return (
    <section className={styles.feedback_page}>
      <header className={styles.hero}>
        <div className={styles.hero_inner}>
          <h1>We value your feedback</h1>
          <p>Help us make your next experience even better.</p>
        </div>
      </header>

      <div className={`${styles.container} ${styles.grid}`}>
        <aside className={styles.info}>
          <h2>Why your feedback matters</h2>
          <ul className={styles.list}>
            <li>Improve menus, plating, and timing</li>
            <li>Support dietary & service expectations</li>
            <li>Recognize our team’s great work</li>
          </ul>

          <div className={styles.tip}>
            Tip: attach a photo or mention your event type for context.
          </div>

          <div className={styles.policy}>
            By submitting, you agree to our <a href="/privacy">Privacy Policy</a>.
          </div>
        </aside>

        {/* Form */}
        <div className={styles.card}>
          {submitted && (
            <div className={styles.success}>
              🎉 Thanks for the feedback! We’ll review it right away.
            </div>
          )}

          <h2>Share your experience</h2>

          <form onSubmit={handleSubmit} noValidate>
            <fieldset className={styles.fieldset}>
              <legend>Overall rating*</legend>
              <div className={styles.stars} role="radiogroup" aria-label="Overall rating from 1 to 5">
                {[5,4,3,2,1].map((val) => (
                  <React.Fragment key={val}>
                    <input
                      className={styles.star_input}
                      type="radio"
                      id={`rate-${val}`}
                      name="rating"
                      value={val}
                    />
                    <label className={styles.star_label} htmlFor={`rate-${val}`} aria-label={`${val} star${val>1?"s":""}`}>★</label>
                  </React.Fragment>
                ))}
              </div>
              {errors.rating && <p className={styles.error}>{errors.rating}</p>}
            </fieldset>

            {/* NPS */}
            <fieldset className={styles.fieldset}>
              <legend>How likely are you to recommend us to a friend?</legend>
              <div className={styles.nps}>
                {Array.from({ length: 11 }, (_, i) => i).map((n) => (
                  <label key={n} className={styles.nps_item}>
                    <input type="radio" name="nps" value={n} />
                    <span>{n}</span>
                  </label>
                ))}
              </div>
              <div className={styles.nps_hint}>
                0 = Not likely · 10 = Very likely
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend>What went well?</legend>
              <div className={styles.chips}>
                {["Taste", "Presentation", "Punctuality", "Professionalism", "Cleanliness", "Value"].map((t) => (
                  <label key={t} className={styles.chip}>
                    <input type="checkbox" name="positives" value={t} />
                    <span>{t}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className={styles.grid2}>
              <div className={styles.field}>
                <label htmlFor="event">Event type</label>
                <select id="event" name="event">
                  <option value="">Select…</option>
                  <option>Wedding</option>
                  <option>Corporate</option>
                  <option>Birthday</option>
                  <option>Private dining</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="order">What did you order?</label>
                <input id="order" name="order" type="text" placeholder="e.g., Canapés + Jollof & grilled chicken" />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Tell us more*</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What did you love? What could be better? Details help us improve."
                aria-describedby="message-help"
                required
              />
              <small id="message-help" className={styles.help}>Minimum 10 characters.</small>
              {errors.message && <p className={styles.error}>{errors.message}</p>}
            </div>

            <div className={styles.field}>
              <label htmlFor="photo">Add a photo (optional)</label>
              <input id="photo" name="photo" type="file" accept="image/*" />
            </div>

            <div className={styles.grid2}>
              <div className={styles.field}>
                <label htmlFor="name">Name (optional)</label>
                <input id="name" name="name" type="text" autoComplete="name" />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email (optional)</label>
                <input id="email" name="email" type="email" autoComplete="email" />
              </div>
            </div>

            <label className={styles.consent}>
              <input type="checkbox" name="consent" />
              <span>It’s okay to contact me about my feedback.</span>
            </label>

            <div className={styles.actions}>
              <button type="submit" className={styles.btn_primary} disabled={loading}>
                {loading ? "Sending…" : "Submit Feedback"}
              </button>
              <span className={styles.small_note}>We usually reply within 1–2 business days.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
