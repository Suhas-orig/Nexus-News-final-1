import React from "react";
import { useNavigate } from "react-router-dom";

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
        <h2 className="text-xl font-semibold text-[#3a3835] mb-4">Select News Source</h2>

        <button
          onClick={() => handleNavigate("/")}
          className="w-full text-left px-4 py-2 mb-2 bg-[#f0e9d6] rounded-md hover:bg-[#e1d2b8] text-[#3a3835] transition-colors"
        >
          Times of India
        </button>

        <button
          onClick={() => handleNavigate("/ndtv-news")}
          className="w-full text-left px-4 py-2 mb-2 bg-[#f0e9d6] rounded-md hover:bg-[#e1d2b8] text-[#3a3835] transition-colors"
        >
          NDTV
        </button>

        {/* NEW Hindu News button */}
        <button
          onClick={() => handleNavigate("/hindu-news")}
          className="w-full text-left px-4 py-2 bg-[#f0e9d6] rounded-md hover:bg-[#e1d2b8] text-[#3a3835] transition-colors"
        >
          The Hindu
        </button>
      </div>

      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 bg-[#f0e9d6] rounded-md hover:bg-[#e1d2b8] text-[#3a3835] transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
