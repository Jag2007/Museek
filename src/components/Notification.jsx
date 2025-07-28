import React, { useEffect } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

export default function Notification({
  message,
  type = "success",
  isVisible,
  onClose,
}) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const icon = type === "success" ? <FaCheckCircle /> : <FaTimes />;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div
        className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-sm`}
      >
        <span className="text-xl">{icon}</span>
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-auto text-white hover:text-gray-200 transition-colors"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
