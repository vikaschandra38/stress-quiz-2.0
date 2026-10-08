import { useEffect, useState } from "react";

const ProgressBar = ({ setShowButton }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress === 100) {
      // Wait for the CSS transition to complete (500ms) before showing button
      const timer = setTimeout(() => setShowButton(true), 500);
      return () => clearTimeout(timer);
    }

    // Progress not complete yet, continue incrementing
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.round(Math.min(prev + Math.random() * 30, 100));
        return newProgress;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [progress, setShowButton]);

  return (
    <>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="text-center text-md text-gray mb-8">{Math.round(progress)}%</div>
    </>
  );
};

export default ProgressBar;
