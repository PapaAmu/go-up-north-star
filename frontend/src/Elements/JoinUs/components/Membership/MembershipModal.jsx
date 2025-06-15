import { useState } from "react";
import toast from "react-hot-toast";
import Step1TermsAndConditions from "./ApplicationSteps/Step1Terms";
import Step2SharesAndSavings from "./ApplicationSteps/Step2Shares";
import Step3PersonalInformation from "./ApplicationSteps/Step3PersonalInfo";
import Step4AdditionalDetails from "./ApplicationSteps/Step4AdditionalDetails";
import Step5BeneficiaryDetails from "./ApplicationSteps/Step5Beneficiary";

const MembershipModal = ({ open, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  // Personal details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Identification
  const [idType, setIdType] = useState("ID");
  const [idNumber, setIdNumber] = useState("");
  const [idDocument, setIdDocument] = useState(null);

  // Financials
  const [shares, setShares] = useState("");
  const [savings, setSavings] = useState("");
  const [proofOfAddress, setProofOfAddress] = useState(null);

  // Beneficiary details
  const [beneficiaryFirstName, setBeneficiaryFirstName] = useState("");
  const [beneficiaryLastName, setBeneficiaryLastName] = useState("");
  const [beneficiaryIdNumber, setBeneficiaryIdNumber] = useState("");
  const [beneficiaryRelationship, setBeneficiaryRelationship] = useState("");
  const [beneficiaryPhone, setBeneficiaryPhone] = useState("");
  const [beneficiaryEmail, setBeneficiaryEmail] = useState("");

  // Step 3 and 4 validation states
  const [isStep3Valid, setIsStep3Valid] = useState(false);
  const [isStep4Valid, setIsStep4Valid] = useState(false);

  const handleNextStep = () => {
    let isValid = true;

    switch (currentStep) {
      case 1:
        isValid = Step1TermsAndConditions.isStepValid?.();
        break;
      case 2:
        isValid = Step2SharesAndSavings.isStepValid?.(shares, savings);
        break;
      case 3:
        isValid = isStep3Valid;
        break;
      case 4:
        isValid = isStep4Valid;
        break;
      default:
        break;
    }

    if (!isValid) {
      toast.error("Please complete the current step correctly.");
      return;
    }

    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit(); // last step
    }
  };

  const handlePreviousStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("id_type", idType);
    formData.append("id_number", idNumber);
    formData.append("shares", shares);
    formData.append("monthly_savings", savings);

    if (proofOfAddress) formData.append("proof_of_address", proofOfAddress);
    if (idDocument) formData.append("id_document", idDocument);

    const beneficiaryFullName = `${beneficiaryFirstName} ${beneficiaryLastName}`;
    formData.append("beneficiary_full_name", beneficiaryFullName);
    formData.append("beneficiary_id_number", beneficiaryIdNumber);
    formData.append("beneficiary_relationship", beneficiaryRelationship);
    formData.append("beneficiary_phone", beneficiaryPhone);
    formData.append("beneficiary_email", beneficiaryEmail);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/memberships`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Membership application submitted successfully!");
        onClose();
      } else {
        const errorData = await response.json();
        toast.error(
          errorData.message ||
            "There was an error submitting your application."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("There was an error submitting your application.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-full max-w-4xl shadow-lg relative overflow-y-auto max-h-[95vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        {/* Step content */}
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
            setProofOfAddress={setProofOfAddress}
            setIdDocument={setIdDocument}
            setStep3Valid={setIsStep3Valid}
          />
        )}

        {currentStep === 4 && (
          <Step4AdditionalDetails
            setProofOfAddress={setProofOfAddress}
            setIdDocument={setIdDocument}
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
          />
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-6">
          {currentStep > 1 ? (
            <button
              onClick={handlePreviousStep}
              className="px-4 py-2 text-sm rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800"
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
            {currentStep < 5 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipModal;
