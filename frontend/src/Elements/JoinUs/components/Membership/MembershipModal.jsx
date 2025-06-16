import { useState } from 'react';
import toast from 'react-hot-toast';
import Step1TermsAndConditions from './ApplicationSteps/Step1Terms';
import Step2SharesAndSavings from './ApplicationSteps/Step2Shares';
import Step3PersonalInformation from './ApplicationSteps/Step3PersonalInfo';
import Step4AdditionalDetails from './ApplicationSteps/Step4AdditionalDetails';
import Step5BeneficiaryDetails from './ApplicationSteps/Step5Beneficiary';
import Step6ReviewSummary from './ApplicationSteps/Step6ReviewSummary';

const MembershipModal = ({ open, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1–3
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [profession, setProfession] = useState('');
  const [occupation, setOccupation] = useState('');
  const [idType, setIdType] = useState('ID');
  const [idNumber, setIdNumber] = useState('');
  const [shares, setShares] = useState('');
  const [savings, setSavings] = useState('');

  // Step 4 - Additional details
  const [qualification, setQualification] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [postalAddress, setPostalAddress] = useState('');
  const [inviterName, setInviterName] = useState('');

  // Step 5
  const [beneficiaryFirstName, setBeneficiaryFirstName] = useState('');
  const [beneficiaryLastName, setBeneficiaryLastName] = useState('');
  const [beneficiaryIdNumber, setBeneficiaryIdNumber] = useState('');
  const [beneficiaryRelationship, setBeneficiaryRelationship] = useState('');
  const [beneficiaryPhone, setBeneficiaryPhone] = useState('');
  const [beneficiaryEmail, setBeneficiaryEmail] = useState('');

  // Validation flags for steps with complex validation
  const [isStep3Valid, setIsStep3Valid] = useState(false);
  const [isStep4Valid, setIsStep4Valid] = useState(false);

  const [isStep5Valid, setIsStep5Valid] = useState(false);

  const handleNextStep = () => {
    let isValid = true;

    switch (currentStep) {
      case 1:
        // Assuming Step1TermsAndConditions exports a static validator
        isValid = Step1TermsAndConditions.isStepValid?.() ?? true;
        break;

      case 2:
        // Assuming Step2SharesAndSavings exports a static validator
        isValid = Step2SharesAndSavings.isStepValid?.(shares, savings) ?? true;
        break;

      case 3:
        isValid = isStep3Valid;
        break;

      case 4:
        isValid = isStep4Valid;

        break;

      case 5:
        isValid = isStep5Valid;
        break;

      default:
        break;
    }

    if (!isValid) {
      toast.error('Please complete the current step correctly.');
      return;
    }

    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('id_type', idType);
    formData.append('id_number', idNumber);
    formData.append('gender', gender);
    formData.append('profession', profession);
    formData.append('occupation', occupation);
    formData.append('shares', shares);
    formData.append('monthly_savings', savings);

    // Step 4 additions
    formData.append('qualification', qualification);
    formData.append('physical_address', physicalAddress);
    formData.append('postal_address', postalAddress);
    formData.append('inviter_name', inviterName);

    const beneficiaryFullName =
      `${beneficiaryFirstName} ${beneficiaryLastName}`.trim();
    formData.append('beneficiary_full_name', beneficiaryFullName);
    formData.append('beneficiary_id_number', beneficiaryIdNumber);
    formData.append('beneficiary_relationship', beneficiaryRelationship);
    formData.append('beneficiary_phone', beneficiaryPhone);
    formData.append('beneficiary_email', beneficiaryEmail);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/memberships`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        toast.success('Membership application submitted successfully!');
        onClose();
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Error submitting your application.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('There was an error submitting your application.');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-full max-w-4xl shadow-lg relative overflow-y-auto max-h-[95vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Close membership modal"
        >
          &times;
        </button>

        {currentStep === 1 && (
          <Step1TermsAndConditions
            setFirstName={setFirstName}
            setLastName={setLastName}
          />
        )}

        {currentStep === 2 && (
          <Step2SharesAndSavings
            setShares={setShares}
            setSavings={setSavings}
          />
        )}

        {currentStep === 3 && (
          <Step3PersonalInformation
            setPhone={setPhone}
            setEmail={setEmail}
            setIdType={setIdType}
            setIdNumber={setIdNumber}
            setGender={setGender}
            setProfession={setProfession}
            setOccupation={setOccupation}
            setStep3Valid={setIsStep3Valid}
          />
        )}

        {currentStep === 4 && (
          <Step4AdditionalDetails
            setQualification={setQualification}
            setPhysicalAddress={setPhysicalAddress}
            setPostalAddress={setPostalAddress}
            setInviterName={setInviterName}
            setStep4Valid={setIsStep4Valid}
          />
        )}

        {currentStep === 5 && (
          <Step5BeneficiaryDetails
            setBeneficiaryFirstName={setBeneficiaryFirstName}
            setBeneficiaryLastName={setBeneficiaryLastName}
            setBeneficiaryIdNumber={setBeneficiaryIdNumber}
            setBeneficiaryRelationship={setBeneficiaryRelationship}
            setBeneficiaryPhone={setBeneficiaryPhone}
            setBeneficiaryEmail={setBeneficiaryEmail}
            setStep5Valid={setIsStep5Valid}
          />
        )}

        {currentStep === 6 && (
          <Step6ReviewSummary
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            email={email}
            idType={idType}
            idNumber={idNumber}
            shares={shares}
            savings={savings}
            beneficiaryFirstName={beneficiaryFirstName}
            beneficiaryLastName={beneficiaryLastName}
            beneficiaryIdNumber={beneficiaryIdNumber}
            beneficiaryRelationship={beneficiaryRelationship}
            beneficiaryPhone={beneficiaryPhone}
            beneficiaryEmail={beneficiaryEmail}
          />
        )}

        <div className="flex justify-center gap-4 items-center mt-6">
          {currentStep > 1 ? (
            <button
              onClick={handlePreviousStep}
              className="px-4 py-2 rounded-full font-semibold bg-gray-800 hover:bg-gray-400 text-primary"
            >
              Previous
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleNextStep}
            className="px-6 py-2 text-white font-semibold bg-amber-600 hover:bg-amber-700 rounded-full shadow"
          >
            {currentStep < 6 ? 'Next' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipModal;
