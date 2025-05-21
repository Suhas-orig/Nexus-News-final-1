import React from "react";
import { useNavigate } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa";       // News icon
import { GiSecretBook } from "react-icons/gi";      // Ledger/mystery book
import { FiLogOut } from "react-icons/fi";          // Logout icon

const Sidebar = ({ setIsSidebarOpen }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsSidebarOpen(false); // Collapse after navigation
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/login");
    setIsSidebarOpen(false);
  };

  return (
    <div className="w-64 h-full bg-[#f5f2e8] shadow-md p-4 flex flex-col">
      <div className="flex items-center space-x-4 mb-8">
        <p className="text-lg font-semibold text-[#3a3835]">Username</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#3a3835] mb-4 flex items-center space-x-2">
          <FaNewspaper className="text-[#3a3835]" />
          <span>Select News Source</span>
        </h2>

        <button
          onClick={() => handleNavigate("/")}
          className="w-full text-left px-4 py-2 mb-2 bg-[#f0e9d6] rounded-md hover:bg-[#e1d2b8] text-[#3a3835] transition-colors flex items-center space-x-2"
        >
          <FaNewspaper className="w-5 h-5" />
          <span>Times of India</span>
        </button>

        <button
          onClick={() => handleNavigate("/ndtv-news")}
          className="w-full text-left px-4 py-2 mb-2 bg-[#f0e9d6] rounded-md hover:bg-[#e1d2b8] text-[#3a3835] transition-colors flex items-center space-x-2"
        >
          <FaNewspaper className="w-5 h-5" />
          <span>NDTV</span>
        </button>

        <button
          onClick={() => handleNavigate("/hindu-news")}
          className="w-full text-left px-4 py-2 mb-2 bg-[#f0e9d6] rounded-md hover:bg-[#e1d2b8] text-[#3a3835] transition-colors flex items-center space-x-2"
        >
          <FaNewspaper className="w-5 h-5" />
          <span>The Hindu</span>
        </button>
      </div>

      {/* New Community Section */}
      <div className="mb-8 border-t border-[#dfd3c3] pt-6">
        <h2 className="text-xl font-semibold text-[#7a6e5a] mb-4 uppercase tracking-wide flex items-center space-x-2">
          <GiSecretBook className="text-[#7a6e5a]" />
          <span>The Underground</span>
        </h2>
        <button
          onClick={() => handleNavigate("/threads/thoughts")}
          className="w-full text-left px-4 py-2 bg-[#f0e9d6] rounded-md hover:bg-[#e1d2b8] text-[#7a6e5a] font-semibold transition-colors flex items-center space-x-2"
        >
          <GiSecretBook className="w-5 h-5" />
          <span>The Ledger</span>
        </button>
      </div>

      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 bg-[#f0e9d6] rounded-md hover:bg-[#e1d2b8] text-[#3a3835] transition-colors flex items-center space-x-2"
        >
          <FiLogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
