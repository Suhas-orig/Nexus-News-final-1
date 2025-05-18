import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Discussion() {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  const [note, setNote] = useState("");

  // If no article was passed, redirect back to saved articles
  if (!article) {
    navigate("/saved-articles"); // or wherever your saved articles page is
    return null;
  }

  const formattedDate = new Date(article.saved_at).toLocaleDateString("en-US");

  const handlePost = () => {
    // Placeholder for posting logic
    alert(`Posting note: "${note}"\n(Feature coming soon!)`);
    setNote("");
  };

  return (
    <div className="min-h-screen bg-[#fffef9] p-8 font-['Special_Elite'] text-[#3a3835] max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Discussion</h2>

      <div className="border border-[#dfd3c3] p-6 rounded-2xl shadow-[4px_4px_0px_#b6a48e] mb-8">
        <h3 className="text-2xl mb-2">{article.title}</h3>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c05621] underline font-semibold mb-2 inline-block"
        >
          Read Full Article
        </a>
        <p className="italic text-[#6c5b4c]">Source: {article.source}</p>
        <p className="italic text-[#6c5b4c]">Saved on: {formattedDate}</p>
      </div>

      <textarea
        className="w-full h-32 p-4 border border-[#dfd3c3] rounded-md resize-none mb-4 focus:outline-none focus:ring-2 focus:ring-[#9c6b30]"
        placeholder="Write your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button
        onClick={handlePost}
        className="bg-[#b83a3a] hover:bg-[#922727] text-white px-6 py-3 rounded-md shadow font-semibold transition-colors"
      >
        Post Note
      </button>
    </div>
  );
}
