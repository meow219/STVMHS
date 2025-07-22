import React from "react";
import HeroSection from "../components/violetblock/heroSection";
import Facilities from "../components/violetblock/facilities";
import Activities from "../components/violetblock/activities";
import Appointment from "../components/violetblock/appointment";
import About from "../components/violetblock/About";
import PTA from "../components/violetblock/PTA"; 
const VioletBlock = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Facilities Section */}
      <div className="py-16">
        <Facilities />
      </div>

      {/* About Section */}
      <About />

      {/* Activities Section */}
      <div>
        <Activities />
      </div>

      {/* PTA Section */}
      <div className="py-16">
        <PTA />
      </div>

      {/* Appointment Section */}
      <div className="py-16">
        <Appointment />
      </div>
    </div>
  );
};

export default VioletBlock;
