import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

const SearchOverlay = ({ onClose }) => {
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full bg-white z-50 border-b border-gray-300">
      <div
        ref={containerRef}
        className="flex flex-col px-4 py-3 sm:px-6"
      >
        <div className="flex items-center justify-between">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="flex-1 mr-3 p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-blue-600"
            aria-label="Close search"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Dropdown with results */}
        {query.trim() !== "" && (
          <div className="mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-auto text-gray-700 text-sm">
            <div className="px-4 py-2">No Matching results</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
