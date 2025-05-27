import { useState, useEffect } from "react";

const ApplyAccountModal = ({ open, onClose }) => {
  const [idType, setIdType] = useState("id");
  const [files, setFiles] = useState([]);
  const [fileType, setFileType] = useState("id");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFiles([...files, { file, type: fileType }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or submission logic here
    alert("Application submitted!");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-8">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-3xl relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-amber-800 mb-6">
          Open New Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Names</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                placeholder="e.g. 0712345678"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">ID Type</label>
              <select
                value={idType}
                onChange={(e) => setIdType(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="id">South African ID</option>
                <option value="passport">Passport</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                {idType === "id" ? "13-digit ID Number" : "Passport Number"}
              </label>
              <input
                type="text"
                required
                pattern={idType === "id" ? "\\d{13}" : ".{1,20}"}
                maxLength={idType === "id" ? 13 : 20}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Upload Documents</h3>
            <div className="grid md:grid-cols-2 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium mb-1">Document Type</label>
                <select
                  value={fileType}
                  onChange={(e) => setFileType(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                >
                  <option value="id">ID Copy</option>
                  <option value="proof">Proof of Address</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Upload File</label>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="w-full"
                />
              </div>
            </div>

            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-sm font-semibold text-gray-700">Uploaded Files:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {files.map((f, i) => (
                    <li key={i}>
                      {f.file.name} ({f.type === "id" ? "ID Copy" : "Proof of Address"})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2.5 rounded-md hover:bg-amber-700 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyAccountModal;
