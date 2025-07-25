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

const Events = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const placeholder =
    "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/1.Yoga.jpg?tr=w-800,q-70,f-webp";

  const TAB_ORDER = ["events", "Curricular", "achievements", "groups"];

  const THEME_CONFIG = {
    events: {
      bgColor: "bg-pink-200",
      textColor: "text-gray-800",
      icon: <CalendarDaysIcon className="w-5 h-5 mr-1" />,
    },
    Curricular: {
      bgColor: "bg-yellow-100",
      textColor: "text-gray-800",
      icon: <MusicalNoteIcon className="w-5 h-5 mr-1" />,
    },
    achievements: {
      bgColor: "bg-green-100",
      textColor: "text-black",
      icon: <TrophyIcon className="w-5 h-5 mr-1" />,
    },
    groups: {
      bgColor: "bg-orange-100",
      textColor: "text-black",
      icon: <ClipboardDocumentListIcon className="w-5 h-5 mr-1" />,
    },
  };

  const upcomingEvents = useMemo(
    () => [
      {
        id: 1,
        title: "Annual Sports Day",
        icon: <TrophyIcon className="h-6 w-6 text-blue-600" />,
        image:
          "https://ik.imagekit.io/zmcjodd1h/School%20website/sports/IMG_0195.jpg?updatedAt=1751313852588?tr=w-800,q-70,f-webp",
      },
      {
        id: 2,
        title: "Science Exhibition",
        icon: <AcademicCapIcon className="h-6 w-6 text-green-600" />,
        image:
          "https://ik.imagekit.io/zmcjodd1h/School%20website/science%20exhibtion/RCS_4011.jpg?updatedAt=1751313765249?tr=w-800,q-70,f-webp",
      },
      {
        id: 3,
        title: "Annual Day Celebration",
        icon: <MusicalNoteIcon className="h-6 w-6 text-red-600" />,
        image:
          "https://ik.imagekit.io/zmcjodd1h/School%20website/dance/DSC_5054.jpg?updatedAt=1751313139328?tr=w-800,q-70,f-webp",
      },
      {
        id: 4,
        title: "KG Day",
        icon: <AcademicCapIcon className="h-6 w-6 text-yellow-600" />,
        image:
          "https://ik.imagekit.io/zmcjodd1h/School%20website/events/kg-day.jpg?tr=w-800,q-70,f-webp",
      },
      {
        id: 5,
        title: "Share and Care Day",
        icon: <HandRaisedIcon className="h-6 w-6 text-purple-600" />,
        image:
          "https://ik.imagekit.io/zmcjodd1h/School%20website/events/share-care.jpg?tr=w-800,q-70,f-webp",
      },
      {
        id: 6,
        title: "Green Day",
        icon: <SparklesIcon className="h-6 w-6 text-green-600" />,
        image:
          "https://ik.imagekit.io/zmcjodd1h/School%20website/events/green-day.jpg?tr=w-800,q-70,f-webp",
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
        image:
          "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/3.Bharadham.jpg?updatedAt=1751313191122?tr=w-800,q-70,f-webp",
      },
      {
        title: "Silambam",
        description:
          "Ancient martial arts like Silambam instill discipline, agility, and cultural pride.",
        image:
          "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/4.Silambam.jpg?updatedAt=1751313191647?tr=w-800,q-70,f-webp",
      },
      {
        title: "Karate",
        description:
          "Karate sessions that build confidence, strength, and self-defense techniques.",
        image:
          "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/2.Karate.jpg?updatedAt=1751313186486?tr=w-800,q-70,f-webp",
      },
      {
        title: "Yoga",
        description:
          "Yoga promotes mindfulness, flexibility, and holistic student wellness.",
        image:
          "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/1.Yoga.jpg?updatedAt=1751313186432?tr=w-800,q-70,f-webp",
      },
    ],
    []
  );

  const achievementBanners = useMemo(
    () => [
      "https://ik.imagekit.io/zmcjodd1h/School%20website/Banner/COCING.jpg?updatedAt=1751313044477?tr=w-1000,q-80,f-webp",
      "https://ik.imagekit.io/zmcjodd1h/School%20website/Banner/HSC.jpg?updatedAt=1751313044523?tr=w-1000,q-80,f-webp",
      "https://ik.imagekit.io/zmcjodd1h/School%20website/Banner/SSLC.jpg?updatedAt=1751313044486?tr=w-1000,q-80,f-webp",
      "https://ik.imagekit.io/zmcjodd1h/School%20website/Banner/toppers%20(1).jpg?updatedAt=1751313044409?tr=w-1000,q-80,f-webp",
    ],
    []
  );

  const achievementImages = useMemo(
    () =>
      Array.from(
        { length: 8 },
        () =>
          "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/4.Silambam.jpg?updatedAt=1751313191647?tr=w-800,q-70,f-webp"
      ),
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
      <h2 className="text-center mb-12 text-3xl font-bold text-gray-900">
        Beyond the classrooms
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );

  const EventCard = ({ event }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="h-48 overflow-hidden relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/1.Yoga.jpg?updatedAt=1751313186432&tr=w-800,q-70,f-webp";
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-6 group-hover:bg-gray-50 transition-colors duration-300">
        <div className="flex items-center">
          {event.icon}
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300 ml-2">
            {event.title}
          </h3>
        </div>
      </div>
    </div>
  );

  const CurricularTab = () => (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Beyond the Textbooks!
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Our school fosters holistic development through a variety of
          extracurricular activities.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CurricularActivities.map((activity, i) => (
          <ActivityCard key={i} activity={activity} />
        ))}
      </div>
    </section>
  );

  const ActivityCard = ({ activity }) => (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          src={activity.image}
          alt={activity.title}
          onError={(e) => (e.target.src = placeholder)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-5 group-hover:bg-gray-50 transition-colors duration-300">
        <h5 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
          {activity.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
          {activity.description}
        </p>
      </div>
    </div>
  );

  const AchievementsTab = () => (
    <section className={THEME_CONFIG.achievements.textColor}>
      <h2 className="text-3xl font-bold mb-8 text-center">
        Pride then, Power now.!
      </h2>
      <p className="text-gray-600 mt-1 max-w-2xl mx-auto text-center mb-20">
        Our school celebrates excellence through a journey of remarkable
        achievements.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {achievementBanners.map((img, i) => (
          <div
            key={i}
            onClick={() => handleImageClick(img)}
            className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <img
              src={img}
              alt={`Banner ${i + 1}`}
              className="w-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {achievementImages.map((img, index) => (
          <AchievementImage key={index} img={img} index={index} />
        ))}
      </div>
    </section>
  );

  const AchievementImage = ({ img, index }) => (
    <div className="overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={`Achievement ${index + 1}`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <MagnifyingGlassIcon className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );

  const GROUPS = [
    {
      id: 1,
      color: "bg-yellow-300",
      shadow: "shadow-[6px_6px_0px_#000]",
      subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    },
    {
      id: 2,
      color: "bg-red-400",
      shadow: "shadow-[6px_6px_0px_#000]",
      subjects: ["Maths", "Physics", "Chemistry", "Computer Science"],
    },
    {
      id: 3,
      color: "bg-pink-300",
      shadow: "shadow-[6px_6px_0px_#000]",
      subjects: [
        "Commerce",
        "Economics",
        "Accountancy",
        "Computer Application",
      ],
    },
    {
      id: 4,
      color: "bg-cyan-300",
      shadow: "shadow-[6px_6px_0px_#000]",
      subjects: ["Commerce", "Economics", "Accountancy", "Business Maths"],
    },
  ];

  const GroupsTab = () => (
    <section className={`text-center ${THEME_CONFIG.groups.textColor}`}>
      <h2 className="text-3xl font-bold mb-8">Academic Groups</h2>
      <p className="text-gray-600 mt-1 max-w-2xl mx-auto mb-12">
        Our school offers diverse academic groups to cater to different
        interests and career paths.
      </p>

      <div className="flex flex-col gap-8 items-center">
        {GROUPS.map((group) => (
          <GroupCard key={group.id} {...group} />
        ))}
      </div>
    </section>
  );

  const GroupCard = ({ id, color, shadow, subjects }) => (
    <div
      className={`relative w-full max-w-3xl p-6 rounded-xl text-left text-white ${color} ${shadow} transition-transform duration-300 hover:scale-105`}
    >
      <div className="absolute -top-6 -left-6 w-12 h-12 bg-white p-2 rounded-md shadow-md flex items-center justify-center font-bold text-black text-xl">
        {id}
      </div>

      <h3 className="text-base font-medium pl-12">{subjects.join(" / ")}</h3>
    </div>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${THEME_CONFIG[activeTab].bgColor}`}
    >
      <div
        className="text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/zmcjodd1h/School%20website/bg/blogbg.jpg?tr=w-1600,q-80,f-webp')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center flex-wrap gap-4">
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

      <main className="max-w-6xl mx-auto px-4 py-12 transition-opacity duration-500 ease-in-out">
        {activeTab === "events" && <EventsTab />}
        {activeTab === "Curricular" && <CurricularTab />}
        {activeTab === "achievements" && <AchievementsTab />}
        {activeTab === "groups" && <GroupsTab />}
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
  <div
    onClick={onClick}
    className={`w-44 h-16 flex items-center justify-center cursor-pointer transition-all duration-300 font-medium relative rounded-xl ${
      activeTab === tab
        ? `${config.bgColor} text-black scale-105 shadow-lg`
        : "bg-gray-100 text-black hover:scale-105"
    }`}
  >
    <div className="relative z-10 flex items-center gap-2">
      <span className="text-black">{config.icon}</span>
      {tab === "Curricular" ? (
        <>
          <span>Curricular</span>
        </>
      ) : (
        <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
      )}
    </div>
  </div>
);

const ImageModal = ({ isOpen, image, onClose }) => (
  <div
    onClick={onClose}
    className={`fixed inset-0 bg-black flex items-center justify-center z-50 cursor-zoom-out transition-opacity duration-300 ${
      isOpen ? "bg-opacity-80" : "bg-opacity-0 pointer-events-none"
    }`}
  >
    {image && (
      <img
        src={image}
        alt="Full view"
        className={`max-w-full max-h-full rounded-lg shadow-2xl transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-90"
        }`}
      />
    )}
  </div>
);

export default Events;
