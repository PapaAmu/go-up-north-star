import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const MembershipModal = ({ open, onClose }) => {
  if (!open) return null;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [idType, setIdType] = useState("ID");
  const [idNumber, setIdNumber] = useState("");
  const [shares, setShares] = useState("");
  const [proofOfPayment, setProofOfPayment] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [readTerms, setReadTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const isValid =
    firstName &&
    lastName &&
    phone &&
    email &&
    idNumber &&
    shares >= 10 &&
    acceptedTerms &&
    readTerms;

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("first_name", firstName);
  formData.append("last_name", lastName);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("id_type", idType);
  formData.append("id_number", idNumber);
  formData.append("shares", shares);
  formData.append("accepted_terms", acceptedTerms ? "1" : "0"); // ✅ fixed
  formData.append("read_terms", readTerms ? "1" : "0"); // ✅ fixed
  if (proofOfPayment) {
    formData.append("proof_of_payment", proofOfPayment);
  }

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/memberships`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success("Membership application submitted successfully!");
    onClose();
  } catch (error) {
    console.error("Submission error:", error);
    const message =
      error.response?.data?.message ||
      "There was an error submitting your application.";
    toast.error(message);
  }
};


  const validateIDInput = (value) => {
    if (idType === "ID") {
      return value.replace(/\D/g, "").slice(0, 13);
    } else {
      return value.slice(0, 20);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl p-6 w-full max-w-3xl shadow-lg relative overflow-y-auto max-h-[95vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-amber-700 mb-4">
          Join Membership
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-medium">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className={`w-full border rounded-md px-3 py-2 ${
                  !firstName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
            </div>

            <div>
              <label className="font-medium">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className={`w-full border rounded-md px-3 py-2 ${
                  !lastName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
            </div>
          </div>

          {/* Phone and Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-medium">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                pattern="[0-9]{10}"
                className={`w-full border rounded-md px-3 py-2 ${
                  !phone ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
            </div>

            <div>
              <label className="font-medium">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full border rounded-md px-3 py-2 ${
                  !email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
            </div>
          </div>

          {/* ID and Shares */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-medium">ID Type</label>
              <div className="flex items-center gap-6 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="idType"
                    value="ID"
                    checked={idType === "ID"}
                    onChange={() => setIdType("ID")}
                    className="accent-amber-600"
                  />
                  South African ID
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="idType"
                    value="Passport"
                    checked={idType === "Passport"}
                    onChange={() => setIdType("Passport")}
                    className="accent-amber-600"
                  />
                  Passport
                </label>
              </div>

              <input
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(validateIDInput(e.target.value))}
                required
                placeholder={
                  idType === "ID" ? "13-digit ID number" : "Passport number"
                }
                className={`w-full border rounded-md px-3 py-2 ${
                  !idNumber ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">
                Number of Shares (R100 each)
              </label>
              <input
                type="number"
                value={shares}
                onChange={(e) => setShares(e.target.value)}
                min="10"
                required
                className={`w-full border rounded-md px-3 py-2 ${
                  shares < 10 ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
              {shares < 10 && (
                <p className="text-red-500 text-xs">
                  Minimum 10 shares required.
                </p>
              )}
            </div>
          </div>

          {/* Proof of Payment */}
          <div>
            <label className="font-medium">Proof of Payment (Optional)</label>
            <input
              type="file"
              onChange={(e) => setProofOfPayment(e.target.files[0])}
              accept="image/*,.pdf"
              className="w-full text-sm"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <label className="font-medium">Accept Terms & Conditions</label>
              <div
                className={`relative w-16 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                  acceptedTerms ? "bg-green-500" : "bg-red-500"
                }`}
                onClick={() => setAcceptedTerms(!acceptedTerms)}
              >
                <div
                  className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-500 ${
                    acceptedTerms ? "translate-x-9" : ""
                  }`}
                />
                <span className="absolute left-1/2 transform -translate-x-1/2 text-xs text-white font-bold">
                  {acceptedTerms ? "Yes" : "No"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={readTerms}
                onChange={(e) => setReadTerms(e.target.checked)}
                className="accent-amber-600"
              />
              <label className="text-gray-700">
                I have read and understood the Terms & Conditions
              </label>
            </div>

            <button
              type="button"
              onClick={() => setShowTerms(!showTerms)}
              className="text-amber-700 hover:underline text-sm"
            >
              {showTerms
                ? "Hide Terms & Conditions"
                : "View Terms & Conditions"}
            </button>

            {showTerms && (
              <div className="p-3 bg-gray-100 rounded-md text-xs text-gray-700 border border-gray-300">
                <p>
                  By becoming a member, you agree to abide by the rules and
                  policies of Go Up North Star Co-operative Bank. You understand
                  your responsibilities as a shareholder and acknowledge the
                  risks and benefits associated with membership.
                </p>
                <p className="mt-2">
                  You also consent to receive notices and communications
                  electronically. Membership is subject to approval.
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className={`px-6 py-2 text-sm rounded-full font-medium shadow ${
                isValid
                  ? "bg-amber-600 hover:bg-amber-700 text-white"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipModal;
