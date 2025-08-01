import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

// Optimized background image
const backgroundImage = "https://ik.imagekit.io/zmcjodd1h/School%20website/bg/blogbg.jpg?updatedAt=1751313063280?tr=w-1600,q-80,f-webp";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Background Section */}
      <div
        className="relative text-white py-20 sm:py-28 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), url(${backgroundImage})`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center pt-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-amber-400">Contact</span> Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-serif"
          >
            We'd love to hear from you. Reach out for any inquiries or assistance.
          </motion.p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-serif">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-4">
                  <FaMapMarkerAlt className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 font-serif mb-1">
                    Address
                  </h3>
                  <p className="text-gray-600 font-serif">
                    No.10 Dhanalakshmi Nagar, Vanagaram
                  </p>
                  <p className="text-gray-600 font-serif">
                    Chennai, Tamil Nadu 600095
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FaPhone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 font-serif mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-600 font-serif">+91 89396 49600</p>
                  <p className="text-gray-600 font-serif">+91 98401 23456</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4">
                  <FaEnvelope className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 font-serif mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600 font-serif">info@stvmhs.in</p>
                  <p className="text-gray-600 font-serif">
                    st0581thomasvid@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 font-serif">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: <FaFacebook />, color: "hover:text-blue-600", href: "https://facebook.com" },
                  { icon: <FaInstagram />, color: "hover:text-pink-600", href: "https://instagram.com" },
                  { icon: <FaWhatsapp />, color: "hover:text-green-600", href: "https://wa.me/918939649600" },
                  { icon: <FaYoutube />, color: "hover:text-red-600", href: "https://youtube.com/@stthomasvidyalayamvioleted7279" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 text-2xl transition-colors ${social.color}`}
                    whileHover={{ y: -3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Admission Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-serif">
              Admission Process
            </h2>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">
                  Enrollment for 2025-26
                </h3>
                <ul className="space-y-3 text-gray-700 font-serif">
                  {[
                    "Classes: Pre-KG to XII",
                    "Application Deadline: April 30, 2025",
                    "Entrance Test: May 15, 2025",
                    "Academic Year Starts: June 1, 2025"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">
                  Required Documents
                </h3>
                <ul className="space-y-3 text-gray-700 font-serif">
                  {[
                    "Birth Certificate",
                    "Previous School Records",
                    "Passport Size Photos (3)",
                    "Transfer Certificate (if applicable)",
                    "Aadhar Card Copy"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="flex justify-center pt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("https://forms.gle/YyJB5x3ssc4CSbkz8", "_blank")}
                  className="relative h-12 w-full sm:w-48 overflow-hidden bg-amber-500 text-white font-bold rounded-lg shadow-lg hover:bg-amber-600 transition-colors duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center h-full">
                    Application Form
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.123456789012!2d80.12345678901234!3d13.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzI0LjQiTiA4MMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="School Location"
            className="rounded-xl"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;