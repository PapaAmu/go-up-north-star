import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoGridSharp, IoGridOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import SearchOverlay from "./SearchOverlay";
import MobileMenu from "./MobileMenu";
import NavDropdown from "./NavDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  const navLinks = [
    {
      name: "Personal",
      dropdown: ["Savings", "Accounts", "Mobile Banking"],
    },
    {
      name: "Business",
      dropdown: ["SME Services", "Business Loans", "Merchant Tools"],
    },
    { name: "Talk to us", href: "/talk-to-us" },
    { name: "Loans", href: "/money-loan" },
    { name: "Investors", href: "/investing" },
    { name: "News & Updates", href: "/news-and-updates" },
  ];

  return (
    <div className="py-2">
      <nav className="bg-white sticky top-0 z-50">
        {showSearch && <SearchOverlay onClose={() => setShowSearch(false)} />}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex border-b border-gray-300 justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Go Up North Star Logo"
                className="h-20 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center space-x-6">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <NavDropdown
                    key={link.name}
                    link={link}
                    isOpen={openDropdown === link.name}
                    handleDropdown={handleDropdown}
                  />
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-xs uppercase font-medium duration-300 hover:underline ${
                      currentPath === link.href
                        ? "text-amber-700"
                        : "text-gray-900 hover:text-amber-600"
                    }`}
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={() => setShowSearch(true)}
                className="text-gray-900"
                title="Search"
              >
                <GoSearch className="text-2xl md:text-gray-950 hover:text-amber-600 duration-300 hover:scale-110 text-amber-700 mb-1.5 md:mb-0" />
              </button>

              <button
                className="group text-gray-900 hidden font-semibold border hover:scale-110 duration-500 border-gray-900 px-3 py-1 rounded-full md:flex items-center gap-2 text-sm transition hover:bg-amber-600 hover:border-amber-600 hover:text-white"
                title="Login"
              >
                <FiUser className="transition-transform duration-300 group-hover:scale-110" />
                <span className="font-normal hidden md:block">Login</span>
              </button>

              <button className="group hidden md:flex items-center gap-2 text-sm hover:scale-110 border border-gray-900 text-gray-900 px-2 py-1 rounded-full transition duration-500 hover:bg-amber-600 hover:text-white hover:border-amber-600">
                <FaUserPlus className="text-white bg-gray-900 p-1 hover:bg-white hover:text-gray-900 text-xl rounded-full transition-transform duration-300 group-hover:scale-105" />
                <span className="font-normal hidden md:block">Join Us</span>
              </button>

              {/* Mobile Hamburger */}
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? (
                    <IoGridOutline className="w-6 h-6 text-amber-700" />
                  ) : (
                    <IoGridSharp className="w-6 h-6 text-amber-700" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <MobileMenu
            navLinks={navLinks}
            openDropdown={openDropdown}
            handleDropdown={handleDropdown}
            onClose={() => setIsOpen(false)}
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;
