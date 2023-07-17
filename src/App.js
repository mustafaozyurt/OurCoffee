import React from "react";
import Navbar from "./components/Home/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Coffees from "./pages/Coffees";
import Shop from "./pages/Shop";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/coffees" element={<Coffees />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
