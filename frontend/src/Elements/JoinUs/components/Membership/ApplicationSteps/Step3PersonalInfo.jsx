import { useEffect, useState } from "react";
import useMembershipFormStore from "../../../../../Store/useMembershipFormStore";

const Step3PersonalInformation = ({ setStep3Valid }) => {
  const { formData, updateFormData } = useMembershipFormStore();

  const [localGender, setLocalGender] = useState(formData.gender || "");
  const [localIdType, setLocalIdType] = useState(formData.idType || "ID");
  const [localIdNumber, setLocalIdNumber] = useState(formData.idNumber || "");
  const [localPhone, setLocalPhone] = useState(formData.phone || "");
  const [localEmail, setLocalEmail] = useState(formData.email || "");
  const [localProfession, setLocalProfession] = useState(formData.profession || "");
  const [localOccupation, setLocalOccupation] = useState(formData.occupation || "");

  useEffect(() => {
    const isValid =
      localGender &&
      localIdNumber &&
      localPhone &&
      localEmail &&
      localProfession &&
      localOccupation &&
      (localIdType === "Passport" || localIdNumber.length === 13);

    setStep3Valid(isValid);

    if (isValid) {
      updateFormData({
        gender: localGender,
        idType: localIdType,
        idNumber: localIdNumber,
        phone: localPhone,
        email: localEmail,
        profession: localProfession,
        occupation: localOccupation,
      });
    }
  }, [
    localGender,
    localIdType,
    localIdNumber,
    localPhone,
    localEmail,
    localProfession,
    localOccupation,
    updateFormData,
    setStep3Valid,
  ]);

  return (
    <div className="space-y-6 text-sm text-gray-800">
      <h2 className="text-2xl font-bold text-amber-700">Personal Information</h2>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Gender</label>
            <select
              value={localGender}
              onChange={(e) => setLocalGender(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="font-medium">ID Type</label>
            <select
              value={localIdType}
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
            value={localIdNumber}
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
              value={localPhone}
              onChange={(e) => setLocalPhone(e.target.value)}
              placeholder="e.g. 0812345678"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="font-medium">Email Address</label>
            <input
              type="email"
              value={localEmail}
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
              value={localProfession}
              onChange={(e) => setLocalProfession(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="font-medium">Occupation</label>
            <input
              type="text"
              value={localOccupation}
              onChange={(e) => setLocalOccupation(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step3PersonalInformation;
