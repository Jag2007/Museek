import React from "react";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";

export default function LogoutConfirmation({ isVisible, onConfirm, onCancel }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-[#1a1e2a] via-[#1e2330] to-[#1a1e2a] rounded-2xl p-6 w-full max-w-md mx-4 border border-[#2a3142] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
              Confirm Logout
            </h2>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-[#222733]"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <FaSignOutAlt className="text-white text-xl" />
            </div>
            <div>
              <p className="text-white text-lg font-semibold">
                Are you sure you want to logout?
              </p>
              <p className="text-gray-400 text-sm mt-1">
                You'll need to sign in again to access your account.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-[#222733] to-[#2a3142] hover:from-[#2a3142] hover:to-[#323a4a] text-gray-100 rounded-xl font-semibold transition-all duration-300 border border-[#3a4152] hover:border-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaSignOutAlt className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
