import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar/navBar.jsx";
import Footer from "../component/Footer/footer.jsx";

const DefaultLayout = () => (
  <>
    <NavBar />
    <main className="All_pages">
      <Outlet />
    </main>
    <footer className="footer-bg">
      <Footer />
    </footer>
  </>
);

export default DefaultLayout;
