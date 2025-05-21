import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api";
import VintageLoader from "../components/VintageLoader";

export default function PostArticle() {
  const location = useLocation();
  const navigate = useNavigate();

  // Grab title and link passed from navigation state
  const { title, link } = location.state || {};

  // Redirect back if no article data found (to prevent broken form)
  if (!title || !link) {
    navigate("/threads/thoughts"); // Or wherever your main threads page is
  }

  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!note.trim()) {
      alert("Please enter your note before submitting.");
      return;
    }

    setSubmitting(true);

    try {
      // POST request payload example:
      // { title: "article title", link: "article link", content: "user note" }
      const res = await api.post("/threads/api/posts/", {
        title,
        link,
        content: note.trim(),
      });

      if (res.status === 201) {
        alert("📝 Note posted successfully!");
        navigate("/threads/thoughts"); // Redirect to threads page after posting
      } else {
        alert("Failed to post note.");
      }
    } catch (err) {
      alert("Error posting note: " + err.message);
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start px-6 pt-12 bg-[#fffef9] font-['Special_Elite'] text-[#2b2b2b]">
      <div className="max-w-xl w-full bg-[#f5f1e9] border border-[#dfd3c3] rounded-2xl p-8 shadow-[4px_4px_0px_#b6a48e]">
        <h2 className="text-2xl font-bold mb-6">Post Your Note</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="font-semibold">
            Article Title:
            <input
              type="text"
              value={title}
              readOnly
              className="w-full mt-1 p-2 border border-[#c6b89e] rounded bg-[#e7e2d9] text-[#3a3835]"
            />
          </label>

          <label className="font-semibold">
            Article Link:
            <input
              type="url"
              value={link}
              readOnly
              className="w-full mt-1 p-2 border border-[#c6b89e] rounded bg-[#e7e2d9] text-[#3a3835] underline"
            />
          </label>

          <label className="font-semibold">
            Your Note: <span className="text-red-600">*</span>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={6}
              required
              placeholder="Write your thoughts here..."
              className="w-full mt-1 p-3 border border-[#c6b89e] rounded resize-none text-[#3a3835]"
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className={`mt-4 px-6 py-3 rounded-md font-bold text-white transition-colors ${
              submitting ? "bg-[#a49585] cursor-not-allowed" : "bg-[#6b705c] hover:bg-[#535843]"
            }`}
          >
            {submitting ? "Posting..." : "Post Note"}
          </button>
        </form>
      </div>
    </div>
  );
}
