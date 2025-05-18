import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiPieChart, FiShield } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import card1 from "../../assets/cardImages/card1.png";
import card2 from "../../assets/cardImages/card2.png";
import card3 from "../../assets/cardImages/card3.png";
import "./HeroSection.css";

const cards = [
  {
    title: "Personal",
    content:
      "Manage your money with smarter tools that help you track spending, set goals, and save effortlessly.",
    bgColor: "bg-amber-400",
    sideImage: card1,
  },
  {
    title: "Business",
    content:
      "Streamline payments, payroll, and team expenses with a secure, all-in-one business banking solution.",
    bgColor: "bg-amber-600",
    sideImage: card2,
  },
  {
    title: "Investing",
    content:
      "Grow your wealth with intelligent insights, real-time tracking, and tailored investment options.",
    bgColor: "bg-amber-800",
    sideImage: card3,
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-10">
      {/* Top Intro Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center mb-8">
        <div>
          <p className="text-xs font-bold text-amber-600 uppercase mb-1 tracking-wide">
            Digital Banking
          </p>
          <h1 className="text-2xl md:text-3xl text-gray-900 leading-snug">
            Discover the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">freedom</span>
              <svg
                className="absolute bottom-0 left-0 w-full h-[10px] z-0"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 10 Q 50 0 100 10"
                  stroke="#f59e0b" // Tailwind amber-500
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>{" "}
            of financing on your terms
          </h1>
        </div>

        {/* Centered Paragraph and Button */}
        <div className="flex flex-col items-center text-center gap-4">
          <p className="text-gray-600 text-sm max-w-sm">
            Get business banking, card, bill pay, travel, and reimbursements —
            all in one scalable solution.
          </p>

          <button className="inline-flex items-center gap-2 bg-gray-950 text-white px-2 py-1 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            Get Started
            <span className="bg-amber-500 p-2 rounded-full">
              <FaArrowRight className="w-4 h-4 text-black" />
            </span>
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div
        className="max-w-7xl mx-auto px-6 grid gap-4 transition-all"
        style={{
          gridTemplateColumns: cards
            .map((_, i) => (i === activeIndex ? "4fr" : "0.7fr"))
            .join(" "),
        }}
      >
        {cards.map((card, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={card.title}
              layout
              transition={{ duration: 0.5 }}
              onClick={() => {
                if (!isActive) setActiveIndex(index);
              }}
              className={`custom-card relative flex flex-col border rounded-3xl shadow-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${
                isActive ? "shadow-lg" : "shadow-lg"
              } ${card.bgColor}`}
            >
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 flex flex-grow gap-4 min-h-[250px]"
                  >
                    {/* LEFT SIDE */}
                    <div className="w-2/3 flex flex-col p-4 justify-between">
                      <h3 className="text-3xl font-semibold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-white flex-grow">
                        {card.content}
                      </p>

                      {/* More Info Cards - SIDE BY SIDE */}
                      <div className="flex flex-row gap-4">
                        <div className="bg-white rounded-3xl shadow p-4 text-sm text-gray-700 flex items-start gap-3 w-full max-w-[200px]">
                          <FiPieChart className="text-green-600 w-14 h-5" />
                          <div>
                            <h4 className="font-semibold mb-1 text-sm">
                              Smart Budgeting
                            </h4>
                            <p className="text-xs leading-snug">
                              Instantly set budgets, automate savings, and reach
                              your goals faster.
                            </p>
                          </div>
                        </div>
                        <div className="bg-white rounded-3xl shadow p-4 text-sm text-gray-700 flex items-start gap-3 w-full max-w-[200px]">
                          <FiShield className="text-green-600 w-14 h-5" />
                          <div>
                            <h4 className="font-semibold mb-1 text-sm">
                              Real-Time Control
                            </h4>
                            <p className="text-xs leading-snug">
                              Monitor every transaction, control access, and
                              manage finances easily.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="w-1/2 h-full flex items-end justify-end">
                      <img
                        src={card.sideImage}
                        alt={`${card.title} visual`}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Rotated title on collapsed cards */}
              {!isActive && (
                <div className="relative z-10 rotate-wrapper">
                  <h3 className="rotate-title text-2xl text-white font-light">
                    {card.title}
                  </h3>
                </div>
              )}

              {/* Next Button */}
              {isActive && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute border-8 -bottom-1 -right-1 z-10 bg-black text-white p-3 rounded-full hover:bg-opacity-90 transition"
                >
                  <FaArrowRight className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection;
