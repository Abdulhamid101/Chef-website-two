import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        <ul className={`${styles.nav_links} ${open ? styles.active : ""}`}>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/menu" onClick={() => setOpen(false)}>Menu</Link></li>
          <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link to="/feedback" onClick={() => setOpen(false)}>Feedback</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>
        </ul>

        <div className={styles.nav_btn}>
          <div className={styles.home_icon}>
            <Link to="/" ><FaHome /></Link>
            </div>
          <button type="button">Search</button>
           <Link to="/cart" ><FaShoppingCart/></Link>
        </div>

        <button
          className={styles.hamburger}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}
