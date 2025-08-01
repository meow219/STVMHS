import React from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const guestItems = [
  {
    title: "C. Sylendra Babu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-gBSIVHmqEYiEFhUqWRRp0ZO20QXkqJC_w&s=w_300,h_300,c_fill,f_auto",
  },
  {
    title: "Ms. Kiran Bedi",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
  {
    title: "Dr. Tessy Thomas",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
  {
    title: "Mr. Sundar Pichai",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
  {
    title: "Dr. A.P.J. Abdul Kalam",
    image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
  {
    title: "Ms. Kiran Bedi",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
  {
    title: "Dr. Tessy Thomas",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
  {
    title: "Mr. Sundar Pichai",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&h=300&q=60&fit=fill",
  },
];



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
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          arrows: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Our Guests, The Symbols of Inspiration!
        </h2>

        <div className="relative px-4 sm:px-8">
          <Slider {...settings}>
            {guestItems.map((item, index) => (
              <div key={index} className="px-2 focus:outline-none h-full">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-200 mx-auto w-full max-w-[240px]">
                  <div className="w-full pt-[100%] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      loading="lazy"
                      width={300}
                      height={300}
                      decoding="async"
                    />
                  </div>
                  <div className="p-4 h-20 flex items-center justify-center">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 text-center leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

<style jsx global>{`
        .slick-arrow {
          width: 40px;
          height: 40px;
          display: flex !important;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .slick-arrow:hover {
          transform: scale(1.05);
        }
        .slick-arrow::before {
          display: none;
        }
        .slick-next {
          right: -15px;
        }
        .slick-prev {
          left: -15px;
        }
      `}</style>
    </section>
  );
};

export default Guest;