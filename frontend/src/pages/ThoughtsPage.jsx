import { useEffect, useState } from "react";
import api from "../api";
import VintageLoader from "../components/VintageLoader";
import { ExternalLink, Clock, MessageSquare } from "lucide-react"; // added Clock, MessageSquare

export default function ThoughtsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/threads/api/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Failed to load posts", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <VintageLoader />;

  return (
    <div className="min-h-screen bg-[#fffef9] p-8 font-['Special_Elite'] text-[#2b2b2b]">
      <h1 className="text-3xl mb-6 font-bold text-center">User Thoughts</h1>
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-[#cfc5b5] rounded-xl bg-[#f5f1e9] shadow-md p-6 transition-all hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2 text-[#2b2b2b] flex items-center space-x-2">
              <MessageSquare className="w-6 h-6 text-[#7a6e5a]" />
              <span>{post.title}</span>
            </h2>

            {/* Styled link button */}
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#c05621] hover:text-[#a1441c] font-semibold underline underline-offset-4 mb-2 transition-colors"
            >
              ~Article link~ <ExternalLink className="ml-1 w-4 h-4" />
            </a>

            <p className="mt-4 text-base text-[#3c3c3c] leading-relaxed whitespace-pre-line">
              {post.content}
            </p>

            <div className="mt-5 text-xs italic text-[#7d7568] border-t pt-2 border-[#e2ddd3] flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{new Date(post.created_at).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
