// components/SearchOverlay.jsx
import { FaTimes } from "react-icons/fa";

const SearchOverlay = ({ onClose }) => {
  return (
    <div className="absolute top-0 left-0 w-full bg-white z-50 px-6 py-4 flex items-center justify-between">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 mr-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-blue-600"
        aria-label="Close search"
      >
        <FaTimes className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchOverlay;
