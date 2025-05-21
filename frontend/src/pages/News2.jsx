import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import Masonry from "react-masonry-css";
import VintageLoader from "../components/VintageLoader"; 
import "../styles/Index.css";

function News2() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const breakpointColumnsObj = {
    default: 5,
    1536: 4,
    1280: 3,
    1024: 2,
    640: 1,
  };

  useEffect(() => {
    fetch("http://localhost:8000/scraper2/scrape/")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setNews(data);
        } else {
          console.error("Received data is not an array:", data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching NDTV news", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <VintageLoader />;

  return (
    <div className="min-h-screen bg-[url('/vintage_newspaper_bg.jpg')] bg-cover bg-fixed bg-no-repeat px-4 py-10 font-special">
      <div className="w-full px-6 xl:px-12">
        <h1 className="text-5xl font-bold text-center text-[#2d2d2d] mb-10 drop-shadow-lg uppercase tracking-wide">
          NDTV
        </h1>

        {news.length > 0 ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {news.map((article, i) => (
              <div key={article.url || i} className="mb-6">
                <NewsCard article={article} />
              </div>
            ))}
          </Masonry>
        ) : (
          <p className="text-center text-lg text-[#3b3a38]">No news available.</p>
        )}
      </div>
    </div>
  );
}

export default News2;
