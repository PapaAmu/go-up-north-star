import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Step1TermsAndConditions = ({ setFirstName, setLastName }) => {
  const [firstName, setLocalFirstName] = useState("");
  const [lastName, setLocalLastName] = useState("");
  const [understood, setUnderstood] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setFirstName(firstName.trim());
    setLastName(lastName.trim());
  }, [firstName, lastName, setFirstName, setLastName]);

  // Expose validation method (to be triggered externally)
  Step1TermsAndConditions.isStepValid = () => {
    if (!firstName.trim() || !lastName.trim()) {
      toast.error("Please enter both your first name and last name.");
      return false;
    }
    if (!understood || !accepted) {
      toast.error("You must read, understand, and accept the terms to continue.");
      return false;
    }
    return true;
  };

  return (
    <div className="space-y-6 text-gray-800 text-sm">
      <h2 className="text-2xl font-bold text-amber-700">Welcome to the Membership Application</h2>

      <p>
        Thank you for your interest in becoming a shareholder of the <strong>GO UP NORTHSTAR Co-operative</strong>.
        Please begin by confirming your names and surname as per your ID/Passport and understanding the basic terms of membership application.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block font-medium">
            First Names <span className="text-xs text-gray-500">(as per ID or Passport)</span>
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setLocalFirstName(e.target.value)}
            placeholder="e.g. John"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block font-medium">
            Last Name <span className="text-xs text-gray-500">(as per ID or Passport)</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLocalLastName(e.target.value)}
            placeholder="e.g. Dlamini"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2 text-gray-700">
        <p className="font-semibold">Membership Overview:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Minimum share purchase: <strong>R2,000.00</strong></li>
          <li>Maximum share purchase: <strong>R25,000.00</strong></li>
          <li>Minimum monthly savings: <strong>R500.00</strong></li>
          <li>Monthly non-refundable admin fee: <strong>R50.00</strong></li>
          <li>There is no limit on how much you can save monthly.</li>
        </ul>
        <p className="text-xs text-amber-600">
          These contributions support the sustainability and operations of the GO UP NORTHSTAR and its registered Savings Co-operative.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={understood}
            onChange={() => setUnderstood(!understood)}
            className="mt-1 accent-amber-600"
          />
          <label>
            I confirm that I have read and understood the{" "}
            <a
              href="https://example.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 underline hover:text-amber-700"
            >
              terms and membership overview
            </a>.
          </label>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
            className="mt-1 accent-amber-600"
          />
          <label>
            I accept the terms and conditions and wish to proceed with my application.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step1TermsAndConditions;
