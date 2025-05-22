import { useEffect, useState } from "react";
import api from "../api";
import { ExternalLink, Clock, MessageSquare } from "lucide-react";
import SimpleLoader from "../components/SimpleLoader";

export default function ThoughtsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/threads/api/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Failed to load posts", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <SimpleLoader />;

  return (
    <div
      className="
        min-h-screen p-10 font-['Special_Elite'] text-[#2b2b2b] 
        bg-gradient-to-b from-[#faf6ec] to-[#f0e9d6] 
        bg-[url('/images/paper-texture.png')] bg-repeat
      "
    >
    <h1
      className="
        text-5xl font-extrabold text-center tracking-wide
        text-[#5c5238] 
        border-b-2 border-[#a58b58] w-max mx-auto pb-2 mb-12
        drop-shadow-sm
        "
    >
      User Thoughts
    </h1>

      <div className="flex flex-col space-y-10 max-w-4xl mx-auto">
        {posts.map((post) => (
          <article
            key={post.id}
            className="
              border-l-8 border-[#a58b58] rounded-r-xl bg-gradient-to-tr from-[#f7f3e7] to-[#efe8d8]
              shadow-lg p-8 transition-shadow duration-300 hover:shadow-2xl hover:border-[#c2b17a]
            "
          >
              <header className="flex items-start space-x-3 mb-1">
                <MessageSquare 
                  className="w-7 h-7 text-[#7a6e5a]" 
                  style={{ alignSelf: "flex-start" }} 
                />
                <h2 className="text-3xl font-bold text-[#4a4536]">{post.title}</h2>
              </header>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center text-[#c05621] hover:text-[#a1441c] 
                font-semibold underline underline-offset-4 decoration-[#a58b58] decoration-2 
                transition-all duration-300 ease-in-out mb-4
              "
            >
              Article link <ExternalLink className="ml-2 w-5 h-5" />
            </a>

            <p className="mt-2 text-lg text-[#3c3c3c] leading-relaxed whitespace-pre-line">
              {post.content}
            </p>

            <p className="italic text-sm text-[#7a6e5a] mb-4 select-none">
              By <span className="font-semibold">{post.user}</span>
            </p>

            <footer
              className="
                mt-8 text-xs italic text-[#7d7568] border-t border-[#e2ddd3] pt-3 
                flex items-center space-x-2 select-none
              "
            >
              <Clock className="w-5 h-5" />
              <time>{new Date(post.created_at).toLocaleString()}</time>
            </footer>
          </article>
        ))}

      </div>
    </div>
  );
}
