import React from "react";
import { useNavigate } from "react-router-dom";

const AuthHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f7f5e9] bg-opacity-95 border-b border-[#b6a48e] shadow-md px-4 py-3 flex items-center justify-center">
      <div className="text-center">
        <h1
          onClick={() => navigate("/")}
          className="text-4xl sm:text-5xl tracking-[0.2em] cursor-pointer text-[#2b2b2b] font-['Special_Elite'] select-none"
        >
          . . . Nexus News . . .
        </h1>
        <p className="text-sm tracking-widest uppercase text-[#5e5e5e] mt-1 font-semibold font-['Special_Elite']">
          - Chasing headlines across the wire -
        </p>
      </div>
    </header>
  );
};

export default AuthHeader;
