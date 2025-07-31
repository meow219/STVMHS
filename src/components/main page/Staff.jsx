import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Local image imports
import chairmanImg from "../../assest/School pillars/1.Chairman.jpg";
import principalImg from "../../assest/School pillars/2.Senior Principal.jpg";
import correspondentImg from "../../assest/School pillars/3.Correspondent.jpeg";

const Facilities = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.2 });

  const leaders = [
    {
      id: 1,
      name: "Mr. Christob Rajus",
      position: "Chairman",
      image: chairmanImg,
    },
    {
      id: 2,
      name: "Mrs. C. Shanthi",
      position: "Senior Principal",
      image: principalImg,
    },
    {
      id: 3,
      name: "Mr. C. Joshua Glenn Mathew",
      position: "Correspondent",
      image: correspondentImg,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative pb-0" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <h1 className="text-5xl text-black tracking-tight font-serif">
              Our Pillars
            </h1>
          </div>
          <p className="text-gray-700 text-xl font-serif">
            Visionary leaders guiding our institution
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.id}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 group max-w-xs mx-auto"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i}
            >
              {/* Image */}
              <img
                src={leader.image}
                alt={leader.name}
                loading="lazy"
                width="500"
                height="500"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold drop-shadow-md">
                    {leader.position}
                  </h3>
                  <p className="text-gray-200 text-sm mt-1 drop-shadow-sm">
                    {leader.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Commitment Card */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center max-w-xs mx-auto hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={leaders.length}
          >
            <h3 className="text-lg mb-3 text-black font-serif text-center">
              Our Commitment
            </h3>
            <p className="text-gray-800 text-sm mb-4 text-justify leading-relaxed font-serif">
              We are united in our purpose to nurture an educational space where
              excellence is a habit and growth is a constant.
            </p>
            <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-black hover:bg-gray-200 transition-colors">
              <p className="text-gray-900 text-sm text-justify leading-relaxed font-serif">
                Every decision we make is rooted in a deep sense of
                responsibility towards our students, their well-being, and their
                future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;