import { useState } from 'react';
import useMembershipFormStore from '../../../../../Store/useMembershipFormStore';

const Step5BeneficiaryDetails = ({ setStep5Valid }) => {
  const { formData, updateBeneficiary } = useMembershipFormStore();
  const { beneficiary } = formData;

  const [firstName, setFirstName] = useState(beneficiary.firstName);
  const [lastName, setLastName] = useState(beneficiary.lastName);
  const [idNumber, setIdNumber] = useState(beneficiary.idNumber);
  const [relationship, setRelationship] = useState(beneficiary.relationship);
  const [phone, setPhone] = useState(beneficiary.phone);
  const [email, setEmail] = useState(beneficiary.email);

  const handleFormChange = () => {
    const isFormValid = Boolean(
      firstName.trim() &&
        lastName.trim() &&
        idNumber.trim() &&
        relationship.trim() &&
        phone.trim() &&
        email.trim()
    );

    setStep5Valid(isFormValid);

    if (isFormValid) {
      updateBeneficiary({
        firstName,
        lastName,
        idNumber,
        relationship,
        phone,
        email,
      });
    }
  };

  return (
    <div className="space-y-6 text-sm text-gray-800">
      <div className="flex justify-center gap-4 border-b py-2">
        <p className="px-3 py-1 text-2xl rounded-full bg-primary">5</p>
        <h2 className="text-3xl font-semibold text-amber-800">
          Beneficiary Details
        </h2>
      </div>

      <form className="space-y-4" onChange={handleFormChange}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium">ID Type</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option value="ID">South African ID</option>
              <option value="Passport">Passport</option>
            </select>
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
    </div>
  );
};

export default Step5BeneficiaryDetails;
