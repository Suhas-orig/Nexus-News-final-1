import React, { useState } from "react";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#f5f2e8] shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Header + Page Content */}
      <div className="flex flex-col min-h-screen">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
