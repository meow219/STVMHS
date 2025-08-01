import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Local image imports
import chairmanImg from "../../assets/School pillars/1.Chairman.jpg";
import principalImg from "../../assets/School pillars/2.Senior Principal.jpg";
import correspondentImg from "../../assets/School pillars/3.Correspondent.jpeg";

const Facilities = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 }); // Reduced threshold for better mobile detection

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
        delay: i * 0.15, // Faster animation sequence for mobile
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24" ref={containerRef} id="pillars">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-3 sm:mb-4">
            Our Pillars
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-serif max-w-2xl mx-auto">
            Visionary leaders guiding our institution
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 justify-items-center">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.id}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer w-full max-w-xs hover:shadow-xl transition-all duration-300 group"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image */}
              <img
                src={leader.image}
                alt={leader.name}
                loading="lazy"
                width="500"
                height="500"
                className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                decoding="async"
              />

              {/* Gradient overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5 md:p-6">
                <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow-lg">
                    {leader.position}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base mt-1 sm:mt-2 drop-shadow-md">
                    {leader.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Commitment Card */}
          <motion.div
            className="bg-white rounded-xl shadow-lg hover:shadow-xl w-full max-w-xs p-5 sm:p-6 md:p-7 flex flex-col justify-center transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={leaders.length}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-900 font-serif font-bold text-center">
              Our Commitment
            </h3>
            <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 text-justify leading-relaxed sm:leading-loose font-serif">
              We are united in our purpose to nurture an educational space where
              excellence is a habit and growth is a constant.
            </p>
            <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-gray-900 hover:bg-gray-100 transition-colors duration-300">
              <p className="text-gray-800 text-sm sm:text-base text-justify leading-relaxed sm:leading-loose font-serif">
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