"use client";
import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What courses does SJ Academy offer?",
    answer:
      "We offer O Level, A Level, and Diploma courses in various subjects including Web Development, Digital Marketing, and Graphic Design.",
  },
  {
    id: 2,
    question: "Can I join a free demo class?",
    answer:
      "Yes! We offer free demo classes for all our courses so that students can experience our teaching methods before enrolling.",
  },
  {
    id: 3,
    question: "What are the timings of the classes?",
    answer:
      "Our classes are scheduled throughout the week. O Level and A Level courses usually run in the evenings, while Diploma courses may have flexible timings.",
  },
  {
    id: 4,
    question: "Do you provide personalized attention?",
    answer:
      "Absolutely! We maintain small groups to ensure personalized attention and focused learning for every student.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center mb-12">
          Have questions? We've got you covered. Click on a question to see the answer.
        </p>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className="text-2xl text-gray-500">
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-6 py-4 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
