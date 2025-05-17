import React from "react";
import { useNavigate } from "react-router-dom";

const AuthHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#e6e4c9] bg-opacity-90 border-b border-gray-300 px-4 py-4 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-[#363634] tracking-widest">
        Nexus News
      </h1>
    </header>
  );
};

export default AuthHeader;
