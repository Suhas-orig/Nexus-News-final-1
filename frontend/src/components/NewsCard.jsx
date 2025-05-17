import { useState } from "react";
import SaveButton from "./SaveButton";

const NewsCard = ({ article }) => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/scraper/summarize/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: article.link }),
      });

      const data = await response.json();
      setSummary(data.summary || "No summary available.");
    } catch (error) {
      console.error("Error fetching summary", error);
      setSummary("Failed to fetch summary.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fffef9] border border-[#dfd3c3] rounded-2xl p-6 shadow-[4px_4px_0px_#b6a48e] hover:shadow-[6px_6px_0px_#a49585] transition-shadow duration-300 font-['Special_Elite'] text-[#2b2b2b] flex flex-col">
      <h3 className="text-xl mb-4 leading-snug tracking-wide font-bold">{article.title}</h3>

      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-[#c05621] hover:text-[#a1441c] font-semibold underline underline-offset-4 mb-4 transition-colors text-sm"
      >
        Read Full Article
      </a>

      <button
        onClick={handleSummarize}
        disabled={loading}
        className="w-full bg-[#f5f2e8]/30 border border-[#a58b58]/40 text-[#3a3835] text-sm font-semibold 
                   py-2.5 rounded-sm transition duration-300 ease-in-out hover:bg-[#f5f2e8]/50 hover:text-[#0f0f0f] 
                   disabled:opacity-60 mb-4"
      >
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      <SaveButton article={article} className="mb-4" />

      {summary && (
        <div className="mt-auto p-3 bg-[#e8e4d9]/40 rounded-md border border-[#a58b58]/25 text-sm text-[#5a3f2c]">
          <h4 className="font-semibold mb-2">Summary:</h4>
          <p className="text-[#2f2f2f] leading-relaxed">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default NewsCard;
