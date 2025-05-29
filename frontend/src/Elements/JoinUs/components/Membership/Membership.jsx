import { useState } from "react";
import MembershipImage from "../../../../assets/MemberShip.webp"; // rename the uploaded image to this
import JoinMembershipModal from "./MembershipModal"; // create this modal if needed

const Membership = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-semibold text-amber-700 mb-4">
            Become a Member
          </h2>
          <p className="text-gray-700 mb-6 text-sm">
            Membership at Go Up North Star means investing in your future and your
            community. Members enjoy profit-sharing, voting rights, and special
            financial benefits.
          </p>

          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            Requirements
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-6">
            <li>Must hold a Go Up North Star account</li>
            <li>18 years or older</li>
            <li>Minimum of 10 shares (R100/share)</li>
          </ul>

          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            How to Join
          </h3>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>Navigate to the “Membership” section</li>
            <li>Click the button "Join Now at the bottom"</li>
            <li>Provide your GO-UP Northstar profile account (ID number)</li>
            <li>Select share quantity and complete purchase</li>
            <li>After it has been processed</li>
            <li>Receive your Membership Certificate</li>
          </ol>
        </div>

        <div className="flex justify-center">
          <img
            src={MembershipImage}
            alt="Membership"
            className="rounded-2xl w-full max-w-md object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center hover:scale-110 duration-500 mt-10">
        <button
          onClick={() => setShowModal(true)}
          className="inline-block px-6 py-2.5 text-white bg-amber-600 hover:bg-amber-700 rounded-full text-sm font-medium transition-shadow shadow-md hover:shadow-lg"
        >
          Join Now
        </button>
      </div>

      <JoinMembershipModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Membership;
