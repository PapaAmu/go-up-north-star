import { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiPieChart, FiShield } from "react-icons/fi";
import { motion, AnimatePresence, useInView } from "framer-motion";
import card1 from "../../assets/cardImages/card1.png";
import card2 from "../../assets/cardImages/card2.png";
import card3 from "../../assets/cardImages/card3.png";
import "./HeroSection.css";

const cards = [
  {
    title: "Savings Solutions",
    content:
      "Manage your money with smarter tools that help you track spending, set goals, and save effortlessly.",
    bgColor: "bg-amber-400",
    sideImage: card1,
  },
  {
    title: "Group Lending",
    content:
      "Streamline payments, payroll, and team expenses with a secure, all-in-one business banking solution.",
    bgColor: "bg-amber-600",
    sideImage: card2,
  },
  {
    title: "Membership",
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
    const interval = setInterval(handleNext, 7000);
    return () => clearInterval(interval);
  }, []);

  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: false, margin: "-20% 0px" });

  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: false, margin: "-20% 0px" });

  return (
    <section className="bg-white py-10">
      {/* Top Intro */}
      <motion.div
        ref={introRef}
        initial={{ opacity: 0, y: 40 }}
        animate={introInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center mb-8"
      >
        <div>
          <p className="text-xs font-bold text-amber-600 uppercase mb-1 tracking-wide">
            together we rise
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-snug">
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
                  stroke="#f59e0b"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>{" "}
            of financing on your terms
          </h1>
        </div>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 40 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <p className="text-gray-600 text-sm max-w-sm">
            A new era of inclusive banking for our people
          </p>

          <button className="inline-flex items-center gap-2 bg-gray-950 text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            Get Started
            <span className="bg-amber-500 p-2 rounded-full">
              <FaArrowRight className="w-4 h-4 text-black" />
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop Layout */}
        <div
          className="hidden md:grid gap-4 transition-all"
          style={{
            gridTemplateColumns: cards
              .map((_, i) => (i === activeIndex ? "4fr" : "0.7fr"))
              .join(" "),
          }}
        >
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: false, margin: "-10% 0px" });

            return (
              <motion.div
                key={card.title}
                ref={cardRef}
                layout
                transition={{ duration: 0.5 }}
                onClick={() => {
                  if (!isActive) setActiveIndex(index);
                }}
                className={`custom-card relative flex flex-col border rounded-3xl shadow-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${card.bgColor}`}
              >
                <AnimatePresence mode="wait">
                  {isActive && cardInView && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10 flex flex-grow gap-4 min-h-[250px]"
                    >
                      <div className="w-2/3 flex flex-col p-4 justify-between">
                        <h3 className="text-3xl font-semibold text-white mb-2">
                          {card.title}
                        </h3>
                        <p className="text-sm text-white flex-grow">
                          {card.content}
                        </p>
                        <div className="flex flex-row gap-4">
                          <FeatureCard
                            icon={<FiPieChart className="text-green-600 w-14 h-5" />}
                            title="Smart Budgeting"
                            desc="Set budgets, automate savings, reach your goals faster."
                          />
                          <FeatureCard
                            icon={<FiShield className="text-green-600 w-14 h-5" />}
                            title="Real-Time Control"
                            desc="Track transactions, manage access, stay in control."
                          />
                        </div>
                      </div>
                      <div className="w-3/4 h-full flex items-end justify-end">
                        <img
                          src={card.sideImage}
                          alt={`${card.title} visual`}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isActive && (
                  <div className="relative z-10 rotate-wrapper">
                    <h3 className="rotate-title text-2xl text-white font-light">
                      {card.title}
                    </h3>
                  </div>
                )}

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

        {/* Mobile Layout */}
        <div className="md:hidden w-full">
          <motion.div
            key={cards[activeIndex].title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative flex flex-col gap-4 border rounded-3xl shadow-lg p-4 ${cards[activeIndex].bgColor}`}
          >
            {/* Image on top */}
            <img
              src={cards[activeIndex].sideImage}
              alt="Mobile visual"
              className="w-full h-auto object-contain rounded-2xl"
            />

            {/* Title & content */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-1">
                {cards[activeIndex].title}
              </h3>
              <p className="text-sm text-white">{cards[activeIndex].content}</p>
            </div>

            {/* Feature cards */}
            <div className="flex flex-col gap-3 mt-2">
              <FeatureCard
                icon={<FiPieChart className="text-green-600 w-14 h-5" />}
                title="Smart Budgeting"
                desc="Set budgets, automate savings, reach your goals faster."
              />
              <FeatureCard
                icon={<FiShield className="text-green-600 w-14 h-5" />}
                title="Real-Time Control"
                desc="Track transactions, manage access, stay in control."
              />
            </div>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="self-end mt-4 bg-black text-white p-3 rounded-full hover:bg-opacity-90 transition"
            >
              <FaArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Reusable feature card
const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-white rounded-3xl shadow p-4 text-sm text-gray-700 flex items-start gap-3"
  >
    {icon}
    <div>
      <h4 className="font-semibold mb-1 text-sm">{title}</h4>
      <p className="text-xs leading-snug">{desc}</p>
    </div>
  </motion.div>
);

export default HeroSection;
