import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import local images
import backgroundImage from "../assest/Bg/blogbg.jpg";

// Import sports images
import sports1 from "../assest/sports/DSC07579.jpg";
import sports2 from "../assest/sports/DSC07580.jpg";
import sports3 from "../assest/sports/DSC07581.jpg";
import sports4 from "../assest/sports/DSC07582.jpg";
import sports5 from "../assest/sports/DSC07791.jpg";
import sports6 from "../assest/sports/DSC07802.jpg";
import sports7 from "../assest/sports/DSC07807.jpg";
import sports8 from "../assest/sports/DSC07821.jpg";

// Import parade images
import parade1 from "../assest/Parade/DSC07579.jpg";
import parade2 from "../assest/Parade/DSC07580.jpg";
import parade3 from "../assest/Parade/DSC07581.jpg";
import parade4 from "../assest/Parade/DSC07582.jpg";
import parade5 from "../assest/Parade/DSC07791.jpg";
import parade6 from "../assest/Parade/IMG_0036.jpg";
import parade7 from "../assest/Parade/IMG_0116.jpg";

// Import dance images
import dance1 from "../assest/Dance/DSC04173.jpg";
import dance2 from "../assest/Dance/DSC04229.jpg";
import dance3 from "../assest/Dance/DSC04272.jpg";
import dance4 from "../assest/Dance/DSC04273.jpg";
import dance5 from "../assest/Dance/DSC04287.jpg";
import dance6 from "../assest/Dance/DSC04313.jpg";
import dance7 from "../assest/Dance/DSC04393.jpg";
import dance8 from "../assest/Dance/DSC04393.jpg";

const Gallery = () => {
  const galleryCategories = useMemo(
    () => [
      {
        name: "Talented kids",
        direction: "right",
        images: [
          { thumb: sports1, full: sports1 },
          { thumb: sports2, full: sports2 },
          { thumb: sports3, full: sports3 },
          { thumb: sports4, full: sports4 },
          { thumb: sports5, full: sports5 },
          { thumb: sports6, full: sports6 },
          { thumb: sports7, full: sports7 },
          { thumb: sports8, full: sports8 },
        ],
      },
      {
        name: "Events memories",
        direction: "left",
        images: [
          { thumb: parade1, full: parade1 },
          { thumb: parade2, full: parade2 },
          { thumb: parade3, full: parade3 },
          { thumb: parade4, full: parade4 },
          { thumb: parade5, full: parade5 },
          { thumb: parade6, full: parade6 },
          { thumb: parade7, full: parade7 },
        ],
      },
      {
        name: "Memorable chief guests",
        direction: "right",
        images: [
          { thumb: dance1, full: dance1 },
          { thumb: dance2, full: dance2 },
          { thumb: dance3, full: dance3 },
          { thumb: dance4, full: dance4 },
          { thumb: dance5, full: dance5 },
          { thumb: dance6, full: dance6 },
          { thumb: dance7, full: dance7 },
          { thumb: dance8, full: dance8 },
        ],
      },
    ],
    []
  );

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRefs = useRef([]);
  const animationIntervals = useRef([]);
  const currentCategoryImages = useRef([]);

  const openImage = useCallback(
    (imgObj, index, catIndex) => {
      setSelectedImage(imgObj.full);
      setCurrentIndex(index);
      currentCategoryImages.current = galleryCategories[catIndex].images;
    },
    [galleryCategories]
  );

  const navigate = useCallback(
    (direction) => {
      const images = currentCategoryImages.current;
      let newIndex = currentIndex + direction;

      if (newIndex >= images.length) newIndex = 0;
      else if (newIndex < 0) newIndex = images.length - 1;

      setCurrentIndex(newIndex);
      setSelectedImage(images[newIndex].full);
    },
    [currentIndex]
  );

  const scrollCarousel = useCallback((direction, catIndex) => {
    requestAnimationFrame(() => {
      const carousel = carouselRefs.current[catIndex];
      if (carousel) {
        const scrollAmount = direction === "left" ? -300 : 300;
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    });
  }, []);

  useEffect(() => {
    const setupCarouselAnimations = () => {
      const intervals = [];

      galleryCategories.forEach((category, catIndex) => {
        const intervalId = setInterval(() => {
          requestAnimationFrame(() => {
            const carousel = carouselRefs.current[catIndex];
            if (carousel) {
              const direction = category.direction;
              const scrollAmount = direction === "left" ? -300 : 300;
              const maxScroll = carousel.scrollWidth - carousel.clientWidth;

              if (direction === "left" && carousel.scrollLeft <= 0) {
                carousel.scrollTo({ left: maxScroll, behavior: "instant" });
              } else if (
                direction === "right" &&
                carousel.scrollLeft >= maxScroll - 10
              ) {
                carousel.scrollTo({ left: 0, behavior: "instant" });
              } else {
                carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
              }
            }
          });
        }, 3000);

        intervals[catIndex] = intervalId;
        animationIntervals.current[catIndex] = intervalId;
      });

      return intervals;
    };

    const intervals = setupCarouselAnimations();

    return () => {
      intervals.forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, [galleryCategories]);

  return (
    <div className="min-h-screen">
      {/* Hero Background Section */}
      <div
        className="text-white py-28 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Gallery Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
            >
              Our <span className="text-amber-600">Gallery</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base text-gray-600 max-w-2xl mx-auto"
            >
              Capturing the vibrant moments of school life through our lens
            </motion.p>
          </div>

          <div className="space-y-16">
            {galleryCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="relative"
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className="h-1 bg-amber-600 rounded-full mr-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 60 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.h2
                    className="text-xl md:text-2xl font-semibold text-gray-800"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.name}
                  </motion.h2>
                </div>

                <div className="relative group">
                  <div
                    ref={(el) => (carouselRefs.current[catIndex] = el)}
                    className="flex overflow-x-auto pb-6 space-x-4 px-2 scrollbar-hide"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      WebkitOverflowScrolling: "touch",
                    }}
                  >
                    {category.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "50px" }}
                        transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex-shrink-0 relative overflow-hidden rounded-xl shadow-lg cursor-pointer w-72 h-64"
                        style={{ willChange: "transform" }}
                        onClick={() => openImage(image, imgIndex, catIndex)}
                      >
                        <img
                          src={image.thumb}
                          alt={`${category.name} ${imgIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          width={500}
                          height={400}
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-white font-medium">...</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Left Scroll Button */}
                  <button
                    className="absolute -left-14 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg z-10 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollCarousel("left", catIndex);
                    }}
                    aria-label={`Scroll ${category.name} left`}
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Right Scroll Button */}
                  <button
                    className="absolute -right-14 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg z-10 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollCarousel("right", catIndex);
                    }}
                    aria-label={`Scroll ${category.name} right`}
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt="Enlarged view"
                className="w-full max-h-[85vh] object-contain rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                loading="eager"
                decoding="sync"
              />

              <button
                className="absolute -top-10 right-0 text-white hover:text-amber-400 transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image viewer"
              >
                <FiX className="w-6 h-6" />
              </button>

              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-1 rounded-full backdrop-blur-sm transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(-1);
                }}
                aria-label="Previous image"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-1 rounded-full backdrop-blur-sm transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(1);
                }}
                aria-label="Next image"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;