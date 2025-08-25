import React from "react";
import styles from "./homeBar.module.css";
import image1 from "../../assets/headerimg.png"

const HomeBar = () => {
  return (
    <section className={styles.hero} style={{ "--hero-bg": `url(${image1})` }}>
      <div className={styles.container_circle}>
        <div className={styles.circle_text}>
          <p>
            Have a function ? <br />
            we've got the catering <br />
            covered.
          </p>
          <span>Deliciously crafted catering: where every bite tells a story</span>

          <div className={styles.circle_btn}>
            <button className={styles.circle_btn1}>Let's talk</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBar;
