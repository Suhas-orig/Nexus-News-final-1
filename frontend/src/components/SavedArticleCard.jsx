import { BookMarked, ExternalLink, Trash2 } from "lucide-react";

export default function SavedArticleCard({ article, onDelete }) {
  const formattedDate = new Date(article.saved_at).toLocaleDateString("en-US");

  return (
    <div className="bg-[#fffef9] border border-[#dfd3c3] text-[#2b2b2b] p-6 rounded-2xl shadow-[4px_4px_0px_#b6a48e] hover:shadow-[6px_6px_0px_#a49585] transition-all duration-300 font-['Special_Elite']">
      <h3 className="text-xl mb-2 leading-snug tracking-wide">
        <BookMarked className="inline-block mr-2 text-[#9c6b30]" />
        {article.title}
      </h3>
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-[#c05621] hover:text-[#a1441c] font-semibold underline underline-offset-4 mb-2 transition-colors"
      >
        Read Full Article <ExternalLink className="ml-1 w-4 h-4" />
      </a>
      <p className="text-xs italic text-[#6c5b4c] mt-2">Source: {article.source}</p>
      <p className="text-xs italic text-[#6c5b4c] mt-1">Saved on: {formattedDate}</p>

      <button
        onClick={() => onDelete(article.id)}
        className="mt-4 inline-flex items-center gap-1 text-xs text-white bg-[#b83a3a] hover:bg-[#922727] px-4 py-2 rounded-md shadow transition-colors"
      >
        <Trash2 className="w-4 h-4" /> Delete
      </button>
    </div>
  );
}
