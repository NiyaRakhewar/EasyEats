import React from 'react';
import AccordionToggle from './AccordionToggle';
import NestedMenuItem from './NestedMenuItem';

const MenuSection = ({ section, sectionIndex, isOpen, onToggle }) => {
  const sectionTitle = section?.card?.card?.title;
  const items = section?.card?.card?.itemCards;
  const categories = section?.card?.card?.categories;

  return (
    sectionTitle && (
      <div key={sectionIndex} className="border-b-8">
        <AccordionToggle
          isOpen={isOpen}
          onClick={onToggle}
          title={sectionTitle}
        />
        {isOpen && (
          <div className="pl-4">
            <ul>
              {items
                ? items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="py-2 px-4 border-b">
                      <h3 className="text-lg font-medium">
                        {item?.card?.info?.name} - ₹{" "}
                        {Math.floor(
                          (item?.card?.info?.defaultPrice || item?.card?.info?.price) / 100
                        )}
                      </h3>
                    </li>
                  ))
                : categories?.map((category, nestedIndex) => (
                    <NestedMenuItem
                      key={nestedIndex}
                      category={category}
                      sectionIndex={sectionIndex}
                      nestedIndex={nestedIndex}
                    />
                  ))}
            </ul>
          </div>
        )}
      </div>
    )
  );
};

export default MenuSection;
