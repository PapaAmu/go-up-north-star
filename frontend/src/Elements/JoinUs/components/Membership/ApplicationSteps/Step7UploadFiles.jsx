import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import useMembershipFormStore from '../../../../../Store/useMembershipFormStore';

const Step7UploadFiles = ({ setStep7Valid }) => {
  const { formData, updateFormData } = useMembershipFormStore();
  const [idCopyError, setIdCopyError] = useState(null);
  const [proofOfAddressError, setProofOfAddressError] = useState(null);

  const onDropIdCopy = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
        updateFormData({ idCopy: file });
        setIdCopyError(null);
      } else {
        setIdCopyError('Only PDF and image files are allowed');
      }
    }
  };

  const onDropProofOfAddress = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
        updateFormData({ proofOfAddress: file });
        setProofOfAddressError(null);
      } else {
        setProofOfAddressError('Only PDF and image files are allowed');
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
    <div className="space-y-4">
      <div className="flex justify-center gap-4 border-b py-2">
        <p className="px-3 py-1 text-2xl rounded-full bg-primary">7</p>
        <h2 className="text-3xl font-semibold text-amber-800">
          Upload Documents
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg">
          <h3 className="text-xl font-bold text-primary mb-1">ID Copy</h3>
          <div
            {...getIdCopyRootProps()}
            className={`border-2 border-dashed p-8 rounded-lg text-center ${
              isDragActiveIdCopy ? 'bg-gray-100' : 'bg-white'
            }`}
          >
            <input {...getIdCopyInputProps()} />
            {isDragActiveIdCopy ? (
              <p className="text-lg">Drop the ID copy here ...</p>
            ) : (
              <p className="text-lg">
                Drag 'n' drop ID copy here, or click to select file
              </p>
            )}
          </div>
          {formData.idCopy && (
            <p>
              ID Copy: {formData.idCopy.name} (
              {(formData.idCopy.size / 1024).toFixed(2)} KB)
            </p>
          )}
          {idCopyError && <p style={{ color: 'red' }}>{idCopyError}</p>}
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="text-xl font-bold text-primary mb-1">
            Proof of Address
          </h3>
          <div
            {...getProofOfAddressRootProps()}
            className={`border-2 border-dashed p-8 rounded-lg text-center ${
              isDragActiveProofOfAddress ? 'bg-gray-100' : 'bg-white'
            }`}
          >
            <input {...getProofOfAddressInputProps()} />
            {isDragActiveProofOfAddress ? (
              <p className="text-lg">Drop the Proof of Address here ...</p>
            ) : (
              <p className="text-lg">
                Drag 'n' drop Proof of Address here, or click to select file
              </p>
            )}
          </div>
          {formData.proofOfAddress && (
            <p>
              Proof of Address: {formData.proofOfAddress.name} (
              {(formData.proofOfAddress.size / 1024).toFixed(2)} KB)
            </p>
          )}
          {proofOfAddressError && (
            <p style={{ color: 'red' }}>{proofOfAddressError}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-primary">
          Terms and Conditions
        </h2>
        <p>Please read and accept our terms and conditions.</p>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={handleTermsChange}
          />
          I accept the terms and conditions
        </label>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-primary">POPI Declaration</h2>
        <p>Please read and accept our POPI declaration.</p>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.popiAccepted}
            onChange={handlePopiChange}
          />
          I accept the POPI declaration
        </label>
      </div>
    </div>
  );
};

export default Step7UploadFiles;
