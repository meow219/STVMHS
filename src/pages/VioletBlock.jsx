import React from "react";
import HeroSection from "../components/violetblock/heroSection";
import Facilities from "../components/violetblock/facilities";
import Activities from "../components/violetblock/activities";
import Appointment from "../components/violetblock/appointment";
import About from "../components/violetblock/About";
import PTA from "../components/violetblock/PTA";

const VioletBlock = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Facilities Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <Facilities />
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <About />
        </section>

        {/* Activities Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <Activities />
        </section>

        {/* PTA Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <PTA />
        </section>

        {/* Appointment Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <Appointment />
        </section>
      </div>
    </div>
  );
};

export default VioletBlock;