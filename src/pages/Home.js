import React from "react";
import "../App.css";
import Cards from "../components/Home/Cards";
import HeroSection from "../components/Home/HeroSection";
import ServeSection from "../components/Home/ServeSection";
import ContactForm from "../components/Home/ContactForm";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ServeSection />
      <ContactForm />
    </>
  );
}

export default Home;
