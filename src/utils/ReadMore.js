import React, { useState } from 'react';

const ReadMore = ({ text, maxCharacterCount }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    text?.length > 120 ? <div className='text-sm text-opacity-90 text-slate-600'>
      {isExpanded ? text : `${text.slice(0, maxCharacterCount)}...`}
      <span
        onClick={toggleReadMore}
        className="text-blue-500 cursor-pointer ml-1 "
      >
        {isExpanded ? "less" : "more"}
      </span>
    </div>: <div className='text-sm text-opacity-90 text-slate-600'>{text}</div>
  );
};

export default ReadMore;
