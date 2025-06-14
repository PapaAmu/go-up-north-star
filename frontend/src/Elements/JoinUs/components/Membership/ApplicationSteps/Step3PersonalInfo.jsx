import React, { useState } from "react";
import toast from "react-hot-toast";

const Step3PersonalInformation = ({
  onConfirm,
  setFirstName,
  setLastName,
  setPhone,
  setEmail,
  setIdType,
  setIdNumber,
  setProofOfPayment,
  setIdDocument,
}) => {
  const [gender, setGender] = useState("");
  const [idType, setLocalIdType] = useState("ID");
  const [idNumber, setLocalIdNumber] = useState("");
  const [phone, setLocalPhone] = useState("");
  const [email, setLocalEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [occupation, setOccupation] = useState("");
  const [qualification, setQualification] = useState("");
  const [physicalAddress, setPhysicalAddress] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [inviterName, setInviterName] = useState("");

  const [proofOfPayment, setLocalProofOfPayment] = useState(null);
  const [idDocument, setLocalIdDocument] = useState(null);
  const [acceptPopi, setAcceptPopi] = useState(false);

  const handleSubmit = () => {
    if (
      !gender ||
      !idNumber ||
      !phone ||
      !email ||
      !profession ||
      !occupation ||
      !qualification ||
      !physicalAddress ||
      !postalAddress ||
      !inviterName ||
      !idDocument ||
      !acceptPopi
    ) {
      toast.error("Please complete all fields and upload your ID document.");
      return;
    }

    if (idType === "ID" && idNumber.length !== 13) {
      toast.error("South African ID must be 13 digits.");
      return;
    }

    setIdType(idType);
    setIdNumber(idNumber);
    setPhone(phone);
    setEmail(email);
    setProofOfPayment(proofOfPayment);
    setIdDocument(idDocument);
    onConfirm();
  };

  return (
    <div className="space-y-6 text-sm text-gray-800">
      <h2 className="text-2xl font-bold text-amber-700">Personal Information</h2>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className="font-medium">ID Type</label>
            <select
              value={idType}
              onChange={(e) => setLocalIdType(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="ID">South African ID</option>
              <option value="Passport">Passport</option>
            </select>
          </div>
        </div>

        <div>
          <label className="font-medium">ID Number</label>
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setLocalIdNumber(e.target.value)}
            placeholder="e.g. 8501011234087"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Cell Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setLocalPhone(e.target.value)}
              placeholder="e.g. 0812345678"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setLocalEmail(e.target.value)}
              placeholder="e.g. you@example.com"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Profession</label>
            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="font-medium">Occupation</label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="font-medium">Highest Qualification</label>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="font-medium">Physical Address</label>
          <textarea
            rows={2}
            value={physicalAddress}
            onChange={(e) => setPhysicalAddress(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="font-medium">Postal Address</label>
          <textarea
            rows={2}
            value={postalAddress}
            onChange={(e) => setPostalAddress(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Name & Surname of Person Who Invited You
          </label>
          <input
            type="text"
            value={inviterName}
            onChange={(e) => setInviterName(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Upload ID Document (Required)</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setLocalIdDocument(e.target.files[0])}
              className="w-full text-sm"
            />
          </div>

          <div>
            <label className="font-medium">Proof of Payment (Optional)</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setLocalProofOfPayment(e.target.files[0])}
              className="w-full text-sm"
            />
          </div>
        </div>

        <div className="pt-4">
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={acceptPopi}
              onChange={() => setAcceptPopi(!acceptPopi)}
              className="accent-amber-600 mt-1"
            />
            <span>
              I consent to the collection and use of my personal information in
              accordance with the{" "}
              <a
                href="https://popia.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 underline"
              >
                Protection of Personal Information Act (POPIA)
              </a>
              .
            </span>
          </label>
        </div>
      </form>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={handleSubmit}
          className={`px-6 py-2 text-sm rounded-full font-medium shadow ${
            gender &&
            idNumber &&
            phone &&
            email &&
            profession &&
            occupation &&
            qualification &&
            physicalAddress &&
            postalAddress &&
            inviterName &&
            idDocument &&
            acceptPopi
              ? "bg-amber-600 hover:bg-amber-700 text-white"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3PersonalInformation;
