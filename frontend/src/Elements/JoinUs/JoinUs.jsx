import { useState } from "react";
import NewAccount from "./components/NewAccounts/NewAccount";
import Membership from "./components/Membership/Membership";
import Loans from "./components/Borrowing/Borrowing";

const JoinUs = () => {
  const [activeTab, setActiveTab] = useState("account");

  const renderTab = () => {
    switch (activeTab) {
      case "account":
        return <NewAccount />;
      case "membership":
        return <Membership />;
      case "loans":
        return <Loans />;
      default:
        return <NewAccount />;
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extralight text-amber-500 mb-6">
          Become a Part of <span className="text-amber-900 font-bold">Go Up North Star</span> 
        </h1>
        <p className="text-gray-700 mb-4 max-w-3xl text-sm mx-auto">
          Whether you're looking to open a reliable account, invest in your future, 
          or access tailored loan solutions — we're here to guide your journey. 
          Explore the options below to join our thriving financial cooperative.
        </p>
        <p className="text-gray-600 max-w-2xl text-sm mx-auto mb-10">
          At Go Up North Star, we believe in community-led growth. By becoming a
          member, you’re not just a customer — you're a co-owner. Take control of
          your financial future with one of the three accessible ways to join.
        </p>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10 flex-wrap">
          <button
            onClick={() => setActiveTab("account")}
            className={`px-5 py-2.5 text-sm font-semibold shadow-xl transition duration-500 ${
              activeTab === "account"
                ? "bg-amber-600 text-white scale-125"
                : "bg-white border border-amber-500 text-gray-800 hover:bg-amber-50"
            }`}
          >
            Open Account
          </button>

          <button
            onClick={() => setActiveTab("membership")}
            className={`px-5 py-2.5 text-sm font-semibold shadow-xl transition duration-500 ${
              activeTab === "membership"
                ? "bg-amber-600 text-white scale-125"
                : "bg-white border border-amber-500 text-gray-800 hover:bg-amber-50"
            }`}
          >
            Membership
          </button>

          <button
            onClick={() => setActiveTab("loans")}
            className={`px-5 py-2.5 text-sm font-semibold shadow-xl transition duration-500 ${
              activeTab === "loans"
                ? "bg-amber-600 text-white scale-125"
                : "bg-white border border-amber-500 text-gray-800 hover:bg-amber-50"
            }`}
          >
            Borrowing
          </button>
        </div>

        {/* Active Tab Content */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-left">
          {renderTab()}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
