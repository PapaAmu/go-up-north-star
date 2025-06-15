import { useEffect, useState } from "react";

const Step4AdditionalDetails = ({
  setProofOfAddress,
  setIdDocument,
  setStep4Valid,
}) => {
  const [qualification, setQualification] = useState("");
  const [physicalAddress, setPhysicalAddress] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [inviterName, setInviterName] = useState("");
  const [localProofOfAddress, setLocalProofOfAddress] = useState(null);
  const [localIdDocument, setLocalIdDocument] = useState(null);
  const [acceptPopi, setAcceptPopi] = useState(false);

  // Handle validation and pass state up
  useEffect(() => {
    const isFormValid =
      qualification &&
      physicalAddress &&
      postalAddress &&
      inviterName &&
      localProofOfAddress &&
      localIdDocument &&
      acceptPopi;

    setStep4Valid(Boolean(isFormValid));

    // propagate to parent for form submission
    setProofOfAddress(localProofOfAddress);
    setIdDocument(localIdDocument);
  }, [
    qualification,
    physicalAddress,
    postalAddress,
    inviterName,
    localProofOfAddress,
    localIdDocument,
    acceptPopi,
    setStep4Valid,
    setProofOfAddress,
    setIdDocument,
  ]);

  return (
    <div className="space-y-6 text-sm text-gray-800">
      <h2 className="text-2xl font-bold text-amber-700">Additional Details</h2>

      <form className="space-y-4">
        <div>
          <label className="font-medium">Highest Qualification</label>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className={`w-full border rounded-md px-3 py-2 ${
              !qualification ? "border-red-500" : "border-gray-300"
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
              !physicalAddress ? "border-red-500" : "border-gray-300"
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
              !postalAddress ? "border-red-500" : "border-gray-300"
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
              !inviterName ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Upload ID Document (Required)</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setLocalIdDocument(e.target.files[0])}
              className={`w-full text-sm ${
                !localIdDocument ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          <div>
            <label className="font-medium">Proof of Address (Required)</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setLocalProofOfAddress(e.target.files[0])}
              className={`w-full text-sm ${
                !localProofOfAddress ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
        </div>

        <div className="pt-4">
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={acceptPopi}
              onChange={() => setAcceptPopi((prev) => !prev)}
              className={`accent-amber-600 mt-1 ${
                !acceptPopi ? "border-red-500" : "border-gray-300"
              }`}
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
    </div>
  );
};

export default Step4AdditionalDetails;
