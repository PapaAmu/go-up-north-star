import React, { useState } from "react";
import toast from "react-hot-toast";

const Step2SharesAndSavings = ({ onConfirm, setShares, setSavings }) => {
  const [shareAmount, setShareAmount] = useState("");
  const [monthlySavings, setMonthlySavings] = useState("");

  const handleSubmit = () => {
    const shareValue = parseFloat(shareAmount);
    const savingsValue = parseFloat(monthlySavings);

    if (isNaN(shareValue) || shareValue < 2000 || shareValue > 25000) {
      toast.error("Share purchase amount must be between R2,000 and R25,000.");
      return;
    }

    if (isNaN(savingsValue) || savingsValue < 500) {
      toast.error("Monthly savings must be at least R500.");
      return;
    }

    setShares(shareValue);
    setSavings(savingsValue);
    onConfirm();
  };

  return (
    <div className="space-y-6 text-sm text-gray-800">
      <h2 className="text-2xl font-bold text-amber-700">Shares & Monthly Savings</h2>

      <p>
        Please indicate how much you would like to invest in shares and how much
        you will commit to saving each month. These contributions are vital for
        building and sustaining our cooperative bank.
      </p>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block font-medium">
            Share Purchase Amount (R)
            <span className="block text-xs text-gray-500">
              Minimum: R2,000 — Maximum: R25,000
            </span>
          </label>
          <input
            type="number"
            value={shareAmount}
            onChange={(e) => setShareAmount(e.target.value)}
            min={2000}
            max={25000}
            placeholder="e.g. 5000"
            className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              shareAmount && (shareAmount < 2000 || shareAmount > 25000)
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {(shareAmount && (shareAmount < 2000 || shareAmount > 25000)) && (
            <p className="text-red-500 text-xs">
              Please enter an amount between R2,000 and R25,000.
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block font-medium">
            Monthly Savings Amount (R)
            <span className="block text-xs text-gray-500">
              Minimum: R500 | No maximum
            </span>
          </label>
          <input
            type="number"
            value={monthlySavings}
            onChange={(e) => setMonthlySavings(e.target.value)}
            min={500}
            placeholder="e.g. 750"
            className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              monthlySavings && monthlySavings < 500
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {monthlySavings && monthlySavings < 500 && (
            <p className="text-red-500 text-xs">
              Monthly savings must be at least R500.
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className={`px-6 py-2 rounded-full text-white font-medium shadow ${
            shareAmount >= 2000 && shareAmount <= 25000 && monthlySavings >= 500
              ? "bg-amber-600 hover:bg-amber-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2SharesAndSavings;
