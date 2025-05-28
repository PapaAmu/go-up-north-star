import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Application Submitted!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for applying. Your account application has been received and is under review.
          We’ll be in touch shortly with the next steps.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
