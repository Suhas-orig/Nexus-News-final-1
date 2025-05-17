import { useState, useEffect } from "react";
import api from "../api";
import SavedArticleCard from "../components/SavedArticleCard";  // Import the new card here
import "../styles/Index.css";

function SavedArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSavedArticles();
  }, []);

  const fetchSavedArticles = async () => {
    setLoading(true);
    try {
      const res = await api.get("savednews/api/saved/");
      setArticles(res.data);
    } catch (err) {
      alert("Failed to load saved articles.");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteArticle = async (id) => {
    if (!window.confirm("Are you sure you want to delete this article? 🗑️")) return;
    try {
      const res = await api.delete(`savednews/api/saved/${id}/`);
      if (res.status === 204) {
        alert("🗑️ Article deleted!");
        fetchSavedArticles();
      } else {
        alert("Failed to delete article.");
      }
    } catch (err) {
      alert("Delete error: " + err);
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 relative bg-transparent">
      <div className="max-w-3xl mx-auto z-10">
        <h2 className="text-3xl font-bold mb-8 text-[#3a3835]">📚 Your Saved Articles</h2>

        {loading ? (
          <p className="text-[#3a3835] text-sm">Loading saved articles...</p>
        ) : articles.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <SavedArticleCard
                key={article.id}
                article={article}
                onDelete={deleteArticle}
              />
            ))}
          </div>
        ) : (
          <p className="text-[#3a3835] text-sm italic">No saved articles yet! Start saving some 📰✨</p>
        )}
      </div>
    </div>
  );
}

export default SavedArticles;
