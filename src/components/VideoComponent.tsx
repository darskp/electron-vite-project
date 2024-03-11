import React from 'react';

const VideoComponent: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
  return <video controls src={videoSrc} />;
};

export default VideoComponent;
