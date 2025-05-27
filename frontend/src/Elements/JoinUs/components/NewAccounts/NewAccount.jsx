import { useState } from "react";
import AccountsImage from "../../../../assets/NewAccounts.webp";
import ApplyAccountModal from "./ApplyAccountModal";

const NewAccount = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-semibold text-amber-700 mb-4">Open an Account</h2>
          <p className="text-gray-700 mb-6 text-sm">
            Begin your financial journey with Go Up North Star. We make it easy for individuals and businesses to open secure, accessible, and reliable accounts.
          </p>

          <h3 className="font-semibold text-xl text-gray-800 mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-6">
            <li>Valid South African ID or Passport</li>
            <li>Proof of Address (within the last 3 months)</li>
            <li>Initial Deposit of R70</li>
            <li>Completed Application Form</li>
          </ul>

          <h3 className="font-semibold text-xl text-gray-800 mb-2">How to Apply</h3>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>Visit our branches or click Apply Now below</li>
            <li>Submit the required documents</li>
            <li>Your account will be activated within 48 hours</li>
          </ol>
        </div>

        <div className="flex justify-center">
          <img
            src={AccountsImage}
            alt="Open Account"
            className="rounded-2xl w-full max-w-md object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center hover:scale-110 duration-500 mt-10">
        <button
          onClick={() => setShowModal(true)}
          className="inline-block px-6 py-2.5 text-white bg-amber-600 hover:bg-amber-700 rounded-full text-sm font-medium transition-shadow shadow-md hover:shadow-lg"
        >
          Apply Now
        </button>
      </div>

      <ApplyAccountModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default NewAccount;
