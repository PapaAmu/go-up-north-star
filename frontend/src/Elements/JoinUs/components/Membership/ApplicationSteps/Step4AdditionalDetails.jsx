import { useEffect, useState } from 'react';
import useMembershipFormStore from '../../../../../Store/useMembershipFormStore';

const Step4AdditionalDetails = ({ setStep4Valid }) => {
  const { formData, updateFormData } = useMembershipFormStore();

  const [qualification, setQualification] = useState(formData.qualification);
  const [physicalAddress, setPhysicalAddress] = useState(
    formData.physicalAddress
  );
  const [postalAddress, setPostalAddress] = useState(formData.postalAddress);
  const [inviterName, setInviterName] = useState(formData.inviterName);

  // Validation effect
  useEffect(() => {
    const isValid =
      qualification.trim() &&
      physicalAddress.trim() &&
      postalAddress.trim() &&
      inviterName.trim();

    if (setStep4Valid) {
      setStep4Valid(!!isValid);
    }

    updateFormData({
      qualification,
      physicalAddress,
      postalAddress,
      inviterName,
    });
  }, [
    qualification,
    physicalAddress,
    postalAddress,
    inviterName,

    setStep4Valid,

    updateFormData,
  ]);

  return (
    <div className="space-y-6 text-sm text-gray-800">
      <div className="flex justify-center gap-4 border-b py-2">
        <p className="px-3 py-1 text-2xl rounded-full bg-primary font-extrabold text-amber-800">
          4
        </p>
        <h2 className="text-3xl font-semibold text-amber-800">
          Your Personal Details
        </h2>
      </div>

      <form className="space-y-4">
        <div>
          <label className="font-medium">Highest Qualification</label>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className={`w-full border rounded-md px-3 py-2 ${
              qualification.trim() ? 'border-gray-300' : 'border-red-500'
            }`}
          />
        </div>

        <div>
          <label className="font-medium">Physical Address</label>
          <textarea
            rows={2}
            value={physicalAddress}
            onChange={(e) => setPhysicalAddress(e.target.value)}
            className={`w-full border rounded-md px-3 py-2 ${
              physicalAddress.trim() ? 'border-gray-300' : 'border-red-500'
            }`}
          />
        </div>

        <div>
          <label className="font-medium">Postal Address</label>
          <textarea
            rows={2}
            value={postalAddress}
            onChange={(e) => setPostalAddress(e.target.value)}
            className={`w-full border rounded-md px-3 py-2 ${
              postalAddress.trim() ? 'border-gray-300' : 'border-red-500'
            }`}
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
            className={`w-full border rounded-md px-3 py-2 ${
              inviterName.trim() ? 'border-gray-300' : 'border-red-500'
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default Step4AdditionalDetails;
