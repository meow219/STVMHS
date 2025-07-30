import { useState, useRef, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons';
import ShashaAvatar from '../../assets/Chatbot/Shasha.jpg';

const ChatBox = ({ isActive, toggle }) => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const knowledgeBase = [
    {
      question: /(hi|Hi|hello|Hello|helo|Helo)/i,
      answer: "Hello! I'm Shasha 👋\nHow can I help you today?"
    },
    {
      question: /(programs|courses|subjects|offer)/i,
      answer: "📚 Programs Offered:\n- STEM (Science, Technology, Engineering, Math)\n- Arts & Humanities\n- Vocational Training\n\nPopular choices:\n• Computer Science (₹85,000/yr)\n• Business Admin (₹75,000/yr)"
    },
    {
      question: /(hour|time|open|close)/i,
      answer: "⏰ School Timings:\n• Classes: 8:00 AM - 3:00 PM\n• Office: 7:30 AM - 4:30 PM (Mon-Fri)\n• Closed on public holidays"
    },
    {
      question: /(admission|apply|enroll|join)/i,
      answer: "📝 Admission Process:\n1. Submit application form\n2. Provide academic records\n3. Entrance test (June 15)\n4. Personal interview\n\n📌 ₹1,000 application fee"
    },
    {
      question: /(fee|tuition|cost|payment)/i,
      answer: "💰 Fee Structure:\n• Tuition: ₹85,000/year\n• Lab fee: ₹5,000/semester\n• Sports: ₹2,000/year\n\n💳 Flexible payment plans available"
    },
    {
      question: /(activity|sport|club|extra)/i,
      answer: "🏆 Extracurriculars:\n• Sports: Cricket, Football, Basketball\n• Clubs: Robotics, Debate, Science\n• Arts: Music, Drama, Painting\n\nTryouts each semester!"
    },
    {
      question: /(contact|phone|email|address)/i,
      answer: "📞 Contact Us:\nPhone: +91 9876543210\nEmail: info@schooldomain.edu\nAddress: 123 Education Street, Mumbai\n\nOffice hours: 8AM-4PM Mon-Fri"
    }
  ];

  useEffect(() => {
    setMessages([{ 
      text: 'Welcome to School! I can help with:\n- Programs offered\n- Admission process\n- Fee structure\n- School timings\n\nHow may I help you?', 
      sender: 'bot',
      timestamp: new Date()
    }]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInputValue(transcript);
    }
  }, [transcript]);

  const getBotResponse = (question) => {
    const foundAnswer = knowledgeBase.find(item => item.question.test(question));
    return foundAnswer ? foundAnswer.answer : 
      "I'll check that for you. For immediate help, call +91 9876543210 or email info@schooldomain.edu";
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        text: inputValue, 
        sender: 'user',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);

      setIsTyping(true);

      setTimeout(() => {
        const botResponse = {
          text: getBotResponse(inputValue),
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000);

      setInputValue('');
      resetTranscript();
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isActive) return null;

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="fixed bottom-24 right-6 w-96 bg-white rounded-xl shadow-2xl z-50 p-4 text-red-500">
        Browser doesn't support speech recognition
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 right-6 w-96 bg-white rounded-xl shadow-2xl z-50 border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-cyan-500 text-white p-4 rounded-t-xl flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <img 
              src={ShashaAvatar} 
              alt="Shasha" 
              className="w-10 h-10 rounded-full border-2 border-white shadow"
            />
            {/* Online Dot */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h3 className="font-bold text-lg">Shasha</h3>
            <p className="text-xs opacity-80">School Assistant</p>
          </div>
        </div>
        <button 
          onClick={toggle}
          className="hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-cyan-700"
        >
          <FontAwesomeIcon icon={faXmark} className="text-lg" />
        </button>
      </div>

{/* Messages */}
<div className="relative h-80 overflow-y-auto">
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('https://cbx-prod.b-cdn.net/COLOURBOX54040774.jpg?width=800&height=800&quality=70')",
      backgroundSize: 'cover', // Ensure the image covers the entire area
      backgroundPosition: 'center', // Keeps the background centered
      backgroundRepeat: 'no-repeat', // Avoids repeating the image
      filter: 'brightness(0.85)',
      opacity: 0.9,
      minHeight: '100%' // Makes sure the image stretches to fill the space without cuts
    }}
  />
  <div className="relative z-10 p-4">
    {messages.map((msg, i) => (
      <div key={i} className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs lg:max-w-md rounded-2xl px-4 py-2 relative ${
          msg.sender === 'user' 
            ? 'bg-cyan-600 text-white rounded-tr-none' 
            : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
        }`}>
          <div className="text-sm whitespace-pre-line">{msg.text}</div>
          <div className={`text-xs mt-1 text-right ${
            msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
          }`}>
            {formatTime(msg.timestamp)}
          </div>
        </div>
      </div>
    ))}
    {isTyping && (
      <div className="flex justify-start mb-4">
        <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-tl-none px-4 py-2 relative max-w-xs">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    )}
    <div ref={messagesEndRef} />
  </div>
</div>


      {/* Input */}
      <div className="p-3 border-t border-gray-200 bg-white rounded-b-xl">
        <div className="flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border border-gray-300 rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent text-sm"
            placeholder="Ask about programs, fees, admission..."
            autoFocus
          />
          <button
            onClick={() => {
              listening ? SpeechRecognition.stopListening() : SpeechRecognition.startListening();
            }}
            className={`p-3 border-y border-r border-gray-300 transition-colors ${
              listening 
                ? 'bg-red-100 text-red-600 animate-pulse' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <FontAwesomeIcon icon={faMicrophone} />
          </button>
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="p-3 bg-cyan-600 text-white rounded-r-lg hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
