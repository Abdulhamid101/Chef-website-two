import React from "react";
import Feedbackimg from "../../assets/feedBackimg.png";
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./feedBack.module.css";

const FeedBack = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const FeedBacks = [
    {
      text: "Best catering experience we've ever had! The attention to detail and the quality of the food were outstanding. We will definitely be using their services again.",
    },
    {
      text: "The food was absolutely amazing, and the presentation was stunning! Our guests couldn't stop raving about the delicious dishes. Thank you for making our event unforgettable!",
    },
    {
      text: "Exceptional service from start to finish. The team was professional, punctual, and catered to all our dietary needs with ease. Highly recommend!",
    },
    {
      text: "Best catering experience we've ever had! The attention to detail and the quality of the food were outstanding. We will definitely be using their services again.",
    },
    {
      text: "The food was absolutely amazing, and the presentation was stunning! Our guests couldn't stop raving about the delicious dishes. Thank you for making our event unforgettable!",
    },
    {
      text: "Exceptional service from start to finish. The team was professional, punctual, and catered to all our dietary needs with ease. Highly recommend!",
    },
  ];

  return (
    <section className= {styles.feedback_section}>
      <div className= {styles.feedback_header}>
        <h1>Feedback</h1>
      </div>

      <Slider {...settings} className= {styles.feedback_slider}>
        {FeedBacks.map((item, index) => (
          <div key={index} className= {styles.feedback_main_content}>
            <div className= {styles.feedback_main_content_top}>
              <img src={Feedbackimg} alt="Customer" className= {styles.feedback_img} />
              <div className= {styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className= {styles.feedback_icon} />
                ))}
              </div>
            </div>
            <p className= {styles.feedback_text}>"{item.text}"</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeedBack;
