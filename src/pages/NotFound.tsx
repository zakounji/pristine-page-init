
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="text-9xl font-bold mb-6">404</div>
        <h1 className="text-3xl font-bold mb-6">Page not found</h1>
        <p className="text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-gray-200 active:scale-95"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
