import HeroSection from "../components/main page/HeroSection";
import HorizontalCard from "../components/main page/HorizontalCard";
import ScrollCountUpCard from "../components/main page/ScrollCountUpCard";
import Facilities from "../components/main page/Facilities";
import Staff from "../components/main page/Staff";
import AdmissionCard from "../components/main page/AdmissionCard";
import Guest from "../components/main page/Guest";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <main className="container mx-auto px-4 py-8 ">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {/* Add your title/content here */}
          </h2>
          <HorizontalCard />
        </section>

        {/* Achievements Section */}
        <section className="my-16">
          <ScrollCountUpCard />
        </section>

        {/* Leadership Section */}
        <section className="my-16">
          <Staff />
        </section>

        {/* Facilities Section */}
        <section className="my-16">
          <Facilities />
        </section>

        {/* Chief Guest / In Focus Section */}
        <section className="my-16">
          <Guest />
        </section>

        {/* Admission Section */}
        <section className="my-16">
          <AdmissionCard />
        </section>
      </main>
    </div>
  );
};

export default Home;
