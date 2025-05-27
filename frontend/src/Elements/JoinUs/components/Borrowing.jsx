const Loans = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Apply for a Loan
      </h2>
      <p className="text-gray-700 mb-4">
        Whether you’re growing your business or managing personal needs, our
        loan solutions are flexible, affordable, and community-minded.
      </p>

      <h3 className="font-semibold text-lg text-gray-800 mt-6 mb-2">
        Eligibility
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Active member with a valid account</li>
        <li>Minimum monthly income of R3,000</li>
        <li>3 months’ bank statements</li>
        <li>Good credit standing</li>
      </ul>

      <h3 className="font-semibold text-lg text-gray-800 mt-6 mb-2">
        How to Apply
      </h3>
      <ol className="list-decimal list-inside text-gray-700 space-y-1">
        <li>Visit the Loans page in your dashboard</li>
        <li>Choose loan type and amount</li>
        <li>Upload supporting documents</li>
        <li>Receive approval in 1-3 business days</li>
      </ol>
    </div>
  );
};

export default Loans;
