import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import NotFound from "./layouts/NotFound.jsx";

import Home from "./pages/Home.jsx";
import BookMe from "./pages/BookUs/BookMe.jsx";
import About from "./pages/About/about.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Feedback from "./pages/FeedBack/FeedBack.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import Services from "./pages/Services/Services.jsx";
import Carts from "./pages/Cart/Cart.jsx"

const App = () => (
  <div className="App">
    <Router>
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route element={<DefaultLayout />}>
        <Route path="/book-me" element={<BookMe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Cart" element={<Carts />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  </div>
);

export default App;
