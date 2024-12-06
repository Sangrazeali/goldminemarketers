import React, { useState } from 'react';

const Faq = () => {
  // State to track which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Array of FAQs for demonstration (you can replace this with your actual FAQ data)
  const faqs = [
    {
      question: "Who needs a branding agency?",
      answer: "A branding agency can help businesses of all sizes build a strong brand identity and improve their marketing strategy, whether you are based in the USA, Dubai, Saudi Arabia, Qatar, or anywhere else."
    },
    {
      question: "What problem does a branding agency in Dubai solve?",
      answer: "A branding agency in Dubai helps businesses navigate the highly competitive market by solving challenges related to brand identity, positioning, and market awareness, ensuring your brand stands out."
    },
    {
      question: "How much does branding cost in Dubai?",
      answer: "Branding costs in Dubai vary depending on the complexity of the project. Agencies offer a range of pricing options, but its best to consult directly for a personalized estimate."
    },
    {
      question: "What is the difference between a marketing and a branding agency?",
      answer: "A marketing agency focuses on promoting products or services, while a branding agency builds and manages the overall brand image, creating a strong foundation for long-term success."
    },
    {
      question: "Is branding better than marketing?",
      answer: "Branding and marketing complement each other. Branding creates a long-term identity for your business, while marketing drives short-term sales and customer engagement."
    },
    {
      question: "How can a branding agency help businesses in the USA?",
      answer: "In the USA, a branding agency helps companies build a strong presence in a diverse and competitive market, focusing on brand positioning, consistency, and recognition across various platforms."
    },
    {
      question: "What challenges do branding agencies face in Saudi Arabia and Qatar?",
      answer: "Branding agencies in Saudi Arabia and Qatar often work on balancing traditional cultural values with modern branding strategies to appeal to local audiences while maintaining a global appeal."
    }
  ];
  

  // Function to toggle the expanded state
  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the FAQ content
  };

  return (
    <div className="div-container flex flex-wrap items-start space-y-10 md:flex-nowrap md:space-x-0">
      <div className="w-full">
      </div>
      <div className="w-full">
      <h3 className="text-6xl font-bold leading-none text-white mb-10">FAQ</h3>
        <div className="-mx-4 flex flex-wrap">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full px-4">
              <div className="mb-8 w-full border-b border-gray-300 bg-transparent pb-3">
                <button
                  className="flex w-full items-center text-left"
                  aria-expanded={expandedIndex === index ? "true" : "false"}
                  onClick={() => toggleFAQ(index)}
                >
                  <h4 className="w-full text-lg font-semibold text-white">{faq.question}</h4>
                  <span className="mr-3 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg text-gray-500 sm:mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`size-6 transform ${expandedIndex === index ? 'rotate-180' : ''}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              {expandedIndex === index && (
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed text-white/70">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
