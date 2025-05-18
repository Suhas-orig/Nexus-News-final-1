import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import "../styles/Index.css";

const SimpleLoader = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/Animation-Form.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation JSON", err));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#f4f1e7]">
      {animationData ? (
        <Lottie animationData={animationData} loop autoplay style={{ height: 150, width: 150 }} />
      ) : (
        <p>Loading animation...</p>
      )}
    </div>
  );
};

export default SimpleLoader;
