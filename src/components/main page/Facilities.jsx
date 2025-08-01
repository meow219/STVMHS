import React from "react";
import {
  BoltIcon,
  BeakerIcon,
  EyeDropperIcon,
  ComputerDesktopIcon,
  TruckIcon,
  BookOpenIcon,
  CakeIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

// Local image imports
import physicsLabThumb from "../../assets/Lab/Physics Lab 1.jpg";
import chemistryLabThumb from "../../assets/Lab/Chemistry Lab.jpg";
import biologyLabThumb from "../../assets/Lab/Biology Lab 1.jpg";
import computerLabThumb from "../../assets/Lab/Computer Lab.jpg";
import transportThumb from "../../assets/Lab/Biology Lab.jpg";
import libraryThumb from "../../assets/Lab/Physics Lab.jpg";
import canteenThumb from "../../assets/Lab/Smart Class 1.jpg";
import securityThumb from "../../assets/Lab/Smart Class.jpg";
import placeholderImg from "../../assets/Lab/Smart Class.jpg";

const facilities = [
  {
    id: 1,
    title: "Physics Lab",
    icon: <BoltIcon className="h-6 w-6 text-white" />,
    description:
      "Equipped with advanced instruments to enhance scientific learning.",
    image: { thumb: physicsLabThumb },
    badge: "Lab",
  },
  {
    id: 2,
    title: "Chemistry Lab",
    icon: <BeakerIcon className="h-6 w-6 text-white" />,
    description: "Safety-first environment with modern tools for experiments.",
    image: { thumb: chemistryLabThumb },
    badge: "Lab",
  },
  {
    id: 3,
    title: "Biology Lab",
    icon: <EyeDropperIcon className="h-6 w-6 text-white" />,
    description: "Hands-on exploration of life sciences and biology models.",
    image: { thumb: biologyLabThumb },
    badge: "Lab",
  },
  {
    id: 4,
    title: "Computer Lab",
    icon: <ComputerDesktopIcon className="h-6 w-6 text-white" />,
    description:
      "High-speed systems and interactive software for tech learning.",
    image: { thumb: computerLabThumb },
    badge: "Lab",
  },
  {
    id: 5,
    title: "Transport",
    icon: <TruckIcon className="h-6 w-6 text-white" />,
    description: "Safe and reliable transport service with GPS tracking.",
    image: { thumb: transportThumb },
    badge: "Transport",
  },
  {
    id: 6,
    title: "Library",
    icon: <BookOpenIcon className="h-6 w-6 text-white" />,
    description: "Extensive collection of books and a quiet study environment.",
    image: { thumb: libraryThumb },
    badge: "Knowledge",
  },
  {
    id: 7,
    title: "Canteen",
    icon: <CakeIcon className="h-6 w-6 text-white" />,
    description:
      "Nutritious meals and purified water for students' well-being.",
    image: { thumb: canteenThumb },
    badge: "Food",
  },
  {
    id: 8,
    title: "Security",
    icon: <VideoCameraIcon className="h-6 w-6 text-white" />,
    description: "24x7 surveillance for a safe and secure campus.",
    image: { thumb: securityThumb },
    badge: "Security",
  },
];

const Facilities = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-3 sm:mb-4">
          Facilities
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 font-serif">
          Our Safe, Smart, and Supportive Spaces
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={facility.image.thumb}
                  alt={facility.title}
                  loading="lazy"
                  width={500}
                  height={375}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderImg;
                  }}
                />
                <span className="absolute top-3 right-3 bg-cyan-600 text-white text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full shadow">
                  {facility.badge}
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    {facility.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 font-serif">
                    {facility.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
