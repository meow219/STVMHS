import React from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Preconnect to domains for better performance
const preconnectLinks = (
  <>
    <link rel="preconnect" href="https://images.unsplash.com" />
    <link rel="preconnect" href="https://encrypted-tbn0.gstatic.com" />
    <link rel="dns-prefetch" href="https://images.unsplash.com" />
    <link rel="dns-prefetch" href="https://encrypted-tbn0.gstatic.com" />
  </>
);

// Optimized guest items with proper image dimensions and formats
const guestItems = [
  {
    title: "C. Sylendra Babu",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-gBSIVHmqEYiEFhUqWRRp0ZO20QXkqJC_w&s=w_300,h_300,c_fill,f_auto",
  },
  {
    title: "Ms. Kiran Bedi",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
  {
    title: "Dr.Tessy Thomas",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
  {
    title: "Mr. Sundar Pichai",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
  {
    title: "Dr. A.P.J. Abdul Kalam",
    image:
      "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
  {
    title: "Ms. Kiran Bedi",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
  {
    title: "Dr.Tessy Thomas",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
  {
    title: "Mr. Sundar Pichai",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
];

// Custom arrows with better accessibility
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 z-10 bg-black text-white hover:bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    aria-label="Next slide"
  >
    <ChevronRightIcon className="w-5 h-5" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 z-10 bg-black text-white hover:bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    aria-label="Previous slide"
  >
    <ChevronLeftIcon className="w-5 h-5" />
  </button>
);

const Guest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Increased from 1500 for better UX
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {preconnectLinks}
      <div className="px-2 py-10 relative">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Our Guests, The Symbols of Inspiration!
        </h2>

        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {guestItems.map((item, index) => (
              <div key={index} className="px-2 focus:outline-none">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col max-w-[240px] mx-auto border border-gray-200">
                  <div className="w-full h-72 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={300}
                      height={300}
                      decoding="async"
                    />
                  </div>
                  <div className="p-3 whitespace-pre-line">
                    <h3 className="text-md font-semibold text-black text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom dot styling */}
        <style jsx global>{`
          .slick-dots {
            bottom: -40px !important;
          }
          .slick-dots li button:before {
            color: black !important;
            opacity: 0.5 !important;
            font-size: 10px !important;
          }
          .slick-dots li.slick-active button:before {
            color: black !important;
            opacity: 1 !important;
          }
          .slick-slide:focus {
            outline: none;
          }
        `}</style>
      </div>
    </>
  );
};

export default Guest;