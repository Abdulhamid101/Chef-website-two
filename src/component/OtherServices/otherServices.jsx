import React from "react";
import Other1 from "../../assets/other1.png";
import Other2 from "../../assets/other2.png";
import Other3 from "../../assets/other3.png";
import Other4 from "../../assets/other4.png";
import Other5 from "../../assets/other5.png";
import styles from "./otherServices.module.css";


const OtherServices = () => {
  return (
    <section className= {styles.otherServices}>
      <div className= {styles.otherSevices_header}>
        <h1>Other services</h1>
      </div>
      <div className= {styles.otherServices_container}>
        <div className= {styles.otherServices_item}>
          <img
            src= {Other1}
            alt="Service 1"
          />
        </div>
        <div className= {styles.otherServices_item}>
            <img
            src= {Other2}
            alt="Service 1"
          />
        </div>
        <div className= {styles.otherServices_item}>
            <img
            src= {Other3}
            alt="Service 1"
          />
        </div>
        <div className= {styles.otherServices_item}>
            <img
            src= {Other4}
            alt="Service 1"
          />
        </div>
        <div className= {styles.otherServices_item}>
            <img
            src= {Other5}
            alt="Service 1"
          />
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
