import React from 'react';

const AccordionToggle = ({ isOpen, onClick, title, count }) => (
  <div
    className="py-4 px-2 text-left w-full flex justify-between items-center focus:outline-none cursor-pointer"
    onClick={onClick}
  >
    <span className={count?"text-lg font-semibold":"text-lg font-bold"}>
      {title} {count ? `(${count})` : ''}
    </span>
    <svg
      className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

export default AccordionToggle;
