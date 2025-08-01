import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FacilityCard = ({ facility, index }) => {
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
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: index * 0.1
      }}
      className={`group relative overflow-hidden rounded-3xl p-6 ${facility.bgColor} border ${facility.borderColor} transition-all duration-300 hover:shadow-xl ${facility.hoverBg} ${facility.hoverShadow} aspect-square`}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="facility-icon-wrapper">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full ${facility.bgColor} border-2 ${facility.borderColor} flex items-center justify-center text-3xl sm:text-4xl transition-all duration-300 group-hover:bg-white`}
          >
            {facility.icon}
          </motion.div>
        </div>

        <div className="text-center">
          <h3
            className={`text-lg sm:text-xl font-bold mb-2 transition-colors duration-300 ${facility.textColor} ${facility.hoverText}`}
          >
            {facility.title}
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm">
            {facility.description}
          </p>
        </div>

        <div
          className={`absolute top-0 left-0 w-3 h-6 sm:w-4 sm:h-8 rounded-full ${facility.bgColor} opacity-70`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-3 h-6 sm:w-4 sm:h-8 rounded-full ${facility.bgColor} opacity-70`}
        ></div>
      </div>
    </motion.div>
  );
};

const Facilities = () => {
  const facilities = [
    {
      title: "School Bus",
      description:
        "Safe and reliable transportation service for comfortable daily commutes.",
      icon: "🚌",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      hoverBg: "hover:bg-blue-200",
      hoverText: "group-hover:text-blue-700",
      hoverShadow: "hover:shadow-blue-300",
    },
    {
      title: "Playground",
      description:
        "Spacious area for structured games and free play to release energy.",
      icon: "⚽",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      hoverBg: "hover:bg-green-200",
      hoverText: "group-hover:text-green-700",
      hoverShadow: "hover:shadow-green-300",
    },
    {
      title: "Healthy Canteen",
      description:
        "Nutritious meals promoting healthy eating habits from early age.",
      icon: "🍎",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      borderColor: "border-yellow-200",
      hoverBg: "hover:bg-yellow-200",
      hoverText: "group-hover:text-yellow-700",
      hoverShadow: "hover:shadow-yellow-300",
    },
    {
      title: "Positive Learning",
      description:
        "Interactive environment fostering creativity and love for learning.",
      icon: "📚",
      bgColor: "bg-cyan-100",
      textColor: "text-cyan-600",
      borderColor: "border-cyan-200",
      hoverBg: "hover:bg-cyan-200",
      hoverText: "group-hover:text-cyan-700",
      hoverShadow: "hover:shadow-cyan-300",
    },
    {
      title: "Smart Classrooms",
      description:
        "Digital boards and interactive content for tech-driven learning.",
      icon: "💻",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      hoverBg: "hover:bg-indigo-200",
      hoverText: "group-hover:text-indigo-700",
      hoverShadow: "hover:shadow-indigo-300",
    },
    {
      title: "Art & Craft",
      description:
        "Dedicated sessions for artistic expression and creativity.",
      icon: "🎨",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
      borderColor: "border-pink-200",
      hoverBg: "hover:bg-pink-200",
      hoverText: "group-hover:text-pink-700",
      hoverShadow: "hover:shadow-pink-300",
    },
    {
      title: "Library",
      description:
        "Wide book selection cultivating reading habits from early age.",
      icon: "📖",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
      hoverBg: "hover:bg-orange-200",
      hoverText: "group-hover:text-orange-700",
      hoverShadow: "hover:shadow-orange-300",
    },
    {
      title: "Music & Dance",
      description:
        "Platforms for students to explore talents in performing arts.",
      icon: "🎵",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      hoverBg: "hover:bg-purple-200",
      hoverText: "group-hover:text-purple-700",
      hoverShadow: "hover:shadow-purple-300",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
          >
            Little Explorers' World
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600"
          >
            Every corner crafted for creativity and care.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} facility={facility} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;