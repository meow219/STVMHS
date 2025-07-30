import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Image imports

import Events1 from "../assets/science exhibtion/RCS_3997.jpg";
import Events2 from "../assets/science exhibtion/RCS_3999.jpg";
import Events3 from "../assets/science exhibtion/RCS_4000.jpg";
import Events4 from "../assets/science exhibtion/RCS_4011.jpg";
import Events5 from "../assets/science exhibtion/RCS_4015.jpg";
import Events6 from "../assets/science exhibtion/RCS_4016.jpg";
import Events7 from "../assets/science exhibtion/RCS_4017.jpg";
import Events8 from "../assets/science exhibtion/RCS_4019.jpg";
import Events9 from "../assets/science exhibtion/RCS_4020.jpg";
import Events10 from "../assets/science exhibtion/RCS_4021.jpg";
import Events11 from "../assets/science exhibtion/RCS_4022.jpg";
import Events12 from "../assets/science exhibtion/RCS_4029.jpg";
import Events13 from "../assets/science exhibtion/RCS_4031.jpg";
import Events14 from "../assets/science exhibtion/RCS_4032.jpg";
import Events15 from "../assets/science exhibtion/RCS_4052.jpg";

import sport1 from "../assets/sports/DSC07579.jpg";
import sport2 from "../assets/sports/DSC07580.jpg";
import sport3 from "../assets/sports/DSC07581.jpg";
import sport4 from "../assets/sports/DSC07582.jpg";
import sport5 from "../assets/sports/DSC07791.jpg";
import sport6 from "../assets/sports/DSC07802.jpg";
import sport7 from "../assets/sports/DSC07807.jpg";
import sport8 from "../assets/sports/DSC07821.jpg";
import sport9 from "../assets/sports/DSC07857.jpg";
import sport10 from "../assets/sports/DSC07905.jpg";
import sport11 from "../assets/sports/DSC07968.jpg";
import sport12 from "../assets/sports/DSC08262.jpg";
import sport13 from "../assets/sports/DSC08296.jpg";
import sport14 from "../assets/sports/DSC_4809.jpg";
import sport15 from "../assets/sports/IMG_0036.jpg";
import sport16 from "../assets/sports/IMG_0116.jpg";
import sport17 from "../assets/sports/IMG_0186.jpg";
import sport18 from "../assets/sports/IMG_0195.jpg";
import sport19 from "../assets/sports/RFS_0194.jpg";
import sport20 from "../assets/sports/RFS_0195.jpg";
import sport21 from "../assets/sports/RFS_0266.jpg";
import sport22 from "../assets/sports/RFS_0268.jpg";
import sport23 from "../assets/sports/RFS_0269.jpg";
import sport24 from "../assets/sports/RFS_0280.jpg";

import annual1 from "../assets/photo shoot/20250315_102549.jpg";
import annual2 from "../assets/photo shoot/20250315_102647.jpg";
import annual3 from "../assets/photo shoot/20250315_103743.jpg";
import annual4 from "../assets/photo shoot/DSC04173.jpg";
import annual5 from "../assets/photo shoot/DSC04495.jpg";
import annual6 from "../assets/photo shoot/DSC04504.jpg";
import annual7 from "../assets/photo shoot/DSC_4320.jpg";
import annual8 from "../assets/photo shoot/DSC_4530.jpg";
import annual9 from "../assets/photo shoot/DSC_4532.jpg";
import annual10 from "../assets/photo shoot/DSC_4534.jpg";
import annual11 from "../assets/photo shoot/DSC_4536.jpg";
import annual12 from "../assets/photo shoot/DSC_4538.jpg";
import annual13 from "../assets/photo shoot/DSC_4546.jpg";
import annual14 from "../assets/photo shoot/DSC_4549.jpg";
import annual15 from "../assets/photo shoot/DSC_4552.jpg";
import annual16 from "../assets/photo shoot/DSC_4570.jpg";
import annual17 from "../assets/photo shoot/Mrs.Dhanalakshmi.jpg";
import annual18 from "../assets/photo shoot/Mrs.Muthulakshmi.jpg";
import annual19 from "../assets/photo shoot/RFS_0001.jpg";
import annual20 from "../assets/photo shoot/RFS_0006.jpg";
import annual21 from "../assets/photo shoot/RFS_0007.jpg";
import annual22 from "../assets/photo shoot/DSC_4551.jpg";

import backgroundImage from "../assets/bg/blogbg.jpg";

const Gallery = () => {
  const galleryCategories = useMemo(
    () => [
      {
        name: "School Events",
        images: [
          Events1,
          Events2,
          Events3,
          Events4,
          Events5,
          Events6,
          Events7,
          Events8,
          Events9,
          Events10,
          Events11,
          Events12,
          Events13,
          Events14,
          Events15,
        ],
        direction: "right",
      },
      {
        name: "Sports Day",
        images: [
          sport1,
          sport2,
          sport3,
          sport4,
          sport5,
          sport6,
          sport7,
          sport8,
          sport9,
          sport10,
          sport11,
          sport12,
          sport13,
          sport14,
          sport15,
          sport16,
          sport17,
          sport18,
          sport19,
          sport20,
          sport21,
          sport22,
          sport23,
          sport24,
        ],
        direction: "left",
      },
      {
        name: "Annual Day",
        images: [
          annual1,
          annual2,
          annual3,
          annual4,
          annual5,
          annual6,
          annual7,
          annual8,
          annual9,
          annual10,
          annual11,
          annual12,
          annual13,
          annual14,
          annual15,
          annual16,
          annual17,
          annual18,
          annual19,
          annual20,
          annual21,
          annual22,
        ],
        direction: "right",
      },
    ],
    []
  );

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);
  const carouselRefs = useRef([]);
  const animationIntervals = useRef([]);

  const openImage = useCallback((img, index, catIndex) => {
    setSelectedImage(img);
    setCurrentIndex(index);
    setCurrentCategory(catIndex);
  }, []);

  const navigate = useCallback(
    (direction) => {
      const categoryImages = galleryCategories[currentCategory].images;
      let newIndex = currentIndex + direction;
      if (newIndex >= categoryImages.length) newIndex = 0;
      else if (newIndex < 0) newIndex = categoryImages.length - 1;

      setCurrentIndex(newIndex);
      setSelectedImage(categoryImages[newIndex]);
    },
    [currentCategory, currentIndex, galleryCategories]
  );

  const scrollCarousel = useCallback((direction, catIndex) => {
    const carousel = carouselRefs.current[catIndex];
    if (carousel) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, []);

useEffect(() => {
  const setupCarouselAnimations = () => {
    galleryCategories.forEach((category, catIndex) => {
      const intervalId = setInterval(() => {
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
      }, 3000);

      animationIntervals.current[catIndex] = intervalId;
    });
  };

  setupCarouselAnimations();

  // ✅ Use a local copy of the ref's current value for cleanup
  const intervalsToClear = [...animationIntervals.current];

  return () => {
    intervalsToClear.forEach((interval) => {
      if (interval) clearInterval(interval);
    });
  };
}, [galleryCategories]);


  return (
    <div className="min-h-screen">
      {/* Hero Background Section */}
      <div
        className="text-white py-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
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
                viewport={{ once: true, margin: "-100px" }}
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
                    className="flex overflow-x-auto pb-6 space-x-4 px-2"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    <style jsx>{`
                      [class*="overflow-x-auto"]::-webkit-scrollbar {
                        display: none;
                      }
                    `}</style>

                    {category.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex-shrink-0 relative overflow-hidden rounded-xl shadow-lg cursor-pointer w-72 h-64"
                        onClick={() => openImage(image, imgIndex, catIndex)}
                      >
                        <img
                          src={image}
                          alt={`${category.name} ${imgIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-white font-medium">View Photo</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-amber-600 p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollCarousel("left", catIndex);
                    }}
                    aria-label={`Scroll ${category.name} left`}
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-amber-600 p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollCarousel("right", catIndex);
                    }}
                    aria-label={`Scroll ${category.name} right`}
                  >
                    <FiChevronRight className="w-5 h-5" />
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
