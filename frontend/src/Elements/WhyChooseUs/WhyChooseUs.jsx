import { FaHandsHelping, FaRegSmileBeam, FaShieldAlt } from "react-icons/fa";
import ServiceImg from "../../assets/service.webp";

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

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Image Section with Overlay and Text */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Full Image */}
          <img
            src={ServiceImg}
            alt="Our services"
            className="w-full h-auto object-contain"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0  z-0" />

          {/* Text Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-end px-6 md:px-16">
            <div className="text-white text-right max-w-xl ml-auto">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                Why Choose Us
              </h2>
              <p className="text-sm leading-relaxed">
                We're committed to helping you succeed by providing the best tools,
                support, and security you can count on.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid: Overlapping on Desktop */}
        <div className="relative">
          <div className="mt-10 md:-mt-16 px-4">
            <div className="grid gap-6 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl border-b-4 border-amber-600 p-5 shadow-xl hover:shadow-md transition max-w-xs mx-auto"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
