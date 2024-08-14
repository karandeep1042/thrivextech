import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import ContactPage from "../Contact Page/ContactPage";
import HomeSection2 from "./Components/HomeSection2";
import HomeSection3 from "./Components/HomeSection3";
import HomeSection4 from "./Components/HomeSection4";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <ContactPage desc="Share your ideas and vision with us, and together, We can transform them into impactful solutions that drive business growth." />
      <Footer />
    </>
  );
}
