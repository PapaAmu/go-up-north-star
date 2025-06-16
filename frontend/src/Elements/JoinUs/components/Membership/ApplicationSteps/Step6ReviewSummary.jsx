import useMembershipFormStore from '../../../../../Store/useMembershipFormStore';

const Step6ReviewSummary = () => {
  const { formData } = useMembershipFormStore();

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-4 border-b py-2">
        <p className="px-3 py-1 text-2xl rounded-full bg-primary">6</p>
        <h2 className="text-3xl font-semibold text-amber-800">
          Review & Confirm
        </h2>
      </div>

      <p className="text-center text-amber-600">
        Please confirm that all your details are correct before submitting.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm border p-4">
        <div>
          <h3 className="text-xl font-bold text-primary mb-1 uppercase">
            Personal Information
          </h3>
          <p>
            <strong>Name:</strong> {formData.firstName} {formData.lastName}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>ID Type:</strong> {formData.idType}
          </p>
          <p>
            <strong>ID Number:</strong> {formData.idNumber}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-1 uppercase">
            Shares & Savings
          </h3>
          <p>
            <strong>Shares:</strong> R {formData.shares}
          </p>
          <p>
            <strong>Monthly Savings:</strong> R {formData.monthlySavings}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-1 uppercase">
            Additional Details
          </h3>
          <p>
            <strong>Qualification:</strong> {formData.qualification}
          </p>
          <p>
            <strong>Physical Address:</strong> {formData.physicalAddress}
          </p>
          <p>
            <strong>Postal Address:</strong> {formData.postalAddress}
          </p>
          <p>
            <strong>Invited By:</strong> {formData.inviterName || 'N/A'}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-1 uppercase">
            Beneficiary Details
          </h3>
          {formData.beneficiary.firstName ? (
            <>
              <p>
                <strong>Name:</strong> {formData.beneficiary.firstName}{' '}
                {formData.beneficiary.lastName}
              </p>
              <p>
                <strong>ID Number:</strong> {formData.beneficiary.idNumber}
              </p>
              <p>
                <strong>Relationship:</strong>{' '}
                {formData.beneficiary.relationship}
              </p>
              <p>
                <strong>Phone:</strong> {formData.beneficiary.phone}
              </p>
              <p>
                <strong>Email:</strong> {formData.beneficiary.email}
              </p>
            </>
          ) : (
            <p className="text-gray-500 italic">
              No beneficiary information provided.
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 p-3 border border-amber-500 bg-amber-50 rounded text-sm text-amber-800">
        If all information is correct, click <strong>Next</strong> to proceed to
        uploading your documents and complete membership application.
      </div>
    </div>
  );
};

export default Step6ReviewSummary;
