import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import useScrollTriggeredCountUp from "../useScrollTriggeredCountUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faChalkboardUser,
  faTrophy,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

// Local image import
import bgImage from "../../assets/school view/Page No.1.jpg";

const Achievements = () => {
  const statRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const studentCount = useScrollTriggeredCountUp(statRefs[0], 2000, 2000);
  const teacherCount = useScrollTriggeredCountUp(statRefs[1], 80, 2000);
  const awardCount = useScrollTriggeredCountUp(statRefs[2], 100, 2000);
  const courseCount = useScrollTriggeredCountUp(statRefs[3], 1982, 2000);

  const stats = [
    {
      label: "Students",
      count: studentCount,
      ref: statRefs[0],
      icon: (
        <FontAwesomeIcon
          icon={faUserGroup}
          className="text-white text-2xl sm:text-3xl md:text-4xl"
        />
      ),
    },
    {
      label: "Teachers",
      count: teacherCount,
      ref: statRefs[1],
      icon: (
        <FontAwesomeIcon
          icon={faChalkboardUser}
          className="text-white text-2xl sm:text-3xl md:text-4xl"
        />
      ),
    },
    {
      label: "Result",
      count: awardCount,
      ref: statRefs[2],
      icon: (
        <FontAwesomeIcon
          icon={faTrophy}
          className="text-white text-2xl sm:text-3xl md:text-4xl"
        />
      ),
    },
    {
      label: "Established Year",
      count: courseCount,
      ref: statRefs[3],
      icon: (
        <FontAwesomeIcon
          icon={faCalendarDays}
          className="text-white text-2xl sm:text-3xl md:text-4xl"
        />
      ),
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
      ref={sectionRef}
      id="achievements"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="School students background"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-indigo-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Left: Heading and Stats */}
          <div className="col-span-2">
            <div className="text-center lg:text-left mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white">
                Career Excellence
              </h2>
              <p className="text-lg md:text-xl mt-2 md:mt-3 text-white/90">
                Shaping futures with skill and passion
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  ref={stat.ref}
                  className={`bg-white/10 backdrop-blur-sm px-4 py-5 sm:px-5 sm:py-6 text-center rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 w-[70%] mx-auto
                    ${index === 1 ? "translate-y-2" : ""}
                    ${index === 2 ? "translate-y-4" : ""}
                    ${index === 3 ? "translate-y-6" : ""}
                  `}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                >
                  <div className="flex justify-center mb-2 sm:mb-3">{stat.icon}</div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-400 mb-1 sm:mb-2">
                    {stat.count}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/90">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Description Text */}
          <motion.div
            className="col-span-1 h-full flex items-start mt-12 sm:mt-16 lg:mt-14 text-white text-justify text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>
              <strong className="text-lg sm:text-xl md:text-2xl">St. Thomas Vidyalayam</strong> was founded with the
              foremost aim of inculcating the values of discipline, character,
              sincerity, obedience and punctuality among the students, followed
              closely by giving highest quality education to children from all
              classes and sections of our society.
              <br />
              <br />
              The teaching faculty consists of experienced and dedicated team of
              trained Under Graduates, Post Graduates and specialists in various
              fields. They contribute immensely to the high Academic standards
              and achievements in a consistent manner over the years.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;