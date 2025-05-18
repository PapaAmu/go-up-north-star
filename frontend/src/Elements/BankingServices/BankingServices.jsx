import {
  FaCreditCard,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaWallet,
} from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const services = [
  {
    icon: <FaPiggyBank className="text-white text-2xl" />,
    title: "Checking accounts",
  },
  {
    icon: <FaCreditCard className="text-white text-2xl" />,
    title: "Credit & debit cards",
  },
  {
    icon: <FaHandHoldingUsd className="text-white text-2xl" />,
    title: "Loans and credits",
  },
  {
    icon: <FaWallet className="text-white text-2xl" />,
    title: "Wealth Management",
  },
  {
    icon: <FaWallet className="text-white text-2xl" />,
    title: "Wealth Management",
  },
  {
    icon: <FaWallet className="text-white text-2xl" />,
    title: "Wealth Management",
  },
];

const BankingServices = () => {
  return (
    <>
      <div className="container py-12">
        <section className="bg-gradient-to-r from-white to-[#e7f5ed] p-6 rounded-3xl">
          <div className="grid md:grid-cols-2 items-center gap-8">
            {/* Left Column */}
            <div className="space-y-6 px-4 md:px-0">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
                Browse our set of <br /> financial services and offerings
              </h2>
              <p className="text-gray-600 text-sm max-w-md">
                We offer a variety of tools and resources to help you manage
                your finances more effectively.
              </p>
              <button className="inline-flex items-center gap-2 bg-gray-950 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-lime-400 transition">
                Explore More
                <span className="bg-amber-600 text-white p-2 rounded-full">
                  <BsArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Right Column: Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4 md:px-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 shadow hover:shadow-md transition flex flex-col items-center text-center"
                >
                  <div className="bg-gray-900 p-4 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-800">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BankingServices;
