import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// Local image import
import appointmentImg from "../../assets/school view/Page No.1.jpg";

const Appointment = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_hptkabt",
        "template_e186b4h",
        form.current,
        "w2QaPskRL4KJ25nBd"
      )
      .then(
        () => {
          setSubmitSuccess(true);
          form.current.reset();
          setTimeout(() => setSubmitSuccess(false), 5000);
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white shadow-xl rounded-3xl overflow-hidden"
      >
        {/* Left: Image */}
        <div className="lg:w-1/2 w-full h-64 sm:h-80 lg:h-auto">
          <img
            src={appointmentImg}
            alt="School campus view for appointment scheduling"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right: Form */}
        <div className="lg:w-1/2 w-full p-6 sm:p-8 bg-gray-50">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-800 mb-4 sm:mb-6">
            Schedule a Visit
          </h2>

          {submitSuccess && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md">
              Appointment submitted successfully! We'll contact you soon.
            </div>
          )}

          <form
            ref={form}
            onSubmit={sendEmail}
            aria-label="School Visit Appointment Form"
            className="space-y-4 sm:space-y-5"
          >
            <input type="hidden" name="date" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <input
                  type="text"
                  name="guardian_name"
                  placeholder="Parent/Guardian Name"
                  required
                  className="w-full border border-gray-300 px-4 py-2 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="guardian_email"
                  placeholder="Email Address"
                  required
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  className="w-full border border-gray-300 px-4 py-2 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full border border-gray-300 px-4 py-2 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="child_name"
                  placeholder="Child's Name"
                  required
                  className="w-full border border-gray-300 px-4 py-2 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all duration-200"
                />
              </div>
              <div>
                <select
                  name="child_age"
                  required
                  className="w-full border border-gray-300 px-4 py-2 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white appearance-none"
                >
                  <option value="">Child's Age</option>
                  {Array.from({ length: 18 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1} years
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  name="purpose"
                  required
                  className="w-full border border-gray-300 px-4 py-2 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white appearance-none"
                >
                  <option value="">Purpose of Visit</option>
                  <option value="Admission Inquiry">Admission Inquiry</option>
                  <option value="School Tour">School Tour</option>
                  <option value="Meeting with Principal">Meeting with Principal</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Additional Information"
                rows="4"
                className="w-full border border-gray-300 px-4 py-2 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 resize-none transition-all duration-200"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative h-12 w-full sm:w-40 overflow-hidden border border-black shadow-lg transition-all duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'
                }`}
              >
                <span className="absolute inset-0 bg-yellow-400 transition-all duration-300 transform hover:scale-105"></span>
                <span className="relative z-10 font-bold flex items-center justify-center h-full">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Appointment;