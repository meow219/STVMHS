import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import emblem from "../../assets/School pillars/4.Principal.jpg";

const HorizontalCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="py-8">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 max-w-7xl">
        <div
          ref={ref}
          className="w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-white"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <motion.div
              className="lg:w-1/2 w-full relative group overflow-hidden min-h-[240px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
              variants={leftVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={emblem}
                alt="Principal"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Name Label */}
              <div className="absolute bottom-3 right-3 z-10">
                <div className="relative bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold shadow-lg px-3 sm:px-4 py-1 sm:py-2 rounded-md">
                  <div className="flex flex-col">
                    <div className="text-base sm:text-lg md:text-xl font-serif tracking-tight">
                      Dr. Amudha Saravanan
                    </div>
                    <div className="text-[10px] sm:text-xs font-light opacity-90">
                      Principal
                    </div>
                  </div>
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1.5 h-2/3 bg-white opacity-20 rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="lg:w-1/2 w-full p-4 sm:p-6 md:p-8 flex flex-col justify-center bg-white"
              variants={rightVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="space-y-4 sm:space-y-6">
                <span className="inline-block px-3 py-1 text-[11px] sm:text-xs font-serif text-pink-800 bg-pink-100 rounded-full shadow-sm">
                  Arise with vision! Shine with grace!
                </span>

                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold font-serif text-gray-900 leading-snug">
                  About Our{" "}
                  <span className="text-cyan-600">Humble Beginnings</span> and
                  Enduring Legacy
                </h2>

                <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>

                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <p>
                    Founded in{" "}
                    <span className="font-semibold text-cyan-600">1982</span>{" "}
                    under the visionary leadership of Mr. X. Williams,
                    Secretary of the National Phonetary Society of India (NPSI),
                    our institution began with humble beginnings in three small
                    buildings.
                  </p>
                  <p>
                    Today, we proudly serve over{" "}
                    <span className="font-semibold">1,000 students</span>{" "}
                    across a modern campus, maintaining our commitment to
                    academic excellence while embracing innovative teaching
                    methodologies.
                  </p>
                </div>

                {/* Decorative dots */}
                <div className="flex space-x-2 mt-2 sm:mt-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 opacity-70"
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
