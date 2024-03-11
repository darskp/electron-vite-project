import React from 'react';

const VideoComponent: React. FC<{ videoSrc: string }> = ({ videoSrc }) => {
  return <video autoPlay className="w-96 h-96 rounded-md border-2 " controls src={videoSrc}></video>;
};

export default VideoComponent;
