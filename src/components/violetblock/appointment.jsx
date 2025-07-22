import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// 🔄 Replaced with ImageKit optimized URL
const appointmentImg =
  "https://ik.imagekit.io/zmcjodd1h/School%20website/school%20view/Page%20No.1.JPG?updatedAt=1751313741751?tr=w-1000,q-80,f-webp";

const Appointment = () => {
  const form = useRef();

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    if (form.current) {
      form.current.date.value = today;
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hptkabt",
        "template_e186b4h",
        form.current,
        "w2QaPskRL4KJ25nBd"
      )
      .then(
        () => {
          alert("Appointment submitted successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-3xl overflow-hidden"
      >
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={appointmentImg}
            alt="School View"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 w-full p-8 bg-gray-50">
          <h2 className="text-3xl font-bold text-cyan-800 mb-6">
            Make an Appointment
          </h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            aria-label="Appointment Form"
            className="space-y-5"
          >
            <input type="hidden" name="date" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="guardian_name"
                placeholder="Parent Name"
                required
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
              <input
                type="email"
                name="guardian_email"
                placeholder="Parent Email"
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
              <input
                type="text"
                name="child_name"
                placeholder="Child Name"
                required
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
              <input
                type="number"
                name="child_age"
                placeholder="Child Age"
                min="1"
                max="25"
                required
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              required
              rows="4"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 resize-none"
            ></textarea>

            {/* 🎨 Fancy Hover Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-yellow-400 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 text-black font-bold"
              >
                <span className="relative z-10">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Appointment;
