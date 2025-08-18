import React from "react";
import { Link } from "react-router-dom";
import Footerimg from "../../assets/footerimg.png";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className= {styles.footer}>
      <div className= {styles.footer_top}>
        <div className= {styles.footer_top_img}>
            <img src= {Footerimg} alt="" />
        </div>
        <div className= {styles.footer_top_btn}>
            <button><Link to="/book-me">Book Us Now</Link></button>
        </div>
      </div>
      <div className= {styles.footer_bottom}>
        <div className= {styles.footer_bottom_text}>
            <p>
                Lorem ipsum dolor sit amet, consectetur
            </p>
        </div>
        <div className= {styles.footer_bottom_links}>
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>   
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
