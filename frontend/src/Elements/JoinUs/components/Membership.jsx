const Membership = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Become a Member
      </h2>
      <p className="text-gray-700 mb-4">
        Membership at Go Up North Star means investing in your future and your
        community. Members enjoy profit-sharing, voting rights, and special
        financial benefits.
      </p>

      <h3 className="font-semibold text-lg text-gray-800 mt-6 mb-2">
        Requirements
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Must hold a Go Up North Star account</li>
        <li>18 years or older</li>
        <li>Minimum of 10 shares (R100/share)</li>
      </ul>

      <h3 className="font-semibold text-lg text-gray-800 mt-6 mb-2">
        How to Join
      </h3>
      <ol className="list-decimal list-inside text-gray-700 space-y-1">
        <li>Login to your online banking profile</li>
        <li>Navigate to the “Membership” section</li>
        <li>Select share quantity and complete purchase</li>
        <li>Receive your Membership Certificate</li>
      </ol>
    </div>
  );
};

export default Membership;
