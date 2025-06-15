import { FaHandsHelping, FaRegSmileBeam, FaShieldAlt } from "react-icons/fa";
import ServiceImg from "../../assets/service.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: <FaHandsHelping className="text-white text-xl" />,
    title: "Reliable Support",
    description: "Our team is always here to help, whenever you need it.",
    bg: "bg-amber-500",
  },
  {
    icon: <FaRegSmileBeam className="text-white text-xl" />,
    title: "Customer Satisfaction",
    description: "We prioritize your happiness and financial confidence.",
    bg: "bg-amber-700",
  },
  {
    icon: <FaShieldAlt className="text-white text-xl" />,
    title: "Trusted & Secure",
    description: "We use advanced security to keep your data and funds safe.",
    bg: "bg-amber-800",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
    },
  }),
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-28 bg-white px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Image Section */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative rounded-2xl overflow-hidden"
        >
          <img
            src={ServiceImg}
            alt="Our services"
            className="w-full md:h-auto object-contain"
          />

          <div className="absolute inset-0 z-10 flex items-center justify-end px-2 md:px-8">
            <div className="text-white text-right mt-10 max-w-xl ml-auto">
              <h2 className="text-lg md:text-6xl font-bold md:mb-4 mt-8">
                Why Choose Us
              </h2>
              <p className="md:text-sm hidden md:block text-xs leading-relaxed">
                We're committed to helping you succeed by providing the best tools,
                support, and security you can count on.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="relative">
          <div className="md:-mt-16 px-4">
            <div className="text-white md:hidden text-center mt-10 max-w-xl ml-auto">
             
              <p className="md:text-sm text-xs text-gray-800 leading-relaxed">
                We're committed to helping you succeed by providing the best tools,
                support, and security you can count on.
              </p>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="bg-gray-50 rounded-3xl border-b-2 border-amber-600 p-5 shadow-xl hover:shadow-md transition max-w-xs mx-auto"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full mb-3 ${reason.bg}`}
                  >
                    {reason.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-800 mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
