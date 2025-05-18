import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import "../styles/Index.css";

const messages = [
  "Fetching today’s headlines.....",
  "Rolling out fresh ink.....",
  "Summoning the scribes....."
];

const VintageLoader = () => {
  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the animation JSON from public folder
    fetch("/Animation-News.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation JSON", err));
  }, []);

  useEffect(() => {
    const currentMessage = messages[msgIndex];
    if (charIndex < currentMessage.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentMessage[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 90);

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setMsgIndex((prev) => (prev + 1) % messages.length);
      }, 1500);

      return () => clearTimeout(pause);
    }
  }, [charIndex, msgIndex]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f4f1e7] space-y-6">
      {animationData ? (
        <Lottie animationData={animationData} loop autoplay style={{ height: 150, width: 150 }} />
      ) : (
        <p>Loading animation...</p>
      )}
      <h2 className="font-[Special Elite] text-black text-xl md:text-2xl tracking-wider">
        {text}
        <span className="animate-blink">|</span>
      </h2>
    </div>
  );
};

export default VintageLoader;
