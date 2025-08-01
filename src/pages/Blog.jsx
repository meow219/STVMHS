import React, { useState, useMemo } from "react";
import {
  AcademicCapIcon,
  TrophyIcon,
  MusicalNoteIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  HandRaisedIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

// Local image imports
import placeholder from "../assets/Abacus/20250217_113814.jpg";
import sportsDay from "../assets/sports/DSC07791.jpg";
import scienceExhibition from "../assets/science exhibtion/RCS_3997.jpg";
import annualDay from "../assets/Dance/annual/DSC_4320.jpg";
import kgDay from "../assets/Lkg/20250709_133710.jpg";
import shareCareDay from "../assets/Lkg/20250709_133639.jpg";
import greenDay from "../assets/Lkg/20250709_133639.jpg";
import bharathanatyam from "../assets/Lkg/20250709_133639.jpg";
import silambam from "../assets/Lkg/20250709_133639.jpg";
import karate from "../assets/Lkg/20250709_133639.jpg";
import yoga from "../assets/Lkg/20250709_133639.jpg";
import codingBanner from "../assets/Banner/Portait/COCING.jpg";
import hscBanner from "../assets/Banner/Portait/HSC.jpg";
import sslcBanner from "../assets/Banner/Portait/SSLC.jpg";
import toppersBanner from "../assets/Banner/Portait/toppers (1).jpg";
import blogBg from "../assets/Bg/blogbg.jpg";

const Events = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const TAB_ORDER = ["events", "Curricular", "achievements", "groups"];

  const THEME_CONFIG = {
    events: {
      bgColor: "bg-pink-200",
      textColor: "text-gray-800",
      icon: <CalendarDaysIcon className="w-5 h-5" />,
    },
    Curricular: {
      bgColor: "bg-yellow-100",
      textColor: "text-gray-800",
      icon: <MusicalNoteIcon className="w-5 h-5" />,
    },
    achievements: {
      bgColor: "bg-green-100",
      textColor: "text-black",
      icon: <TrophyIcon className="w-5 h-5" />,
    },
    groups: {
      bgColor: "bg-orange-100",
      textColor: "text-black",
      icon: <ClipboardDocumentListIcon className="w-5 h-5" />,
    },
  };

  const upcomingEvents = useMemo(
    () => [
      {
        id: 1,
        title: "Annual Sports Day",
        icon: <TrophyIcon className="h-6 w-6 text-blue-600" />,
        image: sportsDay,
      },
      {
        id: 2,
        title: "Science Exhibition",
        icon: <AcademicCapIcon className="h-6 w-6 text-green-600" />,
        image: scienceExhibition,
      },
      {
        id: 3,
        title: "Annual Day Celebration",
        icon: <MusicalNoteIcon className="h-6 w-6 text-red-600" />,
        image: annualDay,
      },
      {
        id: 4,
        title: "KG Day",
        icon: <AcademicCapIcon className="h-6 w-6 text-yellow-600" />,
        image: kgDay,
      },
      {
        id: 5,
        title: "Share and Care Day",
        icon: <HandRaisedIcon className="h-6 w-6 text-purple-600" />,
        image: shareCareDay,
      },
      {
        id: 6,
        title: "Green Day",
        icon: <SparklesIcon className="h-6 w-6 text-green-600" />,
        image: greenDay,
      },
    ],
    []
  );

  const CurricularActivities = useMemo(
    () => [
      {
        title: "Bharathanatyam",
        description:
          "Grace and tradition come alive through mesmerizing Bharathanatyam performances.",
        image: bharathanatyam,
      },
      {
        title: "Silambam",
        description:
          "Ancient martial arts like Silambam instill discipline, agility, and cultural pride.",
        image: silambam,
      },
      {
        title: "Karate",
        description:
          "Karate sessions that build confidence, strength, and self-defense techniques.",
        image: karate,
      },
      {
        title: "Yoga",
        description:
          "Yoga promotes mindfulness, flexibility, and holistic student wellness.",
        image: yoga,
      },
    ],
    []
  );

  const achievementBanners = useMemo(
    () => [codingBanner, hscBanner, sslcBanner, toppersBanner],
    []
  );

  const achievementImages = useMemo(
    () => Array.from({ length: 8 }, () => silambam),
    []
  );

  const handleImageClick = (img) => {
    setModalImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalImage(null), 300);
  };

  const EventsTab = () => (
    <section>
      <h2 className="text-center mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-gray-900">
        Beyond the Classrooms
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );

  const EventCard = ({ event }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="h-48 sm:h-56 overflow-hidden relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholder;
          }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-4 sm:p-6 group-hover:bg-gray-50 transition-colors duration-300">
        <div className="flex items-center">
          {event.icon}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300 ml-2">
            {event.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );

  const CurricularTab = () => (
    <section>
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Beyond the Textbooks!
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
          Our school fosters holistic development through a variety of
          extracurricular activities.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {CurricularActivities.map((activity, i) => (
          <ActivityCard key={i} activity={activity} index={i} />
        ))}
      </div>
    </section>
  );

  const ActivityCard = ({ activity, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          src={activity.image}
          alt={activity.title}
          onError={(e) => (e.target.src = placeholder)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-4 sm:p-5 group-hover:bg-gray-50 transition-colors duration-300">
        <h5 className="mb-2 text-lg sm:text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
          {activity.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
          {activity.description}
        </p>
      </div>
    </motion.div>
  );

  const AchievementsTab = () => (
    <section className={THEME_CONFIG.achievements.textColor}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Pride then, Power now!
      </h2>
      <p className="text-gray-600 mt-1 max-w-2xl mx-auto text-center mb-12 sm:mb-20 text-sm sm:text-base">
        Our school celebrates excellence through a journey of remarkable
        achievements.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
        {achievementBanners.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => handleImageClick(img)}
            className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <img
              src={img}
              alt={`Banner ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {achievementImages.map((img, index) => (
          <AchievementImage key={index} img={img} index={index} />
        ))}
      </div>
    </section>
  );

  const AchievementImage = ({ img, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={img}
          alt={`Achievement ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <MagnifyingGlassIcon className="w-8 h-8 sm:w-12 sm:h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  );

  const GROUPS = [
    {
      id: 1,
      color: "bg-yellow-300",
      shadow: "shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000]",
      subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    },
    {
      id: 2,
      color: "bg-red-400",
      shadow: "shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000]",
      subjects: ["Maths", "Physics", "Chemistry", "Computer Science"],
    },
    {
      id: 3,
      color: "bg-pink-300",
      shadow: "shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000]",
      subjects: ["Commerce", "Economics", "Accountancy", "Computer Application"],
    },
    {
      id: 4,
      color: "bg-cyan-300",
      shadow: "shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000]",
      subjects: ["Commerce", "Economics", "Accountancy", "Business Maths"],
    },
  ];

  const GroupsTab = () => (
    <section className={`text-center ${THEME_CONFIG.groups.textColor}`}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Academic Groups</h2>
      <p className="text-gray-600 mt-1 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
        Our school offers diverse academic groups to cater to different
        interests and career paths.
      </p>

      <div className="flex flex-col gap-6 sm:gap-8 items-center">
        {GROUPS.map((group) => (
          <GroupCard key={group.id} {...group} />
        ))}
      </div>
    </section>
  );

  const GroupCard = ({ id, color, shadow, subjects }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      className={`relative w-full max-w-3xl p-4 sm:p-6 rounded-lg sm:rounded-xl text-left text-white ${color} ${shadow} transition-transform duration-300 hover:scale-[1.02]`}
    >
      <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-white p-1 sm:p-2 rounded-md shadow-md flex items-center justify-center font-bold text-black text-lg sm:text-xl">
        {id}
      </div>

      <h3 className="text-sm sm:text-base font-medium pl-8 sm:pl-12">
        {subjects.join(" / ")}
      </h3>
    </motion.div>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${THEME_CONFIG[activeTab].bgColor}`}
    >
      <div
        className="text-white py-16 sm:py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${blogBg})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">School Events & Activities</h1>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {TAB_ORDER.map((tab, i) => (
              <TabButton
                key={tab}
                tab={tab}
                activeTab={activeTab}
                onClick={() => setActiveTab(tab)}
                config={THEME_CONFIG[tab]}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 transition-opacity duration-500 ease-in-out">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "events" && <EventsTab />}
            {activeTab === "Curricular" && <CurricularTab />}
            {activeTab === "achievements" && <AchievementsTab />}
            {activeTab === "groups" && <GroupsTab />}
          </motion.div>
        </AnimatePresence>
      </main>

      <ImageModal
        isOpen={isModalOpen}
        image={modalImage}
        onClose={closeModal}
      />
    </div>
  );
};

const TabButton = ({ tab, index, activeTab, onClick, config }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onClick={onClick}
    className={`w-36 sm:w-44 h-12 sm:h-16 flex items-center justify-center cursor-pointer transition-all duration-300 font-medium relative rounded-lg sm:rounded-xl ${
      activeTab === tab
        ? `${config.bgColor} text-black scale-105 shadow-lg`
        : "bg-white/90 text-black hover:scale-105"
    }`}
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative z-10 flex items-center gap-2">
      {config.icon}
      <span className="text-sm sm:text-base">
        {tab === "Curricular" ? "Curricular" : tab.charAt(0).toUpperCase() + tab.slice(1)}
      </span>
    </div>
  </motion.div>
);

const ImageModal = ({ isOpen, image, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out p-4"
      >
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          src={image}
          alt="Full view"
          className="max-w-full max-h-full rounded-lg shadow-2xl"
        />
      </motion.div>
    )}
  </AnimatePresence>
);

export default Events;