import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar/navBar.jsx";
import Footer from "../component/Footer/footer.jsx";
import Homebar from "../component/HomeBar/homeBar.jsx";

const HomeLayout = () => (
  <>
    <header className="header-bg">
      <NavBar />
      <Homebar />
    </header>

    <main>
      <Outlet />
    </main>

    <footer className="footer-bg">
      <Footer />
    </footer>
  </>
);

export default HomeLayout;
