import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ApplyAccountModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    id_type: "id",
    id_number: "",
  });

  const [idCopy, setIdCopy] = useState(null);
  const [poa, setPoa] = useState(null);
  const [readTerms, setReadTerms] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (type === "id") {
      setIdCopy(file);
    } else {
      setPoa(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idCopy || !poa) {
      alert("Both ID Copy and Proof of Address are required.");
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("id_copy", idCopy);
    formData.append("poa", poa);

    try {
      await axios.post("http://localhost:8003/api/applications", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/application-success");
    } catch (error) {
      console.error("Submission failed", error);
      alert("Submission failed. Please try again.");
    }
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
          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Names"
              required
              className="w-full px-4 py-2 border rounded-md"
              onChange={handleChange}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="w-full px-4 py-2 border rounded-md"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (0712345678)"
              pattern="[0-9]{10}"
              required
              className="w-full px-4 py-2 border rounded-md"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded-md"
              onChange={handleChange}
            />
          </div>

          {/* ID Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="id_type"
              value={form.id_type}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="id">South African ID</option>
              <option value="passport">Passport</option>
            </select>
            <input
              type="text"
              name="id_number"
              placeholder={
                form.id_type === "id" ? "13-digit ID Number" : "Passport Number"
              }
              pattern={form.id_type === "id" ? "\\d{13}" : ".{1,20}"}
              maxLength={form.id_type === "id" ? 13 : 20}
              required
              className="w-full px-4 py-2 border rounded-md"
              onChange={handleChange}
            />
          </div>

          {/* Document Upload */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Upload Documents
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Upload ID Copy
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                  onChange={(e) => handleFileUpload(e, "id")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Upload Proof of Address
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                  onChange={(e) => handleFileUpload(e, "poa")}
                />
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="space-y-2 pt-4 text-sm text-gray-700">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={readTerms}
                onChange={() => setReadTerms(!readTerms)}
              />
              I have read and understood the Terms & Conditions
            </label>
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
              />
              I accept the Terms & Conditions
            </label>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2.5 rounded-md hover:bg-amber-700 transition disabled:opacity-50"
              disabled={!(readTerms && acceptTerms)}
            >
              Submit Application
            </button>
            <button
              type="button"
              className="w-full border border-gray-300 text-gray-600 py-2.5 rounded-md hover:bg-gray-100 transition"
              onClick={onClose}
            >
              Cancel Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyAccountModal;
