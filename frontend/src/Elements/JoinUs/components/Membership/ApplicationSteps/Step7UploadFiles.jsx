import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import useMembershipFormStore from '../../../../../Store/useMembershipFormStore';

const Step7UploadFiles = ({ setStep7Valid }) => {
  const { formData, updateFormData } = useMembershipFormStore();
  const [idCopyError, setIdCopyError] = useState(null);
  const [proofOfAddressError, setProofOfAddressError] = useState(null);

  const maxFileSize = 5 * 1024 * 1024; // 5MB

  const onDropIdCopy = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      if (file.size > maxFileSize) {
        setIdCopyError('File is too large. Maximum size is 5MB.');
        return;
      }

      if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
        updateFormData({ idCopy: file });
        setIdCopyError(null);
      } else {
        setIdCopyError('Only PDF and image files are allowed.');
      }
    }
  };

  const onDropProofOfAddress = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      if (file.size > maxFileSize) {
        setProofOfAddressError('File is too large. Maximum size is 5MB.');
        return;
      }

      if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
        updateFormData({ proofOfAddress: file });
        setProofOfAddressError(null);
      } else {
        setProofOfAddressError('Only PDF and image files are allowed.');
      }
    }
  };

  const {
    getRootProps: getIdCopyRootProps,
    getInputProps: getIdCopyInputProps,
    isDragActive: isDragActiveIdCopy,
  } = useDropzone({
    onDrop: onDropIdCopy,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.jpg', '.jpeg', '.png'],
    },
    multiple: false,
  });

  const {
    getRootProps: getProofOfAddressRootProps,
    getInputProps: getProofOfAddressInputProps,
    isDragActive: isDragActiveProofOfAddress,
  } = useDropzone({
    onDrop: onDropProofOfAddress,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.jpg', '.jpeg', '.png'],
    },
    multiple: false,
  });

  const validateStep = () => {
    if (
      formData.termsAccepted &&
      formData.popiAccepted &&
      formData.idCopy &&
      formData.proofOfAddress
    ) {
      setStep7Valid(true);
    } else {
      setStep7Valid(false);
    }
  };

  useEffect(() => {
    validateStep();
  }, [formData]);

  const handleTermsChange = (e) => {
    updateFormData({ termsAccepted: e.target.checked });
  };

  const handlePopiChange = (e) => {
    updateFormData({ popiAccepted: e.target.checked });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 border-b pb-2">
        <p className="px-4 py-1 rounded-full bg-primary text-white font-extrabold text-2xl">
          7
        </p>
        <h2 className="text-3xl font-bold text-primary">
          Upload Documents & Accept Terms
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ID Copy Upload */}
        <div className="p-4 border rounded-xl shadow-sm bg-white">
          <h3 className="text-xl font-semibold text-primary mb-2">
            ID Copy / Passport
          </h3>
          <div
            {...getIdCopyRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 cursor-pointer text-center transition ${
              isDragActiveIdCopy ? 'bg-blue-50 border-blue-400' : 'bg-gray-50'
            }`}
          >
            <input {...getIdCopyInputProps()} />
            <p className="text-gray-600">
              {isDragActiveIdCopy
                ? 'Drop the ID copy here...'
                : 'Click or drag file to upload your ID/Passport'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Accepted formats: PDF, JPG, PNG (Max: 5MB)
            </p>
          </div>
          {formData.idCopy && (
            <p className="text-sm mt-2 text-green-700">
              ✅ {formData.idCopy.name} (
              {(formData.idCopy.size / 1024).toFixed(2)} KB)
            </p>
          )}
          {idCopyError && (
            <p className="text-sm text-red-600 mt-1">{idCopyError}</p>
          )}
        </div>

        {/* Proof of Address Upload */}
        <div className="p-4 border rounded-xl shadow-sm bg-white">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Proof of Address
          </h3>
          <div
            {...getProofOfAddressRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 cursor-pointer text-center transition ${
              isDragActiveProofOfAddress
                ? 'bg-blue-50 border-blue-400'
                : 'bg-gray-50'
            }`}
          >
            <input {...getProofOfAddressInputProps()} />
            <p className="text-gray-600">
              {isDragActiveProofOfAddress
                ? 'Drop the Proof of Address here...'
                : 'Click or drag file to upload your Proof of Address'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Accepted formats: PDF, JPG, PNG (Max: 5MB)
            </p>
          </div>
          {formData.proofOfAddress && (
            <p className="text-sm mt-2 text-green-700">
              ✅ {formData.proofOfAddress.name} (
              {(formData.proofOfAddress.size / 1024).toFixed(2)} KB)
            </p>
          )}
          {proofOfAddressError && (
            <p className="text-sm text-red-600 mt-1">{proofOfAddressError}</p>
          )}
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="space-y-3">
        <h4 className="text-xl font-semibold text-primary">
          Terms & Conditions
        </h4>
        <label className="flex items-start gap-2 text-gray-700">
          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={handleTermsChange}
            className="mt-1"
          />
          <span>
            I accept the{' '}
            <a
              href="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Terms and Conditions
            </a>
          </span>
        </label>
      </div>

      {/* POPI */}
      <div className="space-y-3">
        <h4 className="text-xl font-semibold text-primary">POPI Declaration</h4>
        <label className="flex items-start gap-2 text-gray-700">
          <input
            type="checkbox"
            checked={formData.popiAccepted}
            onChange={handlePopiChange}
            className="mt-1"
          />
          <span>I accept the POPI declaration</span>
        </label>
      </div>
    </div>
  );
};

export default Step7UploadFiles;
