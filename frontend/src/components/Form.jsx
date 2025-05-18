import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import AuthHeader from "../components/AuthHeader.jsx";
import SimpleLoader from "./SimpleLoader.jsx";

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
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <SimpleLoader />;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 ">
      <AuthHeader />

      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-[380px] mt-6 p-6 sm:p-8 rounded-2xl border border-[#a0522d] bg-[#faf8f7] 
        shadow-[4px_4px_8px_rgba(168,83,63,0.4)] 
        hover:shadow-[6px_6px_12px_rgba(160,70,55,0.6)] 
        transition-shadow duration-300 font-['Special_Elite']
         text-[#2b2b2b] z-10 relative overflow-hidden"

      >
        <h1 className="text-3xl font-bold mb-6 text-center uppercase tracking-wider">
          {name}
        </h1>

        <label className="block text-sm mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Codename..."
          required
          className="w-full px-4 py-2 mb-4 bg-[#f5f2e8]/30 text-[#2b2b2b] border border-[#a58b58]/30 
                     focus:outline-none focus:ring-1 focus:ring-[#a58b58] rounded-sm shadow-sm placeholder-[#5a544d]"
        />

        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Secret Pass..."
          required
          className="w-full px-4 py-2 mb-6 bg-[#f5f2e8]/30 text-[#2b2b2b] border border-[#a58b58]/30 
                     focus:outline-none focus:ring-1 focus:ring-[#a58b58] rounded-sm shadow-sm placeholder-[#5a544d]"
        />

          <button
            type="submit"
            className="group relative inline-block w-full overflow-hidden border border-[#b83a3a] px-8 py-3 focus:ring-2 focus:outline-none"
          >
            <span
              className="absolute inset-x-0 top-0 h-[2px] bg-[#b83a3a] transition-all duration-300 group-hover:h-full"
            ></span>

            <span
              className="relative text-sm font-semibold text-[#b83a3a] transition-colors duration-300 group-hover:text-white font-['Special_Elite'] tracking-wider uppercase"
            >
              {name}
            </span>
          </button>


      </form>
    </div>
  );
}

export default Form;
