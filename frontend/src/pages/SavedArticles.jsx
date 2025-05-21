import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import api from "../api";
import { useNavigate } from "react-router-dom";
import SavedArticleCard from "../components/SavedArticleCard";
import VintageLoader from "../components/VintageLoader";
import "../styles/Index.css";

function SavedArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const breakpointColumnsObj = {
    default: 4,
    1536: 4,
    1280: 4,
    1024: 3,
    640: 2,
    0: 1,
  };

  useEffect(() => {
    fetchSavedArticles();
  }, []);

  // Fetch saved articles from backend API
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

  // Delete article by id, refresh list after success
  const deleteArticle = async (id) => {
    if (!window.confirm("Are you sure you want to delete this article? ")) return;
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

  // NEW: On clicking "Post This" button, navigate to PostArticle page
  // Pass the article title and link as React Router state
  const handlePost = (article) => {
    navigate("/threads/post", { state: { title: article.title, link: article.link } });
  };

  if (loading) return <VintageLoader />;

  return (
    <div className="min-h-screen flex justify-center items-start px-6 relative bg-transparent pt-12">
      <div className="max-w-[1700px] mx-auto z-10">
        <h2 className="text-3xl font-bold mb-9 font-['Special_Elite'] text-[#3a3835]">
          Your Saved Articles
        </h2>

        {articles.length > 0 ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {articles.map((article) => (
              <div key={article.id} className="mb-6">
                <SavedArticleCard
                  article={article}
                  onDelete={deleteArticle}
                  onPost={handlePost}  // <-- Updated prop here
                />
              </div>
            ))}
          </Masonry>
        ) : (
          <p className="text-[#3a3835] text-sm italic">
            No saved articles yet! Start saving some 📰✨
          </p>
        )}
      </div>
    </div>
  );
}

export default SavedArticles;
