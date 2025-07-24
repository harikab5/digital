import { useEffect } from "react";

export default function IndexSplash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/login";
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <img
        src="https://i.postimg.cc/Nj51fNVZ/startinglogo.png"
        alt="Logo"
        className="w-[450px] animate-pulse"
        style={{ animation: "scaleUp 2s ease-in-out, fadeOut 4s ease-in-out forwards" }}
      />
      <style>{`
        @keyframes scaleUp {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-pulse {
          animation: scaleUp 2s ease-in-out, fadeOut 4s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
} 