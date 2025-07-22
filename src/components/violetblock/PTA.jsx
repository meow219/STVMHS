import React from "react";
import { motion } from "framer-motion";

// 🔄 Replace with your ImageKit-optimized URL
const kidsImage = "https://ik.imagekit.io/zmcjodd1h/School%20website/science%20exhibtion/RCS_4017.jpg?updatedAt=1751313766124?tr=w-800,q-70,f-webp";

const PTA = () => {
  return (
    <div className="h-auto flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full border border-pink-300 rounded-3xl shadow-xl bg-white/80 p-6 md:p-10"
      >
        {/* Left Side - Message */}
        <div className="relative bg-white px-6 py-8 rounded-3xl shadow-xl w-full md:w-2/3 transition-transform duration-500 hover:scale-105 hover:shadow-pink-300">
          <span className="absolute -top-6 left-4 text-6xl text-pink-400 font-serif hidden sm:block">“</span>
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Through <span className="text-amber-600">PTA</span>,
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            we create a supportive network where every voice matters in the journey of a child's growth.
          </p>
          <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
            We foster open communication between parents and educators to ensure a nurturing environment.
          </p>
          <span className="absolute -bottom-6 right-4 text-6xl text-pink-400 font-serif hidden sm:block">”</span>
        </div>

        {/* Right Side - Image with Blob */}
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 group">
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
            alt="PTA event"
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl shadow-xl ring-4 ring-pink-200 transition duration-500 group-hover:scale-105 group-hover:shadow-pink-200"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PTA;
