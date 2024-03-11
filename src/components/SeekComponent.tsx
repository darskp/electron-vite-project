// SeekComponent.tsx
import React from 'react';
import { SeekComponentProps } from '../helper/interface';

const SeekComponent: React.FC<SeekComponentProps> = ({ tags, onClick }) => {
  const tagKeys = Object.keys(tags);

  const handleClick = (tag: string) => {
    const seconds = tags[tag];
    if (!isNaN(seconds)) {
      onClick(seconds);
    }
  };

  return (
    <div className="mt-4 w-3/4 flex flex-row justify-center items-center flex-wrap">
      {tagKeys && tagKeys.map((tag, index) => (
        <button
          key={index}
          onClick={() => handleClick(tag)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-3 mt-3 mb-2 hover:bg-blue-700 focus:outline-none"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default SeekComponent;
