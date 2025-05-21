// src/components/SaveButton.jsx
import { useState } from "react";
import api from "../api";

const getSourceFromLink = (link) => {
  if (!link) return "Unknown Source";
  if (link.includes("timesofindia")) return "Times of India";
  if (link.includes("ndtv")) return "NDTV";
  return "oops";
};

const SaveButton = ({ article }) => {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.post("/savednews/api/save/", {
        title: article.title,
        link: article.link,
        source: article.source || getSourceFromLink(article.link),
      });
      setSaved(true);
    } catch (error) {
      console.error("Save failed", error);
      alert("Failed to save article. Try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <button
      onClick={handleSave}
      disabled={saving || saved}
      className="w-full bg-[#f5f2e8]/30 border border-[#a58b58]/40 text-[#3a3835] text-sm font-semibold 
                py-2.5 rounded-sm transition duration-300 ease-in-out hover:bg-[#f5f2e8]/50 hover:text-[#0f0f0f] 
                disabled:opacity-60"
    >
      {saved ? "✓ Saved" : saving ? "Saving..." : "Save Article"}
    </button>
  );
};

export default SaveButton;
