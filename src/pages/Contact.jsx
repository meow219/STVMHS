import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

// 🔁 ImageKit CDN background image (optimized for web)
const backgroundImage =
  "https://ik.imagekit.io/zmcjodd1h/School%20website/bg/blogbg.jpg?updatedAt=1751313063280?tr=w-1600,q-80,f-webp";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Background Section */}
      <div
        className="text-white py-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="max-w-6xl mt-12 mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          <span className="text-amber-600">Contact</span> Us
        </h1>
        <p className="text-xl max-w-2xl mx-auto font-serif">
          We’d love to hear from you. Reach out for any inquiries or assistance.
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="h-6 w-6 text-gray-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 font-serif">
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
                <FaPhone className="h-6 w-6 text-gray-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 font-serif">
                    Phone
                  </h3>
                  <p className="text-gray-600 font-serif">+91 89396 49600</p>
                  <p className="text-gray-600 font-serif">+91 98401 23456</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="h-6 w-6 text-gray-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 font-serif">
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4 font-serif">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-gray-600 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="h-8 w-8" />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-600 hover:text-pink-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-8 w-8" />
                </a>
                <a
                  href="https://www.whatsapp.com/channel/0029Va9R63NAojZ17JrlGS35"
                  className="text-gray-600 hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-8 w-8" />
                </a>
                <a
                  href="https://www.youtube.com/@stthomasvidyalayamvioleted7279"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>

          {/* Admission Section */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Admission Process
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">
                  Enrollment for 2025-26
                </h3>
                <ul className="space-y-2 text-gray-700 font-serif">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span>Classes: Pre-KG to XII</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span>Application Deadline: April 30, 2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span>Entrance Test: May 15, 2025</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">
                  Required Documents
                </h3>
                <ul className="space-y-2 text-gray-700 font-serif">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Birth Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Previous School Records</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Passport Size Photos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Transfer Certificate (if applicable)</span>
                  </li>
                </ul>
              </div>

              {/* 🎨 Fancy Sliding Hover Button (Fixed Size) */}
              <div className="pt-2 flex justify-center">
                <button
                  onClick={() =>
                    window.open("https://forms.gle/YyJB5x3ssc4CSbkz8", "_blank")
                  }
                  className="relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-yellow-400 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 text-black font-bold"
                >
                  <span className="relative z-10">Application Form</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
