import React from "react";
import OurServices from "../component/OurServices/ourServices.jsx";
import SpecialCat from "../component/SpecialCat/special-cat.jsx";
import OtherServices from "../component/OtherServices/otherServices.jsx";
import FeedBack from "../component/FeedBack/feedBack.jsx";

const Home = () => (
  <>
    <main className="All_pages">
      <OurServices />
      <SpecialCat />
      <OtherServices />
      <FeedBack />
    </main>
  </>
);

export default Home;
