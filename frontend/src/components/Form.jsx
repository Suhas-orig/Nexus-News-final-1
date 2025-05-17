import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator.jsx";
import AuthHeader from "../components/AuthHeader.jsx"; // Import the new header

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 relative bg-transparent">
      {/* Use the new header */}
      <AuthHeader />

      {/* Main Form wrapped on torn-paper image */}
      <form
        onSubmit={handleSubmit}
        className="relative bg-[url('/torn-paper-removebg-preview.png')] bg-cover bg-center bg-no-repeat
                  w-full sm:w-[380px] h-[400px] sm:h-[550px] 
                  p-6 sm:p-8 rounded-xl shadow-md flex flex-col items-center justify-center
                   text-[#3a3835]  z-10"
      >
        <h1 className="text-3xl font-bold mb-4 text-center text-[#42403a] uppercase">{name}</h1>

        <input
          className="w-full px-4 py-2 mb-4 bg-[#f5f2e8]/10 text-[#42423d] rounded-sm border border-[#a58b58]/30 
                    focus:outline-none focus:ring-1 focus:ring-[#a58b58] 
                    placeholder-[#413c3c] transition duration-200 shadow-sm"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />

        <input
          className="w-full px-4 py-2 mb-4 bg-[#f5f2e8]/10 text-[#3b3a37] rounded-sm border border-[#a58b58]/30 
                    focus:outline-none focus:ring-1 focus:ring-[#a58b58] 
                    placeholder-[#3b3636] transition duration-200 shadow-sm"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        {loading && <LoadingIndicator />}

        {/* Submit Button */}
        <button
          type="submit"
          className="relative w-full px-6 py-2 mb-2 text-[#3b3a38] text-sm uppercase tracking-widest font-semibold 
                    bg-[#f5f2e8]/10 border border-[#a58b58]/30 
                    hover:bg-[#f5f2e8]/20 hover:border-[#a58b58] hover:text-[#0f0f0f]
                    transition duration-200 ease-in-out rounded-sm shadow-sm"
        >
          {name}
        </button>

      </form>
    </div>
  );
}

export default Form;
