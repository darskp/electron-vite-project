// SeekComponent.tsx
import React from 'react';
import { SeekComponentProps } from '../helper/interface';



const SeekComponent: React.FC<SeekComponentProps> = ({ tags, onClick }) => {

  const handleClick = (tag: string) => {
    
    const seconds = parseFloat(tag);
    if (!isNaN(seconds)) {
      onClick(seconds);
    }
  };

  return (
    <div>
      {tags.map((tag, index) => (
        <button key={index} onClick={() => handleClick(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default SeekComponent;
