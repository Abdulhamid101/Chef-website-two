import React from "react";
import { Link } from "react-router-dom";  
import styles from "./about.module.css";

const About = () => {
  return (
    <section className= {styles.about_page}>
      <div
        className= {styles.hero}
      >
        <h1>
          Creating Memorable Moments, One Plate at a Time
        </h1>
      </div>

      {/* Who We Are */}
      <div className= {styles.who_we_are}>
        <h2>Who We Are</h2>
        <p>
          At <span className= {styles.highlight}>Chef’s Delight Catering</span>, food is more than 
          just a meal—it’s an experience. We specialize in creating unforgettable 
          moments with delicious dishes, seamless service, and attention to detail. 
          Whether it’s a wedding, corporate event, or private dinner, our goal is to 
          make every occasion stress-free and full of flavor.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className= {styles.why_choose_us}>
        <div className= {styles.card}>
          <h3>🍽️ Exquisite Menus</h3>
          <p>From traditional classics to modern fusions.</p>
        </div>
        <div className= {styles.card}>
          <h3>👩‍🍳 Professional Chefs</h3>
          <p>Passionate, creative, and highly experienced.</p>
        </div>
        <div className= {styles.card}>
          <h3>🌿 Fresh Ingredients</h3>
          <p>Locally sourced, organic where possible.</p>
        </div>
        <div className= {styles.card}>
          <h3>🎉 Unforgettable Service</h3>
          <p>Every detail handled with care.</p>
        </div>
      </div>

      {/* CTA */}
      <div className= {styles.cta}>
        <h2>Let’s make your next event unforgettable</h2>
        <button><Link to="/contact">Contact Us Today</Link></button>
      </div>
    </section>
  );
};

export default About;
