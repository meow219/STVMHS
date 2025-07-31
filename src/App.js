import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatBox from "./components/chatbox/ChatBox";
import Loader from "./components/Loader";
import AdmissionModal from "./components/AdmissionModal";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import VioletBlock from "./pages/VioletBlock";
import Contact from "./pages/Contact";

// Local image import
import ShashaImg from "./assest/Chatbot/shasha logo tilt.PNG";

// ScrollToTop on Route Change
const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [showAdmissionModal, setShowAdmissionModal] = useState(false);
  const [popupShownOnce, setPopupShownOnce] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowAdmissionModal(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseAdmissionModal = () => {
    setShowAdmissionModal(false);
    if (!popupShownOnce) {
      setShowPopup(true);
      setPopupShownOnce(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    }
  };

  if (loading) return <Loader />;

  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <div className="flex flex-col min-h-screen bg-[#ebebd3]">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/violetblock" element={<VioletBlock />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />

        {/* Admission Modal */}
        <AdmissionModal isVisible={showAdmissionModal} onClose={handleCloseAdmissionModal} />

        {/* Chatbot Trigger */}
        {!showAdmissionModal && (
          <div className="fixed bottom-6 right-6 z-50 flex items-end gap-2">
            {(showPopup || (hovered && !isChatbotOpen)) && (
              <div className="bg-white text-sm rounded-xl shadow-lg p-3 animate-fade-in border max-w-xs">
                <p>
                  <span className="font-semibold">Hi! 👋</span> <br />
                  I'm Shasha, <br /> Our School assistant
                </p>
              </div>
            )}
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => {
                setIsChatbotOpen(!isChatbotOpen);
                setShowPopup(false);
              }}
              className="rounded-full w-14 h-14 bg-white shadow-lg hover:scale-105 transition-transform overflow-hidden"
              aria-label="Open School Assistant"
            >
              <img
                src={ShashaImg}
                alt="Shasha - School Assistant"
                className="w-full h-full object-cover transform scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add("bg-blue-500"); // Fallback background
                }}
              />
            </button>
          </div>
        )}

        {/* ChatBox Component */}
        <ChatBox isActive={isChatbotOpen} toggle={() => setIsChatbotOpen(false)} />
      </div>
    </Router>
  );
}

export default App;