import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Local image imports
import artDrawing from "../../assets/Lkg/20250709_132144.jpg";
import colorManagement from "../../assets/Lkg/20250709_132146.jpg";
import athleticDance from "../../assets/Lkg/20250709_132148.jpg";
import languageSpeaking from "../../assets/Lkg/20250709_133004.jpg";
import religionHistory from "../../assets/Lkg/20250709_133038.jpg";
import generalKnowledge from "../../assets/Lkg/20250709_133422.jpg";

const activities = [
  {
    id: 1,
    title: "Art & Drawing",
    image: artDrawing,
    bgColor: "bg-pink-100",
    textColor: "text-pink-800",
    ringColor: "ring-pink-300",
    hoverBg: "hover:bg-pink-200",
  },
  {
    id: 2,
    title: "Color Management",
    image: colorManagement,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
    ringColor: "ring-yellow-300",
    hoverBg: "hover:bg-yellow-200",
  },
  {
    id: 3,
    title: "Athletic & Dance",
    image: athleticDance,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
    ringColor: "ring-blue-300",
    hoverBg: "hover:bg-blue-200",
  },
  {
    id: 4,
    title: "Language & Speaking",
    image: languageSpeaking,
    bgColor: "bg-green-100",
    textColor: "text-green-800",
    ringColor: "ring-green-300",
    hoverBg: "hover:bg-green-200",
  },
  {
    id: 5,
    title: "Religion & History",
    image: religionHistory,
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
    ringColor: "ring-purple-300",
    hoverBg: "hover:bg-purple-200",
  },
  {
    id: 6,
    title: "General Knowledge",
    image: generalKnowledge,
    bgColor: "bg-orange-100",
    textColor: "text-orange-800",
    ringColor: "ring-orange-300",
    hoverBg: "hover:bg-orange-200",
  },
];

const ActivityCard = ({ activity, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${activity.bgColor} ${activity.textColor} ${activity.hoverBg}`}
    >
      {/* Circular Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`rounded-full w-48 h-48 sm:w-56 sm:h-56 mx-auto aspect-square p-2 shadow-md ring-4 ${activity.ringColor} transition-transform duration-300`}
      >
        <img
          src={activity.image}
          alt={activity.title}
          loading="lazy"
          width="400"
          height="400"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold text-center mt-6 transition-all duration-300 group-hover:underline">
        {activity.title}
      </h3>
    </motion.div>
  );
};

const Activities = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
          Young Thinkers' <span className="text-amber-600">Arena</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
          Activities designed for little adventurers to explore, express, and
          excel.
        </p>
      </motion.div>

      {/* Activity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {activities.map((activity, index) => (
          <ActivityCard key={activity.id} activity={activity} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Activities;
