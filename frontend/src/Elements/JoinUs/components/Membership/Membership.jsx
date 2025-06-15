import { useState } from "react";
import MembershipImage from "../../../../assets/MemberShip.webp";
import JoinMembershipModal from "./MembershipModal";
import { BsArrowRightShort } from "react-icons/bs"; 

const Membership = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-semibold text-amber-700 mb-4">
            Become a Member
          </h2>
          <p className="text-gray-700 mb-6 text-sm">
            Join Go Up North Star and invest in a brighter financial future for yourself and your community. Membership offers shared returns, voting rights, and access to exclusive services and benefits.
          </p>

          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            Requirements
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-6">
            <li>Be 18 years or older with a valid ID or Passport</li>
            <li>Purchase shares starting from R2,000 (up to R25,000)</li>
            <li>Commit to saving a minimum of R500 per month</li>
            <li>Pay a monthly admin fee of R50 (non-refundable)</li>
          </ul>

          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            How to Join
          </h3>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>Click the “Join Now” button below</li>
            <li>Fill in your personal, financial & beneficiary details</li>
            <li>Select your share purchase and monthly savings amount</li>
            <li>Submit and await processing confirmation</li>
            <li>Receive your Membership Certificate</li>
          </ol>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center">
          <img
            src={MembershipImage}
            alt="Membership"
            className="rounded-2xl w-full max-w-md object-cover"
          />
        </div>
      </div>

      {/* Join Button */}
      <div className="flex justify-center mt-10 hover:scale-105 transition-transform duration-300">
  <button
    onClick={() => setShowModal(true)}
    className="inline-flex items-center gap-2 bg-gray-950 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-lime-400 transition"
  >
    Join Now
    <span className="bg-amber-600 text-white p-2 rounded-full">
      <BsArrowRightShort className="w-4 h-4" />
    </span>
  </button>
</div>

      {/* Modal */}
      <JoinMembershipModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Membership;
