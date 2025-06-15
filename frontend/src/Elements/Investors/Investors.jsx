import React from "react";
import { Helmet } from "react-helmet-async";

const Investors = () => {
  return (
    <>
      <Helmet>
        <title>MEMBERSHIP | Go Up North Star</title>
        <meta
          name="description"
          content="Become a member of a fast-growing co-operative focused on financial empowerment and shared growth."
        />
      </Helmet>
      <section className="bg-white text-gray-900 px-4 py-12 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-800">
              Invest in Go Up North Star
            </h1>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Become a part-owner of a forward-thinking savings co-operative
              and grow your wealth while uplifting your community.
            </p>
          </div>

          {/* About Investment */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why Join Our Co-operative?</h2>
            <p className="mb-4">
              Go Up North Star is a member-owned savings co-operative dedicated
              to collective financial empowerment and inclusive economic growth.
              When you invest with us, you're not only building your own future,
              but contributing to a sustainable, people-centered financial movement.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Earn returns based on co-operative performance and surplus.</li>
              <li>Participate in governance through democratic voting rights.</li>
              <li>Enjoy transparent, ethical financial practices.</li>
              <li>Receive regular reports and updates on financial health.</li>
              <li>Grow alongside a community of like-minded members.</li>
            </ul>
          </div>

          {/* Membership Info */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Membership Criteria</h2>
            <p className="mb-4">
              To become a member of the Go Up North Star Co-operative,
              you must meet the following requirements:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Have a valid South African ID or passport</li>
              <li>Provide proof of address (not older than 3 months)</li>
              <li>Complete and sign the membership application form</li>
              <li>Pay a non-refundable monthly admin fee of R50</li>
            </ul>
          </div>

          {/* Joining Procedure */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How to Join</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Fill out the co-operative membership application form online/onsite.</li>
              <li>Submit required documents: ID, proof of address, etc.</li>
              <li>Choose your share purchase amount (min. R2,000 up to R25,000).</li>
              <li>Set up your monthly savings contribution (minimum R500).</li>
              <li>Pay the monthly admin fee (R50) and submit proof of payment.</li>
              <li>Receive confirmation and your shareholding certificate.</li>
            </ol>
          </div>

          {/* Financial Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              What Your Investment Means
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Shareholding in a community-driven savings co-operative</li>
              <li>Profit participation based on performance and available surplus</li>
              <li>Access to co-operative reports, elections, and meetings</li>
              <li>Monthly savings flexibility with no upper limit</li>
              <li>A say in the strategic direction of the co-operative</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="/membership/join-us"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-3 rounded-full transition"
            >
              Apply to Become a Member
            </a>
            <p className="mt-4 text-sm text-gray-600">
              For more information, contact our Membership Office at{" "}
              <a
                href="mailto:membership@go-up-northstar.co.za"
                className="text-blue-600 underline"
              >
                membership@go-up-northstar.co.za
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Investors;
