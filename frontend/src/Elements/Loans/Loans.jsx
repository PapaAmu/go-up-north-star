import React from "react";
import { Helmet } from "react-helmet-async";

const Loans = () => {
  return (
    <>
      <Helmet>
        <title>LOANS | Go Up North Star</title>
        <meta
          name="description"
          content="Discover inclusive banking designed for our community."
        />
      </Helmet>
      <section className="bg-white text-gray-800 px-4 py-12 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-amber-800">Loans</h1>
            <p className="text-gray-600 mt-2">
              Flexible loan options tailored for individuals and community
              groups.
            </p>
          </div>

          {/* Personal Lending Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Personal Lending
            </h2>
            <p className="mb-4">
              Our personal loans are designed to support your individual
              financial goals — whether it’s for education, medical emergencies,
              home improvements, or unplanned expenses. We offer competitive
              rates, flexible terms, and a simple application process.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Loan amounts from R1,000 to R100,000</li>
              <li>Flexible repayment terms from 3 to 36 months</li>
              <li>Fixed interest rates with no hidden fees</li>
              <li>Credit life insurance included</li>
              <li>Quick approval turnaround (within 24–48 hours)</li>
              <li>Direct deposit into your account</li>
            </ul>
            <div className="text-center">
              <a
                href="/apply"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-3 rounded-full transition"
              >
                Apply for a Personal Loan
              </a>
            </div>
          </div>

          {/* Group Lending Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Group Lending
            </h2>
            <p className="mb-4">
              Group lending empowers communities by offering credit to members
              of informal savings groups or cooperatives. These loans promote
              shared financial responsibility and encourage entrepreneurship and
              economic resilience.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Designed for registered savings groups or stokvels</li>
              <li>Loan amounts from R5,000 to R500,000</li>
              <li>Group liability ensures joint responsibility</li>
              <li>Lower interest rates than individual loans</li>
              <li>
                Financial literacy and group management workshops available
              </li>
              <li>Disbursement can be done in tranches or lump sums</li>
            </ul>
            <div className="text-center">
              <a
                href="/group-loans"
                className="inline-block bg-lime-700 hover:bg-lime-800 text-white font-medium px-6 py-3 rounded-full transition"
              >
                Learn About Group Lending
              </a>
            </div>
          </div>

          {/* FAQs or Highlights */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              General Requirements:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Valid South African ID or Passport</li>
              <li>Proof of income (3 months payslips or bank statements)</li>
              <li>Proof of residence</li>
              <li>
                For group lending: registered constitution and member list
              </li>
            </ul>

            <p className="text-gray-700">
              Whether you're managing your household or growing your community
              initiative, Go Up North Star is here to help you succeed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loans;
