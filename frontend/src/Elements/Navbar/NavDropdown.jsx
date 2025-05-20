import { FaChevronDown } from "react-icons/fa";

const NavDropdown = ({ link, isOpen, handleDropdown }) => {
  return (
    <div className="relative group">
      <button
        onClick={() => handleDropdown(link.name)}
        className={`flex text-xs uppercase items-center space-x-1 font-medium duration-300 ${
          isOpen ? "text-amber-700" : "text-gray-900 hover:text-amber-600"
        }`}
      >
        <span>{link.name}</span>
        <FaChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-10">
          {link.dropdown.map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
