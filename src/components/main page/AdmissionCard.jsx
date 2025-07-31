import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const AdmissionCard = () => {
  const youtubeVideoId = "kYXUNrXgXUI";
  const iframeRef = useRef(null);

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(iframeRef.current, {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.stopVideo();
            }
          },
        },
      });
    };

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    return () => {
      delete window.onYouTubeIframeAPIReady;
      document.body.removeChild(tag);
    };
  }, []);

  return (
    <section className=" text-black py-16 -mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-3">
              <h2 className="text-4xl tracking-tight font-serif font-bold text-black">
                Step In. Shine Ahead!
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full mt-2"></div>
            </div>

            <p className="text-gray-700 leading-relaxed text-justify">
              Give your child the best start at{" "}
              <strong className="text-yellow-600">STVMHS</strong>, where the
              curriculum meets a nurturing, student-centric environment.
            </p>

            <div className="pt-2">
              <p className="font-medium text-gray-700 text-justify">
                Visit us on our social media platforms to explore more about our
                vibrant community. Join the STVMHS family, where every child’s
                journey is filled with opportunity and growth.
              </p>
            </div>

            {/* Fancy Slide Hover Enroll Now Button */}
            <div className="pt-4">
              <a
                href="https://forms.gle/YyJB5x3ssc4CSbkz8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-yellow-400 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 text-black font-bold">
                  <span className="relative z-10">Enroll Now</span>
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Video */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10 pointer-events-none"></div>
                <iframe
                  ref={iframeRef}
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&rel=0`}
                  className="w-full h-full border-0 rounded-xl"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="STVMHS Admission"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionCard;
