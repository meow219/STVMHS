import React from "react";

// 🔥 Optimized ImageKit URLs with resizing, compression, and WebP
const activities = [
  {
    id: 1,
    title: "Art & Drawing",
    image:
      "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/4.Silambam.jpg?updatedAt=1751313191647?tr=w-400,h-400,c-at_max,q-50,f-webp",
    bgColor: "bg-pink-100",
    textColor: "text-pink-800",
    ringColor: "ring-pink-300",
  },
  {
    id: 2,
    title: "Color Management",
    image:
      "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/4%20(3).jpg?updatedAt=1751313191347?tr=w-400,h-400,c-at_max,q-50,f-webp",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
    ringColor: "ring-yellow-300",
  },
  {
    id: 3,
    title: "Athletic & Dance",
    image:
      "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/3.jpg?updatedAt=1751313189999?tr=w-400,h-400,c-at_max,q-50,f-webp",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
    ringColor: "ring-blue-300",
  },
  {
    id: 4,
    title: "Language & Speaking",
    image:
      "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/3%20(3).jpg?updatedAt=1751313186383?tr=w-400,h-400,c-at_max,q-50,f-webp",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
    ringColor: "ring-green-300",
  },
  {
    id: 5,
    title: "Religion & History",
    image:
      "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/2%20(3).jpg?updatedAt=1751313185691?tr=w-400,h-400,c-at_max,q-50,f-webp",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
    ringColor: "ring-purple-300",
  },
  {
    id: 6,
    title: "General Knowledge",
    image:
      "https://ik.imagekit.io/zmcjodd1h/School%20website/Extra%20Curricular%20Activities/1.Yoga.jpg?updatedAt=1751313185424?tr=w-400,h-400,c-at_max,q-50,f-webp",
    bgColor: "bg-orange-100",
    textColor: "text-orange-800",
    ringColor: "ring-orange-300",
  },
];

const Activities = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Young Thinkers' <span className="text-amber-600">Arena</span>
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Activities designed for little adventurers to explore, express, and
          excel.
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
            <div
              className={`rounded-full w-3/4 mx-auto aspect-square p-2 shadow-md ring-4 ${activity.ringColor} transition-transform duration-300 group-hover:scale-105`}
            >
              <img
                src={activity.image}
                alt={activity.title}
                loading="lazy" // ✅ Lazy loading
                width="400"
                height="400"
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
