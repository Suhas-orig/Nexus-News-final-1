import "../styles/Index.css";

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-t-yellow-400 border-b-transparent animate-spin"></div>
        <div className="absolute inset-1 rounded-full border-4 border-t-transparent border-b-yellow-600 animate-spin-slower"></div>
      </div>
    </div>
  );
};

export default LoadingIndicator