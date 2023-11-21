import React from 'react';

export const Progress = ({ percentage }) => {
  const progressStyle = {
    width: `${percentage}%`,
    height: '15px',
    backgroundColor: '#245f2e', // Green color for the progress bar
    borderRadius: '20px',
    transition: 'width 0.3s ease-in-out', // Add a smooth transition effect
    border:"1px solid #36a546"
  };

  return (
    <div>
      <div style={progressStyle}></div>
    </div>
  );
};

