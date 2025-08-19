import React from "react";
import { Link } from "react-router-dom";
import Footerimg from "../../assets/footerimg.png";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_top_img}>
          <img src={Footerimg} alt="" />
        </div>
        <div className={styles.footer_top_btn}>
          <button>
            <Link to="/book-me">Book Us Now</Link>
          </button>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_text}>
          <p>
            Ready to spice up your <br /> event?
          </p>
        </div>
        <div className={styles.footer_bottom_links}>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
            <li>
              <Link to="">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
