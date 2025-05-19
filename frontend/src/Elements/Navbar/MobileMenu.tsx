import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaUserPlus } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

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
  openDropdown,
  handleDropdown,
  onClose,
}: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateIn(true), 10);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        onClose(); // Close menu if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-30 z-40" />

      {/* Slide-in Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${
          animateIn ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 pt-6 pb-6 space-y-4">
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
            <button
                className="text-black font-semibold border border-black px-4 py-1 rounded-full flex items-center gap-2"
                title="Login"
              >
                <FiUser />
                <span className="font-normal">Login</span>
              </button>
            <button className="border text-gray-600 px-4 py-1 rounded-full hover:text-blue-600 transition flex items-center gap-2">
              Join Us
              <FaUserPlus className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
