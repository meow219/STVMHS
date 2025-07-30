import React from "react";

// Import all activity images
import artDrawing from "../../assets/Extra Curricular Activities/1.Yoga.jpg";
import colorManagement from "../../assets/Extra Curricular Activities/1.jpg";
import athleticDance from "../../assets/Extra Curricular Activities/2 (2).jpg";
import languageSpeaking from "../../assets/Extra Curricular Activities/2 (3).jpg";
import religionHistory from "../../assets/Extra Curricular Activities/2.Karate.jpg";
import generalKnowledge from "../../assets/Extra Curricular Activities/2.jpg";

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: "Art & Drawing",
      image: artDrawing,
      bgColor: "bg-pink-100",
      textColor: "text-pink-800",
      ringColor: "ring-pink-300",
    },
    {
      id: 2,
      title: "Color Management",
      image: colorManagement,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      ringColor: "ring-yellow-300",
    },
    {
      id: 3,
      title: "Athletic & Dance",
      image: athleticDance,
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      ringColor: "ring-blue-300",
    },
    {
      id: 4,
      title: "Language & Speaking",
      image: languageSpeaking,
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      ringColor: "ring-green-300",
    },
    {
      id: 5,
      title: "Religion & History",
      image: religionHistory,
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      ringColor: "ring-purple-300",
    },
    {
      id: 6,
      title: "General Knowledge",
      image: generalKnowledge,
      bgColor: "bg-orange-100",
      textColor: "text-orange-800",
      ringColor: "ring-orange-300",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Young Thinkers' <span className="text-amber-600">Arena</span>
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Activities designed for little adventurers to explore, express, and excel.
        </p>
      </div>

      {/* Activity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${activity.bgColor} ${activity.textColor}`}
          >
            {/* Circular Image */}
            <div className={`rounded-full w-3/4 mx-auto aspect-square p-2 shadow-md ring-4 ${activity.ringColor} transition-transform duration-300 group-hover:scale-105`}>
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-center mt-6 group-hover:underline">
              {activity.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
