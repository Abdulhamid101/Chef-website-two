import React from "react";
import styles from "./homeBar.module.css";
// import heroBg from "../../assets/hero-catering.jpg";  // <-- your photo

const HomeBar = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container_circle}>
        <div className={styles.circle_text}>
          <p>
            Have a function ? <br />
            we&apos;ve got the catering <br />
            covered.
          </p>
          <span>Deliciously crafted catering: where every bite tells a story</span>

          <div className={styles.circle_btn}>
            <button className={styles.circle_btn1}>Let&apos;s talk</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBar;
