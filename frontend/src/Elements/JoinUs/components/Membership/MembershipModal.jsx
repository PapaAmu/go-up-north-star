import { useState } from 'react';
import toast from 'react-hot-toast';
import useMembershipFormStore from '../../../../Store/useMembershipFormStore';
import Step1TermsAndConditions from './ApplicationSteps/Step1Terms';
import Step2SharesAndSavings from './ApplicationSteps/Step2Shares';
import Step3PersonalInformation from './ApplicationSteps/Step3PersonalInfo';
import Step4AdditionalDetails from './ApplicationSteps/Step4AdditionalDetails';
import Step5BeneficiaryDetails from './ApplicationSteps/Step5Beneficiary';
import Step6ReviewSummary from './ApplicationSteps/Step6ReviewSummary';
import Step7UploadFiles from './ApplicationSteps/Step7UploadFiles';

const MembershipModal = ({ open, onClose }) => {
  const { formData } = useMembershipFormStore();
  const [currentStep, setCurrentStep] = useState(1);

  // Validation flags for steps with complex validation
  const [isStep3Valid, setIsStep3Valid] = useState(false);
  const [isStep4Valid, setIsStep4Valid] = useState(false);
  const [isStep5Valid, setIsStep5Valid] = useState(false);
  const [isStep7Valid, setIsStep7Valid] = useState(false);

  const handleNextStep = () => {
    let isValid = true;

    switch (currentStep) {
      case 1:
        isValid = true;
        break;

      case 2:
        isValid = true;
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

      case 6:
        isValid = true;
        break;

      case 7:
        isValid = isStep7Valid;
        break;

      default:
        break;
    }

    if (!isValid) {
      toast.error('Please complete the current step correctly.');
      return;
    }

    if (currentStep < 7) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append('first_name', formData.firstName);
    formDataToSend.append('last_name', formData.lastName);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('id_type', formData.idType);
    formDataToSend.append('id_number', formData.idNumber);
    formDataToSend.append('gender', formData.gender);
    formDataToSend.append('profession', formData.profession);
    formDataToSend.append('occupation', formData.occupation);
    formDataToSend.append('shares', formData.shares);
    formDataToSend.append('monthly_savings', formData.savings);
    formDataToSend.append('qualification', formData.qualification);
    formDataToSend.append('physical_address', formData.physicalAddress);
    formDataToSend.append('postal_address', formData.postalAddress);
    formDataToSend.append('inviter_name', formData.inviterName);
    formDataToSend.append(
      'beneficiary_full_name',
      `${formData.beneficiary.firstName} ${formData.beneficiary.lastName}`
    );
    formDataToSend.append(
      'beneficiary_id_number',
      formData.beneficiary.idNumber
    );
    formDataToSend.append(
      'beneficiary_relationship',
      formData.beneficiary.relationship
    );
    formDataToSend.append('beneficiary_phone', formData.beneficiary.phone);
    formDataToSend.append('beneficiary_email', formData.beneficiary.email);
    formDataToSend.append('id_copy', formData.idCopy);
    formDataToSend.append('proof_of_address', formData.proofOfAddress);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/memberships`,
        {
          method: 'POST',
          body: formDataToSend,
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

        {currentStep === 1 && <Step1TermsAndConditions />}
        {currentStep === 2 && <Step2SharesAndSavings />}
        {currentStep === 3 && (
          <Step3PersonalInformation setStep3Valid={setIsStep3Valid} />
        )}
        {currentStep === 4 && (
          <Step4AdditionalDetails setStep4Valid={setIsStep4Valid} />
        )}
        {currentStep === 5 && (
          <Step5BeneficiaryDetails setStep5Valid={setIsStep5Valid} />
        )}
        {currentStep === 6 && <Step6ReviewSummary />}
        {currentStep === 7 && (
          <Step7UploadFiles setStep7Valid={setIsStep7Valid} />
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
            {currentStep < 7 ? 'Next' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipModal;
