import { useState, useRef, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const shashaImageURL =
  "https://ik.imagekit.io/zmcjodd1h/School%20website/Chatbot/Shasha.jpg?updatedAt=1751313081199?tr=w-100,q-80,f-webp";
const bgImageURL =
  "https://ik.imagekit.io/zmcjodd1h/School%20website/Chatbot/shasha%20logo%20tilt.PNG?updatedAt=1751313081565?tr=w-800,q-70,f-webp";

const ChatBox = ({ isActive, toggle }) => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const knowledgeBase = [
    {
      question: /(hi|hello|helo)/i,
      answer: "Hello! I'm Shasha 👋\nHow can I help you today?",
    },
    {
      question: /(programs|courses|subjects|offer)/i,
      answer:
        "📚 Programs Offered:\n- STEM (Science, Technology, Engineering, Math)\n- Arts & Humanities\n- Vocational Training\n\nPopular choices:\n• Computer Science (₹85,000/yr)\n• Business Admin (₹75,000/yr)",
    },
    {
      question: /(hour|time|open|close)/i,
      answer:
        "⏰ School Timings:\n• Classes: 8:00 AM - 3:00 PM\n• Office: 7:30 AM - 4:30 PM (Mon-Fri)\n• Closed on public holidays",
    },
    {
      question: /(admission|apply|enroll|join)/i,
      answer:
        "📝 Admission Process:\n1. Submit application form\n2. Provide academic records\n3. Entrance test (June 15)\n4. Personal interview\n\n📌 ₹1,000 application fee",
    },
    {
      question: /(fee|tuition|cost|payment)/i,
      answer:
        "💰 Fee Structure:\n• Tuition: ₹85,000/year\n• Lab fee: ₹5,000/semester\n• Sports: ₹2,000/year\n\n💳 Flexible payment plans available",
    },
    {
      question: /(activity|sport|club|extra)/i,
      answer:
        "🏆 Extracurriculars:\n• Sports: Cricket, Football, Basketball\n• Clubs: Robotics, Debate, Science\n• Arts: Music, Drama, Painting\n\nTryouts each semester!",
    },
    {
      question: /(contact|phone|email|address)/i,
      answer:
        "📞 Contact Us:\nPhone: +91 9876543210\nEmail: info@schooldomain.edu\nAddress: 123 Education Street, Mumbai\n\nOffice hours: 8AM-4PM Mon-Fri",
    },
  ];

  useEffect(() => {
    setMessages([
      {
        text: "Welcome to School! I can help with:\n- Programs offered\n- Admission process\n- Fee structure\n- School timings\n\nHow may I help you?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInputValue(transcript);
    }
  }, [transcript]);

  const getBotResponse = (question) => {
    const found = knowledgeBase.find((item) => item.question.test(question));
    return found
      ? found.answer
      : "I'll check that for you. For immediate help, call +91 9876543210 or email info@schooldomain.edu";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg = {
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = {
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);

    setInputValue("");
    resetTranscript();
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  if (!isActive) return null;

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-xl shadow-2xl z-50 p-4 text-red-500 text-sm sm:text-base">
        Browser doesn't support speech recognition
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-xl shadow-2xl z-50 border border-gray-200 overflow-hidden transition-all duration-300">
      {/* Header */}
      <div className="bg-cyan-500 text-white p-3 sm:p-4 rounded-t-xl flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
            <img
              src={shashaImageURL}
              alt="Shasha"
              className="w-full h-full rounded-full border-2 border-white shadow"
              loading="lazy"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg">Shasha</h3>
            <p className="text-xs opacity-80">School Assistant</p>
          </div>
        </div>
        <button
          onClick={toggle}
          className="hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close chat"
        >
          <FontAwesomeIcon icon={faXmark} className="text-base sm:text-lg" />
        </button>
      </div>

      {/* Messages */}
      <div
        className="relative h-64 sm:h-80 overflow-y-auto"
        style={{
          backgroundImage: `url('${bgImageURL}')`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center center",
          filter: "brightness(0.9)",
        }}
      >
        <div className="relative z-10 p-3 sm:p-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-3 sm:mb-4 flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] sm:max-w-xs lg:max-w-md rounded-2xl px-3 py-2 sm:px-4 sm:py-2 relative ${
                  msg.sender === "user"
                    ? "bg-cyan-600 text-white rounded-tr-none"
                    : "bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm"
                }`}
              >
                <div className="text-xs sm:text-sm whitespace-pre-line">{msg.text}</div>
                <div
                  className={`text-xxs sm:text-xs mt-1 text-right ${
                    msg.sender === "user" ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {formatTime(msg.timestamp)}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start mb-3 sm:mb-4">
              <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-tl-none px-3 py-2 sm:px-4 sm:py-2 relative max-w-[80%] sm:max-w-xs">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="p-2 sm:p-3 border-t border-gray-200 bg-white rounded-b-xl">
        <div className="flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border border-gray-300 rounded-l-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-cyan-300 text-xs sm:text-sm"
            placeholder="Ask about programs, fees, admission..."
            autoFocus
          />
          <button
            onClick={() =>
              listening
                ? SpeechRecognition.stopListening()
                : SpeechRecognition.startListening()
            }
            className={`p-2 sm:p-3 border-y border-r border-gray-300 transition-colors ${
              listening
                ? "bg-red-100 text-red-600 animate-pulse"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            aria-label={listening ? "Stop listening" : "Start voice input"}
          >
            <FontAwesomeIcon icon={faMicrophone} className="text-sm sm:text-base" />
          </button>
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="p-2 sm:p-3 bg-cyan-600 text-white rounded-r-lg hover:bg-cyan-700 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            aria-label="Send message"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="text-sm sm:text-base" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;