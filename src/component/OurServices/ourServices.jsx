import React from "react";
import { Link } from "react-router-dom";  
import serviceImg from "../../assets/oursSrvices.png";
import serviceImg1 from "../../assets/ourServicesaside1.png";
import serviceImg2 from "../../assets/ourServicesaside2.png";
import serviceImg3 from "../../assets/ourServicesaside3.png";
import serviceImg4 from "../../assets/ourservicesaside4.png";
import styles from "./ourServices.module.css";

const OurServices = () => {
  return (
    <section className= {styles.our_services_section}>
      <div className= {styles.our_services}>
        <div className= {styles.our_services_left}>
          <div className= {styles.our_services_head}>
            <h1>Our Services</h1>
          </div>
          <p>
            "Spice up your event with our premium catering services! From intimate gatherings to grand celebrations, we craft delicious, customized menus that delight every palate. Book us today and experience the perfect blend of flavor and elegance!
          </p>
          <div className= {styles.our_services_btn}>
            <button><Link to ="/book-me">Book us now</Link></button>
          </div>
        </div>
        <div className= {styles.our_services_right}>
          <img src={serviceImg} alt="Our Services" />
        </div>
      </div>
      <div className= {styles.ourservices_aside}>
        <div className= {styles.our_services_aside_images}>
          <img src={serviceImg1} alt="Our Services" />
        </div>
        <div className= {styles.our_services_aside_images}>
          <img src={serviceImg2} alt="Our Services" />
        </div>
        <div className= {styles.our_services_aside_images}>
          <img src={serviceImg3} alt="Our Services" />
        </div>
        <div className= {styles.our_services_aside_images}>
          <img src={serviceImg4} alt="Our Services" />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
