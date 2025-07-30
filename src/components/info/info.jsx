import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export default function Info() {
  const faqs = [
    {
      question: "What programs does the school offer?",
      answer: "We offer a comprehensive curriculum including STEM programs, arts, humanities, and vocational training."
    },
    {
      question: "What are the school hours?",
      answer: "Regular school hours are 8:00 AM to 3:00 PM, with after-school activities available until 5:00 PM."
    },
    {
      question: "How can I apply for admission?",
      answer: "Admissions are open from January-March each year. Visit our admissions office or website to apply."
    },
    {
      question: "What extracurricular activities are available?",
      answer: "We offer sports, music, drama, robotics, debate club, and many other extracurricular options."
    }
  ];

  return _jsxs("div", {
    className: "bg-white bg-opacity-90 rounded-xl p-6 mx-4 shadow-lg max-w-4xl",
    children: [
      _jsx("h1", {
        className: "text-3xl font-bold mb-6 text-blue-800 text-center",
        children: "School Information & FAQs"
      }),
      
      _jsxs("div", {
        className: "space-y-8",
        children: [
          _jsxs("div", {
            className: "bg-blue-50 p-6 rounded-lg",
            children: [
              _jsx("h2", {
                className: "text-xl font-bold mb-3 text-blue-700",
                children: "Our Mission"
              }),
              _jsx("p", {
                className: "text-gray-700",
                children: "To provide quality education that nurtures intellectual curiosity, fosters creativity, and develops responsible global citizens."
              })
            ]
          }),
          
          _jsxs("div", {
            className: "bg-blue-50 p-6 rounded-lg",
            children: [
              _jsx("h2", {
                className: "text-xl font-bold mb-3 text-blue-700",
                children: "Frequently Asked Questions"
              }),
              _jsx("div", {
                className: "space-y-4",
                children: faqs.map((faq, index) => 
                  _jsxs("div", {
                    className: "border-b border-blue-100 pb-4",
                    children: [
                      _jsx("h3", {
                        className: "font-semibold text-blue-600",
                        children: faq.question
                      }),
                      _jsx("p", {
                        className: "mt-1 text-gray-700",
                        children: faq.answer
                      })
                    ]
                  }, index)
                )
              })
            ]
          }),
          
          _jsxs("div", {
            className: "bg-blue-50 p-6 rounded-lg",
            children: [
              _jsx("h2", {
                className: "text-xl font-bold mb-3 text-blue-700",
                children: "Chatbot Instructions"
              }),
              _jsx("ul", {
                className: "list-disc list-inside space-y-2 text-gray-700",
                children: [
                  _jsx("li", { children: "Type or speak your questions about our school" }),
                  _jsx("li", { children: "The chatbot can answer questions about admissions, programs, and schedules" }),
                  _jsx("li", { children: "For complex inquiries, it will connect you to staff" })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}