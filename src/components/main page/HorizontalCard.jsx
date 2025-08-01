import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import principalImg from "../../assets/School pillars/4.Principal.jpg";

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
    <section className="py-8 px-4 sm:px-6 md:px-10 lg:px-16">
      <div
        ref={ref}
        className="mx-auto max-w-7xl bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2 relative group overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px]"
            variants={leftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={principalImg}
              alt="Principal"
              loading="lazy"
              width="800"
              height="600"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            {/* Label Overlay */}
            <div className="absolute bottom-3 right-3 z-10">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg rounded-md px-3 sm:px-4 py-1 sm:py-2 font-serif">
                <div className="flex flex-col leading-tight">
                  <span className="text-sm sm:text-base md:text-lg font-bold">
                    Dr. Amudha Saravanan
                  </span>
                  <span className="text-[10px] sm:text-xs font-light opacity-90">
                    Principal
                  </span>
                </div>
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1.5 h-2/3 bg-white opacity-20 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-center bg-white"
            variants={rightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-4 sm:space-y-6">
              <span className="inline-block px-3 py-1 text-[11px] sm:text-xs font-serif text-pink-800 bg-pink-100 rounded-full shadow-sm">
                Arise with vision! Shine with grace!
              </span>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-gray-900 leading-snug">
                About Our{" "}
                <span className="text-cyan-600">Humble Beginnings</span> and
                Enduring Legacy
              </h2>

              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />

              <div className="space-y-3 text-sm sm:text-base md:text-[17px] text-gray-700 leading-relaxed">
                <p>
                  Founded in{" "}
                  <span className="font-semibold text-cyan-600">1982</span> under the
                  visionary leadership of Mr. X. Williams, Secretary of the National
                  Phonetary Society of India (NPSI), our institution began with humble
                  beginnings in three small buildings.
                </p>
                <p>
                  Today, we proudly serve over{" "}
                  <span className="font-semibold">1,000 students</span> across a
                  modern campus, maintaining our commitment to academic excellence
                  while embracing innovative teaching methodologies.
                </p>
              </div>

              {/* Dots */}
              <div className="flex space-x-2 mt-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 opacity-70"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalCard;
