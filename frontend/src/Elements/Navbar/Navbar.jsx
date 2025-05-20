import { useState } from "react";
import {
  FaChevronDown,
  FaSearch,
  FaUserPlus,
} from "react-icons/fa";
import { IoGridSharp, IoGridOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import SearchOverlay from "./SearchOverlay";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

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
    { name: "Talk to us", href: "#talk-to-us" },
    { name: "Loans", href: "#loans" },
    { name: "Investors", href: "#investors" },
    { name: "News & Updates", href: "#investors" },
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
                  <div key={link.name} className="relative group">
                    <button
                      onClick={() => handleDropdown(link.name)}
                      className="flex text-xs uppercase items-center space-x-1 text-gray-700 hover:text-blue-700 font-medium"
                    >
                      <span>{link.name}</span>
                      <FaChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === link.name && (
                      <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-10">
                        {link.dropdown.map((item) => (
                          <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 text-xs uppercase hover:text-blue-700 font-medium"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>

            {/* Buttons - visible on all screens now */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setShowSearch(true)}
                className="text-black rounded-full hover:text-blue-600"
                title="Search"
              >
                <FaSearch />
              </button>

              {/* Login Button */}
              <button
                className="text-black font-semibold md:border border-black px-3 py-1 rounded-full flex items-center gap-2 text-sm"
                title="Login"
              >
                <FiUser />
                <span className="font-normal hidden md:block">Login</span>
              </button>

              {/* Join Us */}
              <button className="md:border md:border-gray-800 text-gray-800 px-2 py-1 rounded-full hover:text-blue-600 transition flex items-center gap-2 text-sm">
               
                <FaUserPlus className="text-white bg-gray-800 p-1 text-xl rounded-full" />
                <span className="font-normal hidden md:block">Join Us</span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <IoGridOutline className="w-6 h-6" />
                ) : (
                  <IoGridSharp className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
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
