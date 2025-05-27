import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUserPlus } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  navLinks: {
    name: string;
    href?: string;
    dropdown?: string[];
  }[];
  openDropdown: string | null;
  handleDropdown: (name: string) => void;
  onClose: () => void;
}

const MobileMenu = ({
  navLinks,
  onClose,
}: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState<null | string>(null); // active submenu

  useEffect(() => {
    setTimeout(() => setAnimateIn(true), 10);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleBack = () => setActiveMenu(null);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 z-40" />

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${
          animateIn ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 pt-6 pb-6 space-y-4">
          {/* Submenu view */}
          {activeMenu ? (
            <div className="space-y-2">
              <button
                onClick={handleBack}
                className="text-sm text-gray-600 flex items-center gap-2 mb-4"
              >
                <FaChevronLeft />
                Back
              </button>

              <h3 className="text-md font-semibold text-gray-800 mb-2">
                {activeMenu}
              </h3>

              {navLinks
                .find((link) => link.name === activeMenu)
                ?.dropdown?.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-sm text-gray-600"
                  >
                    {item}
                  </a>
                ))}
            </div>
          ) : (
            // Main navigation view
            <div className="space-y-3">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <button
                    key={link.name}
                    onClick={() => setActiveMenu(link.name)}
                    className="w-full text-left text-gray-700 font-medium flex justify-between items-center"
                  >
                    {link.name}
                    <FaChevronRight className="w-4 h-4 inline" />
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href || "/"}
                    className="block text-gray-700 font-medium"
                    onClick={onClose}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          )}

          {/* Bottom buttons */}
          {!activeMenu && (
            <div className="pt-6 flex flex-col gap-3">
              <button
                onClick={() => window.location.href = "https://admin.go-up-northstar.co.za/"}
                className="w-full text-black font-semibold border border-black px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-gray-900 hover:text-white transition"
                title="Login"
              >
                <FiUser />
                <span>Login</span>
              </button>

              <Link
                to="/join-us"
                onClick={onClose}
                className="w-full border border-gray-900 text-gray-900 px-4 py-2 rounded-full hover:bg-amber-600 hover:text-white hover:border-amber-600 transition flex items-center justify-center gap-2 font-semibold"
              >
                <FaUserPlus className="text-base" />
                Join Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
