import React from "react";
import { MdSupportAgent } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const departments = [
  {
    title: "Member Support",
    phone1: "011 123 4567",
    email: "support@go-up-northstar.co.za",
    hours: [
      "Monday–Friday: 7:00 to 19:00",
      "Saturday: 8:00 to 16:00",
      "Sunday: 8:00 to 14:00",
    ],
  },
  {
    title: "Savings Programs",
    phone1: "011 123 4567",
    email: "savings@go-up-northstar.co.za",
    hours: [
      "Monday–Friday: 7:00 to 19:00",
      "Saturday: 8:00 to 16:00",
      "Sunday: 8:00 to 14:00",
    ],
  },
  {
    title: "Contribution & Shareholding",
    phone1: "011 123 4567",
    email: "shares@go-up-northstar.co.za",
    extras: [
      "Submit share purchase request",
      "Upload supporting documents",
      "Track status: 0861 987 654",
    ],
  },
  {
    title: "Community Growth Initiatives",
    phone1: "011 123 4567",
    email: "community@go-up-northstar.co.za",
  },
  {
    title: "Protection & Funeral Plans",
    phone1: "011 123 4567",
    email: "cover@go-up-northstar.co.za",
    hours: ["Monday–Friday: 8:00 – 17:00"],
  },
  {
    title: "Membership Applications",
    phone1: "011 123 4567",
    email: "membership@go-up-northstar.co.za",
    hours: ["Monday–Friday: 8:00 to 19:00", "Weekend closed"],
  },
];

const ContactInfo = () => {
  return (
    <>
      <Helmet>
        <title>CONTACT INFO | Go Up North Star</title>
        <meta
          name="description"
          content="Reach out to our support teams for savings, membership, and community services."
        />
      </Helmet>
      <section className="bg-gradient-to-b from-amber-300 to-amber-900 py-10 px-4 md:px-16">
        {/* Header and Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <h2 className="text-3xl font-bold text-white">Contact Information</h2>
          <div className="flex justify-center md:justify-center">
            <button className="inline-flex items-center gap-2 bg-gray-950 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-lime-400 hover:text-black transition">
              Log A Ticket
              <span className="bg-amber-600 text-white p-2 rounded-full">
                <MdSupportAgent className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-lg">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="border border-amber-600 p-4 rounded-md text-sm text-gray-800 flex flex-col gap-2"
            >
              <h3 className="text-base uppercase font-semibold text-amber-800">
                {dept.title}
              </h3>

              {dept.phone1 && (
                <p>
                  <strong>Tel:</strong> {dept.phone1}
                </p>
              )}
              {dept.phone2 && (
                <p>
                  <strong>Tel:</strong> {dept.phone2}
                </p>
              )}
              {dept.email && (
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-blue-600 underline"
                  >
                    {dept.email}
                  </a>
                </p>
              )}
              {dept.whatsapp && (
                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href={`https://wa.me/${dept.whatsapp.replace(/ /g, "")}`}
                    className="text-blue-600 underline"
                  >
                    {dept.whatsapp}
                  </a>
                </p>
              )}
              {dept.hours && (
                <div>
                  <p className="font-semibold mt-1">Operating hours:</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {dept.hours.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}
              {dept.extras &&
                dept.extras.map((line, i) => (
                  <p key={i} className="text-gray-600">
                    {line}
                  </p>
                ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
