import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSearch,
  FaUserPlus,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import SearchOverlay from "./SearchOverlay";

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
  ];

  return (
    <nav className="bg-white sticky py-4 top-0 z-50">
      {showSearch && <SearchOverlay onClose={() => setShowSearch(false)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex border-b border-gray-300 justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Go Up North Star Logo"
              className="h-20 w-auto object-contain"
            />
          </a>

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
                    <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-48">
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

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setShowSearch(true)}
              className="text-black rounded-full hover:text-blue-600"
              title="Search"
            >
              <FaSearch />
            </button>
            <button
              className="text-black font-semibold border border-black p-2 rounded-full"
              title="User"
            >
              <FiUser />
            </button>
            <button className="border border-gray-800 text-gray-800 px-2 py-1 rounded-full hover:text-blue-600 transition flex items-center gap-2">
              Open Account
              <FaUserPlus className="text-white bg-gray-800 p-1 text-2xl rounded-full" />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-2 shadow-md">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <button
                  onClick={() => handleDropdown(link.name)}
                  className="flex justify-between w-full text-left text-gray-700 font-medium"
                >
                  {link.name}
                  <FaChevronDown className="w-4 h-4 inline ml-2" />
                </button>
                {openDropdown === link.name && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block text-sm text-gray-600"
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
                className="block text-gray-700 font-medium"
              >
                {link.name}
              </a>
            )
          )}

          <div className="pt-4 flex items-center gap-4">
            <button className="text-gray-600 font-semibold border p-2 rounded-full">
              <FiUser />
            </button>
            <button className="border text-gray-600 px-4 py-1 rounded-full hover:text-blue-600 transition flex items-center gap-2">
              Open Account
              <FaUserPlus className="text-sm" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
