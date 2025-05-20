import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <>
      <div className="">
        <motion.footer
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white text-gray-900 pt-16 pb-8 border-t border-gray-400"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Column 1: Logo + Subscribe */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <img
                  src="/logo.png"
                  alt="GoUp North Star Logo"
                  className="h-28 object-contain"
                />
              </div>
              <p className="text-sm mb-4">
                Join our newsletter to stay up to date on features and releases.
              </p>
              <form className="flex items-center bg-gray-950 rounded-full overflow-hidden mb-2 max-w-xs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-amber-700 px-3 mr-1 py-1 text-white hover:text-black rounded-full text-sm hover:bg-amber-400 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-600">
                By subscribing you agree to our{" "}
                <a
                  href="#"
                  className="underline hover:text-amber-500 hover:underline"
                >
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-1">
              <h3 className="uppercase font-semibold mb-4 text-amber-700">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-500 hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="md:col-span-1">
              <h3 className="uppercase font-semibold mb-4 text-amber-700">
                Products
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-500 hover:underline">
                    Personal Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 hover:underline">
                    Business Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 hover:underline">
                    Investing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 hover:underline">
                    Loans
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div className="md:col-span-1">
              <h3 className="uppercase font-semibold mb-4 text-amber-700">
                Company
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-500 hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 hover:underline">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Contact Us */}
            <div className="md:col-span-1">
              <h3 className="uppercase font-semibold mb-4 text-amber-700">
                CONTACT US
              </h3>

              <h4 className="text-sm">123 Street, Location , Gauteng, Midrand 0000</h4>
              <div className="flex gap-4 text-2xl pt-8">
                <a
                  href="#"
                  className="hover:text-amber-500 hover:underline"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="hover:text-amber-500 hover:underline"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="hover:text-amber-500 hover:underline"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t container border-gray-400 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p className="text-black text-xs leading-4">
              © 2025 REALNET WEB SOLUTIONS PTY | All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://realnet-web.co.za/"
                target="_blank"
                className="hover:text-amber-500 text-gray-900 hover:underline"
              >
                About Developers
              </a>
              <a
                href="#"
                className="hover:text-amber-500 text-gray-900 hover:underline"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-amber-500 text-gray-900 hover:underline"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  );
};

export default Footer;
