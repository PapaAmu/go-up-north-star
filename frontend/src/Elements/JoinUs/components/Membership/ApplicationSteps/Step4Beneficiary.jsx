import React, { useState } from "react";
import toast from "react-hot-toast";

const Step4BeneficiaryDetails = ({
  onConfirm,
  setBeneficiaryFirstName,
  setBeneficiaryLastName,
  setBeneficiaryIdNumber,
  setBeneficiaryRelationship,
  setBeneficiaryPhone,
  setBeneficiaryEmail,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!firstName || !lastName || !idNumber || !relationship || !phone || !email) {
      toast.error("Please fill in all the beneficiary details.");
      return;
    }

    // Save to parent state
    setBeneficiaryFirstName(firstName);
    setBeneficiaryLastName(lastName);
    setBeneficiaryIdNumber(idNumber);
    setBeneficiaryRelationship(relationship);
    setBeneficiaryPhone(phone);
    setBeneficiaryEmail(email);

    onConfirm();
  };

  return (
    <div className="space-y-6 text-sm text-gray-800">
      <h2 className="text-2xl font-bold text-amber-700">Beneficiary Details</h2>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              placeholder="e.g. Jane"
            />
          </div>

          <div>
            <label className="font-medium">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              placeholder="e.g. Doe"
            />
          </div>
        </div>

        <div>
          <label className="font-medium">ID Number</label>
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            placeholder="e.g. 9101011234088"
          />
        </div>

        <div>
          <label className="font-medium">Relationship</label>
          <input
            type="text"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            placeholder="e.g. Spouse, Child, Parent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Cell Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              placeholder="e.g. 0812345678"
            />
          </div>

          <div>
            <label className="font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              placeholder="e.g. jane@example.com"
            />
          </div>
        </div>
      </form>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={handleSubmit}
          className={`px-6 py-2 text-sm rounded-full font-medium shadow ${
            firstName && lastName && idNumber && relationship && phone && email
              ? "bg-amber-600 hover:bg-amber-700 text-white"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default Step4BeneficiaryDetails;
