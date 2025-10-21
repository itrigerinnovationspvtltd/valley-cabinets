"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of cabinets do you offer?",
    answer:"We design and build custom kitchen, bathroom, and storage cabinets using premium hardwoods, laminates, and finishes tailored to your style.",
  },
  {
    question: "Do you provide custom designs?",
    answer:
      "Yes, our design team works closely with you to create cabinets that perfectly fit your space, style, and functionality needs.",
  },
  {
    question: "How long does it take to complete an order?",
    answer:
      "Production and installation typically take 4–6 weeks, depending on design complexity, material availability, and project size.",
  },
  {
    question: "Can you match my existing cabinet color or style?",
    answer:
      "Absolutely! We can match your existing cabinet finishes, stains, and styles to maintain a consistent look across your home.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "Yes, we provide full professional installation with every order to ensure your cabinets are fitted perfectly and securely.",
  },
  {
    question: "Where are Valley Cabinets products made?",
    answer:
      "All our cabinets are proudly crafted in our local workshop using high-quality materials sourced from trusted suppliers.",
  },
  
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      <h2 className="text-2xl sm:text-5xl font-bold text-center mb-8 text-[#172128]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-2 sm:p-4 bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg sm:text-xl font-semibold text-[#172128]">{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`mt-2 text-[#172128] overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
