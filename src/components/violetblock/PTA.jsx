import React from "react";
import { motion } from "framer-motion";

// Local image import
import kidsImage from "../../assets/science exhibtion/RCS_3997.jpg";

const PTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12 max-w-6xl w-full border-2 border-pink-300 rounded-3xl shadow-xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 lg:p-12"
        >
          {/* Left Side - Message */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-white px-6 py-8 sm:px-8 sm:py-10 rounded-3xl shadow-lg w-full transition-all duration-300 hover:shadow-pink-300/50"
          >
            <span className="absolute -top-6 left-4 text-6xl text-pink-400 font-serif hidden sm:block">“</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              Through <span className="text-amber-600">PTA</span>,
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed sm:leading-loose">
                we create a supportive network where every voice matters in the journey of a child's growth.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed sm:leading-loose">
                We foster open communication between parents and educators to ensure a nurturing environment.
              </p>
            </div>
            <span className="absolute -bottom-6 right-4 text-6xl text-pink-400 font-serif hidden sm:block">”</span>
          </motion.div>

          {/* Right Side - Image with Blob */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 group flex-shrink-0"
          >
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full h-full -z-10"
            >
              <path
                fill="#f9a8d4"
                d="M47.4,-65.6C60.4,-55.6,68.8,-39.5,72.8,-22.6C76.7,-5.7,76.1,11.9,68.5,25.5C61,39.1,46.5,48.6,31.4,58.6C16.3,68.6,0.7,79.1,-13.5,76.4C-27.6,73.7,-40.3,57.8,-51.1,43C-61.8,28.2,-70.6,14.1,-70.3,-0.4C-70.1,-14.9,-60.8,-29.8,-48.8,-39.5C-36.9,-49.2,-22.4,-53.8,-7.4,-60.6C7.5,-67.5,15,-76.5,27.6,-77.1C40.3,-77.7,53.7,-69.8,47.4,-65.6Z"
                transform="translate(100 100)"
              />
            </svg>
            <img
              src={kidsImage}
              alt="PTA event showing parents and teachers collaborating"
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl shadow-xl ring-4 ring-pink-200 transition duration-300 group-hover:ring-pink-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PTA;