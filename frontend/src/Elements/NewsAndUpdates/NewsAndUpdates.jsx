import React from "react";
import { Helmet } from "react-helmet-async";

const newsUpdates = [
  {
    title: "Go Up North Star Launches New Mobile App",
    date: "May 15, 2025",
    summary:
      "Our new mobile app brings co-operative services closer to you. Enjoy secure member access, savings updates, and digital convenience.",
    link: "/news/mobile-app-launch",
  },
  {
    title: "Strong Growth in Member Contributions",
    date: "April 22, 2025",
    summary:
      "We're proud to report a 35% year-over-year increase in member contributions. Your trust strengthens our shared co-operative future.",
    link: "/news/contribution-growth",
  },
  {
    title: "Community Upliftment Drive – Phase 2 Begins",
    date: "March 30, 2025",
    summary:
      "Phase 2 of our community program focuses on empowering local youth with financial literacy and entrepreneurial skills.",
    link: "/news/community-drive-phase2",
  },
  {
    title: "Go Up North Star Wins Community Ethics Award",
    date: "February 12, 2025",
    summary:
      "We’re honored to be recognized for our commitment to fairness, transparency, and putting our members first.",
    link: "/news/ethics-award",
  },
];

const NewsAndUpdates = () => {
  return (
    <>
      <Helmet>
        <title>NEWS & UPDATES | Go Up North Star</title>
        <meta
          name="description"
          content="Get the latest news, community updates, and progress highlights from Go Up North Star Co-operative."
        />
      </Helmet>

      <section className="bg-white px-4 py-12 md:px-20 text-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Page Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-800">
              News & Updates
            </h1>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Stay informed about our latest initiatives, achievements, and how we’re growing together as a co-operative family.
            </p>
          </div>

          {/* Highlighted Feature */}
          <div className="bg-amber-100 border-l-4 border-amber-700 p-6 mb-10 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Latest Highlight</h2>
            <p className="text-lg font-medium text-gray-800">
              <a href="/news/mobile-app-launch" className="hover:underline text-amber-800">
                Go Up North Star Launches New Mobile App
              </a>
            </p>
            <p className="text-sm text-gray-600">May 15, 2025</p>
            <p className="mt-2 text-gray-700">
              Access your savings, track contributions, and stay connected from anywhere. Download our new app on the App Store or Google Play.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsUpdates.map((item, idx) => (
              <div
                key={idx}
                className="border border-amber-300 rounded-lg p-5 hover:shadow-md transition bg-white"
              >
                <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  <a href={item.link} className="hover:underline">
                    {item.title}
                  </a>
                </h3>
                <p className="text-gray-700 mb-3">{item.summary}</p>
                <a
                  href={item.link}
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold mb-2">Subscribe for Updates</h2>
            <p className="text-gray-600 mb-4">
              Be the first to know about co-op developments and community milestones.
            </p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <button
                type="submit"
                className="bg-amber-700 text-white px-6 py-2 rounded-md hover:bg-amber-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsAndUpdates;
