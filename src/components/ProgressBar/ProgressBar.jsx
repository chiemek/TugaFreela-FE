import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ currentProgress, maxProgress, color }) => {
  const progressPercentage = (currentProgress / maxProgress) * 100;

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="progress-text" style={{ color: color }}>
          {currentProgress}/{maxProgress}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
