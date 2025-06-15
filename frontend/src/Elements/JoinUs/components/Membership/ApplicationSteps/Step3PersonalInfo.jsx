import { useState } from "react";
import toast from "react-hot-toast";

const Step3PersonalInformation = ({
  setPhone,
  setEmail,
  setIdType,
  setIdNumber,
  setStep3Valid,
}) => {
  const [gender, setGender] = useState("");
  const [idType, setLocalIdType] = useState("ID");
  const [idNumber, setLocalIdNumber] = useState("");
  const [phone, setLocalPhone] = useState("");
  const [email, setLocalEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleFormChange = () => {
    const isFormValid = Boolean(
      gender &&
      idNumber &&
      phone &&
      email &&
      profession &&
      occupation
    );

    setStep3Valid(isFormValid);
  };

  const handleSubmit = () => {
    if (
      !gender ||
      !idNumber ||
      !phone ||
      !email ||
      !profession ||
      !occupation
    ) {
      toast.error("Please complete all fields.");
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
  };

  return (
    <div className="space-y-6 text-sm text-gray-800">
      <h2 className="text-2xl font-bold text-amber-700">Personal Information</h2>

      <form className="space-y-4" onChange={handleFormChange}>
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
      </form>
    </div>
  );
};

export default Step3PersonalInformation;
