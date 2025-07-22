import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FacilityCard = ({ facility, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`facility-card group relative overflow-hidden rounded-3xl p-6 ${facility.bgColor} border ${facility.borderColor} transition-all duration-300 hover:shadow-xl ${facility.hoverBg} ${facility.hoverShadow} aspect-square`}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="facility-icon-wrapper">
          <div
            className={`w-20 h-20 mx-auto rounded-full ${facility.bgColor} border-2 ${facility.borderColor} flex items-center justify-center text-4xl transition-all duration-300 group-hover:bg-white group-hover:scale-110`}
          >
            {facility.icon}
          </div>
        </div>

        <div className="text-center">
          <h3
            className={`text-xl font-bold mb-2 transition-colors duration-300 ${facility.textColor} ${facility.hoverText}`}
          >
            {facility.title}
          </h3>
          <p className="text-gray-700 text-sm">{facility.description}</p>
        </div>

        <div
          className={`absolute top-0 left-0 w-4 h-8 rounded-full ${facility.bgColor} opacity-70`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-4 h-8 rounded-full ${facility.bgColor} opacity-70`}
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
        "We provide a safe and reliable school bus service, ensuring that students have a comfortable and secure journey to and from school each day.",
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
        "Whether playing structured games or simply enjoying free play, our students find joy and a chance to release their energy here",
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
        "We offer nutritious and balanced meals that promote healthy eating habits from an early age",
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
        "Our walls are filled with interactive boards, colorful educational posters, and student work to foster creativity and a love for learning",
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
        "Equipped with digital boards and interactive content, enhancing engagement and understanding through tech-driven learning.",
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
        "We nurture creativity with dedicated art and craft sessions, helping students express themselves artistically.",
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
        "Our library offers a wide selection of books, encouraging students to cultivate a reading habit from an early age.",
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
        "Events like KG Day allow students to explore and develop their talents in performing arts, providing a platform for creativity and expression.",
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
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Little Explorers’ World
          </h2>
          <p className="text-lg text-gray-600">
            Every corner crafted for creativity and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} facility={facility} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
