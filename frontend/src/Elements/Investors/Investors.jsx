import React from "react";
import { Helmet } from "react-helmet-async";

const Investors = () => {
  return (
    <>
      <Helmet>
        <title>MEMBERSHIP | Go Up North Star</title>
        <meta
          name="description"
          content="Discover inclusive banking designed for our community."
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
              Become a part-owner of a growing cooperative bank and share in the
              wealth we create together.
            </p>
          </div>

          {/* About Investment */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why Invest with Us?</h2>
            <p className="mb-4">
              Go Up North Star is a member-owned cooperative financial
              institution. Investing in our bank means you’re not just earning
              returns — you’re contributing to a sustainable financial ecosystem
              that uplifts communities and supports inclusive economic growth.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Earn annual dividends based on the co-operative’s performance.
              </li>
              <li>
                Be involved in key decisions through your voting rights as a
                member.
              </li>
              <li>Support ethical, people-centered banking practices.</li>
              <li>Access exclusive investment insights and reports.</li>
              <li>Network with like-minded investors and business leaders.</li>
            </ul>
          </div>

          {/* Membership Info */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Membership Criteria</h2>
            <p className="mb-4">
              To become an investor, you must be a registered member of Go Up
              North Star. Our members are our shareholders — each with a voice
              and a stake in our success.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Minimum age: 18 years</li>
              <li>
                South African ID or valid passport (foreign investors welcome)
              </li>
              <li>Proof of address (not older than 3 months)</li>
              <li>Completed membership application form</li>
              <li>Proof of payment of the joining fee</li>
            </ul>
          </div>

          {/* Joining Procedure */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How to Join</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                Complete the investor membership application form (available
                online or at any branch).
              </li>
              <li>
                Submit the required documents (ID, proof of address, etc.).
              </li>
              <li>
                Pay the once-off joining fee of{" "}
                <strong className="text-amber-800">R25,000</strong>.
              </li>
              <li>
                Await confirmation of approval and receipt of your share
                certificate.
              </li>
              <li>
                Start enjoying your rights and benefits as an investor-member.
              </li>
            </ol>
          </div>

          {/* Financial Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              What Your R25,000 Gets You
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Membership in the co-operative with full shareholder rights
              </li>
              <li>Annual financial reports and investor briefings</li>
              <li>Eligibility for dividend payouts and profit-sharing</li>
              <li>Opportunities to participate in strategic growth projects</li>
              <li>Access to board election and governance participation</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="/apply-investor"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-3 rounded-full transition"
            >
              Apply to Become an Investor
            </a>
            <p className="mt-4 text-sm text-gray-600">
              For further details, contact our Investor Relations team at{" "}
              <a
                href="mailto:invest@go-up-northstar.co.za"
                className="text-blue-600 underline"
              >
                invest@go-up-northstar.co.za
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Investors;
