import HeroSection from "../components/main page/HeroSection";
import HorizontalCard from "../components/main page/HorizontalCard";
import ScrollCountUpCard from "../components/main page/ScrollCountUpCard";
import Facilities from "../components/main page/Facilities";
import Staff from "../components/main page/Staff";
import AdmissionCard from "../components/main page/AdmissionCard";
import Guest from "../components/main page/Guest";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8 sm:py-12 lg:py-16">
        {/* About Section */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
            {/* Add your title/content here */}
          </h2>
          <HorizontalCard />
        </section>

        {/* Achievements Section */}
        <section className="my-12 sm:my-16 md:my-20">
          <ScrollCountUpCard />
        </section>

        {/* Leadership Section */}
        <section className="my-12 sm:my-16 md:my-20">
          <Staff />
        </section>

        {/* Facilities Section */}
        <section className="my-12 sm:my-16 md:my-20">
          <Facilities />
        </section>

        {/* Chief Guest / In Focus Section */}
        <section className="my-12 sm:my-16 md:my-20">
          <Guest />
        </section>

        {/* Admission Section */}
        <section className="my-12 sm:my-16 md:my-20">
          <AdmissionCard />
        </section>
      </main>
    </div>
  );
};

export default Home;