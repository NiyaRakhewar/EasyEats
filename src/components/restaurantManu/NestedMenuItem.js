import React, { useState } from 'react';
import AccordionToggle from './AccordionToggle';

const NestedMenuItem = ({ category, sectionIndex, nestedIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const title = category?.title;
  const itemCards = category?.itemCards;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div key={nestedIndex} className="border-b">
      <AccordionToggle
        isOpen={isOpen}
        onClick={handleToggle}
        title={title}
        count={itemCards?.length}
      />
      {isOpen && (
        <div className="pl-4">
          <ul>
            {itemCards?.map((nestedItem) => {
              const itemData = nestedItem?.card?.info;
              return (
                <li key={itemData?.id} className="py-2 px-4 border-b">
                  <h3 className="text-lg font-medium">
                    {itemData.name} - ₹{" "}
                    {Math.floor((itemData.defaultPrice || itemData.price) / 100)}
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NestedMenuItem;
