import React, { useState } from "react";
import toast from "react-hot-toast";
import Step1TermsAndConditions from "./ApplicationSteps/Step1Terms";
import Step2SharesAndSavings from "./ApplicationSteps/Step2Shares";
import Step3PersonalInformation from "./ApplicationSteps/Step3PersonalInfo";
import Step4BeneficiaryDetails from "./ApplicationSteps/Step4Beneficiary";

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
  const [proofOfPayment, setProofOfPayment] = useState(null);

  // Beneficiary details
  const [beneficiaryFirstName, setBeneficiaryFirstName] = useState("");
  const [beneficiaryLastName, setBeneficiaryLastName] = useState("");

  const [beneficiaryIdNumber, setBeneficiaryIdNumber] = useState("");
  const [beneficiaryRelationship, setBeneficiaryRelationship] = useState("");
  const [beneficiaryPhone, setBeneficiaryPhone] = useState("");
  const [beneficiaryEmail, setBeneficiaryEmail] = useState("");

  // Navigation
  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePreviousStep = () => setCurrentStep((prev) => prev - 1);

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
    formData.append("monthly_savings", savings);

    // Optional uploads
    if (proofOfPayment) formData.append("proof_of_payment", proofOfPayment);
    if (idDocument) formData.append("id_document", idDocument);

    // Beneficiary
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
          errorData.message || "There was an error submitting your application."
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

        {/* Step 1 */}
        {currentStep === 1 && (
          <Step1TermsAndConditions
            onConfirm={handleNextStep}
            setFirstName={setFirstName}
            setLastName={setLastName}
          />
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <Step2SharesAndSavings
            onConfirm={handleNextStep}
            setShares={setShares}
            setSavings={setSavings}
          />
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <Step3PersonalInformation
            onConfirm={handleNextStep}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPhone={setPhone}
            setEmail={setEmail}
            setIdType={setIdType}
            setIdNumber={setIdNumber}
            setProofOfPayment={setProofOfPayment}
            setIdDocument={setIdDocument}
          />
        )}

        {/* Step 4 */}
        {currentStep === 4 && (
          <Step4BeneficiaryDetails
            onConfirm={handleSubmit}
            setBeneficiaryFirstName={setBeneficiaryFirstName}
            setBeneficiaryLastName={setBeneficiaryLastName}
            setBeneficiaryIdNumber={setBeneficiaryIdNumber}
            setBeneficiaryRelationship={setBeneficiaryRelationship}
            setBeneficiaryPhone={setBeneficiaryPhone}
            setBeneficiaryEmail={setBeneficiaryEmail}
          />
        )}

        {/* Back button */}
        {currentStep > 1 && (
          <button
            onClick={handlePreviousStep}
            className="absolute bottom-2 left-3 px-4 py-2 text-sm rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800"
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
};

export default MembershipModal;
