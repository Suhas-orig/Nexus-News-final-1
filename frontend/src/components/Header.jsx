import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Edit2 } from "lucide-react";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-[#f7f1e1] bg-opacity-95 border-b border-[#d6c6b4] px-6 py-4 flex items-center justify-between font-['Special_Elite'] shadow-sm">
      
      {/* Sidebar toggle */}
      <button
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
        className="text-[#9c6b30] hover:text-[#7c5022] transition-transform hover:scale-110"
      >
        {isSidebarOpen ? (
          <X size={28} strokeWidth={2.5} />
        ) : (
          <Menu size={28} strokeWidth={2.5} />
        )}
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold text-[#3a3835] tracking-widest select-none cursor-default">
        Nexus News
      </h1>

      {/* Notes button */}
      <button
        onClick={() => navigate("/SavedArticles")}
        aria-label="Go to Notes"
        className="text-[#9c6b30] hover:text-[#7c5022] transition-transform hover:scale-110"
      >
        <Edit2 size={26} strokeWidth={2.5} />
      </button>
    </header>
  );
};

export default Header;
