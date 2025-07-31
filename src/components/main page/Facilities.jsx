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

// Local image imports (assuming you've placed images in src/assets/images/facilities/)
import physicsLabThumb from "../../assest/Lab/Advanced Physics Lab 1.jpg";
import physicsLabFull from "../../assest/Lab/Advanced Physics Lab 1.jpg";
import chemistryLabThumb from "../../assest/Lab/Chemistry Lab.jpg";
import chemistryLabFull from "../../assest/Lab/Chemistry Lab.jpg";
import biologyLabThumb from "../../assest/Lab/Biology Lab 1.jpg";
import biologyLabFull from "../../assest/Lab/Biology Lab 1.jpg";
import computerLabThumb from "../../assest/Lab/Computer Lab.jpg";
import computerLabFull from "../../assest/Lab/Computer Lab.jpg";
import transportThumb from "../../assest/Lab/Biology Lab.jpg";
import transportFull from "../../assest/Lab/Biology Lab.jpg";
import libraryThumb from "../../assest/Lab/Advanced Physics Lab.jpg";
import libraryFull from "../../assest/Lab/Advanced Physics Lab.jpg";
import canteenThumb from "../../assest/Lab/Smart Class 1.jpg";
import canteenFull from "../../assest/Lab/Smart Class 1.jpg";
import securityThumb from "../../assest/Lab/Smart Class.jpg";
import securityFull from "../../assest/Lab/Smart Class.jpg";
import placeholderImg from "../../assest/Lab/Smart Class.jpg";

const facilities = [
  {
    id: 1,
    title: "Physics Lab",
    icon: <BoltIcon className="h-6 w-6 text-white" />,
    description: "Equipped with advanced instruments to enhance scientific learning.",
    image: {
      thumb: physicsLabThumb,
      full: physicsLabFull,
    },
    badge: "Lab",
  },
  {
    id: 2,
    title: "Chemistry Lab",
    icon: <BeakerIcon className="h-6 w-6 text-white" />,
    description: "Safety-first environment with modern tools for experiments.",
    image: {
      thumb: chemistryLabThumb,
      full: chemistryLabFull,
    },
    badge: "Lab",
  },
  {
    id: 3,
    title: "Biology Lab",
    icon: <EyeDropperIcon className="h-6 w-6 text-white" />,
    description: "Hands-on exploration of life sciences and biology models.",
    image: {
      thumb: biologyLabThumb,
      full: biologyLabFull,
    },
    badge: "Lab",
  },
  {
    id: 4,
    title: "Computer Lab",
    icon: <ComputerDesktopIcon className="h-6 w-6 text-white" />,
    description: "High-speed systems and interactive software for tech learning.",
    image: {
      thumb: computerLabThumb,
      full: computerLabFull,
    },
    badge: "Lab",
  },
  {
    id: 5,
    title: "Transport",
    icon: <TruckIcon className="h-6 w-6 text-white" />,
    description: "Safe and reliable transport service with GPS tracking.",
    image: {
      thumb: transportThumb,
      full: transportFull,
    },
    badge: "Transport",
  },
  {
    id: 6,
    title: "Library",
    icon: <BookOpenIcon className="h-6 w-6 text-white" />,
    description: "Extensive collection of books and a quiet study environment.",
    image: {
      thumb: libraryThumb,
      full: libraryFull,
    },
    badge: "Knowledge",
  },
  {
    id: 7,
    title: "Canteen",
    icon: <CakeIcon className="h-6 w-6 text-white" />,
    description: "Nutritious meals and purified water for students' well-being.",
    image: {
      thumb: canteenThumb,
      full: canteenFull,
    },
    badge: "Food",
  },
  {
    id: 8,
    title: "Security",
    icon: <VideoCameraIcon className="h-6 w-6 text-white" />,
    description: "24x7 surveillance for a safe and secure campus.",
    image: {
      thumb: securityThumb,
      full: securityFull,
    },
    badge: "Security",
  },
];

const Facilities = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-16 px-4">
        <h1 className="text-5xl font-serif text-gray-900 mb-4">Facilities</h1>
        <p className="text-xl text-gray-700 font-serif">
          Our Safe, Smart, and Supportive Spaces
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image.thumb}
                  alt={facility.title}
                  loading="lazy"
                  width={500}
                  height={350}
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderImg;
                  }}
                />
                <span className="absolute top-3 right-3 bg-cyan-600 text-white text-xs font-medium px-2 py-0.5 rounded-full shadow">
                  {facility.badge}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                    {facility.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 font-serif">
                    {facility.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
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