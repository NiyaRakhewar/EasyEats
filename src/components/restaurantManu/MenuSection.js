import React from "react";
import AccordionToggle from "./AccordionToggle";
import NestedMenuItem from "./NestedMenuItem";
import { FOOD_IMG } from "./../../utils/constants";
import ReadMore from "../../utils/ReadMore";

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
                ? items?.map((item, itemIndex) => {
                    const itemData = item?.card?.info;

                    return (
                      <li key={itemIndex} className="py-2 px-4 border-b">
                        <div className="flex justify-between">
                          <div className="text-lg  font-semibold w-[70%]">
                            {itemData?.itemAttribute?.vegClassifier ===
                              "VEG" && (
                              <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                                alt="vegetarian-food-symbol"
                              />
                            )}
                            {itemData?.itemAttribute?.vegClassifier ===
                              "NONVEG" && (
                              <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/fluency/48/non-vegetarian-food-symbol.png"
                                alt="non-vegetarian-food-symbol"
                              />
                            )}
                            <h3 className="text-slate-800">{itemData?.name}</h3>
                            <h3>
                              ₹{" "}
                              {Math.floor(
                                (itemData?.defaultPrice || itemData?.price) /
                                  100
                              )}
                            </h3>

                            <ReadMore
                              text={itemData?.description}
                              maxCharacterCount={150}
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-[30%] ">
                            <img
                              className="rounded-lg w-[156px] h-[144px] object-cover mb-2 shadow-2xl"
                              alt="img"
                              src={FOOD_IMG + itemData?.imageId}
                            />
                            <button className="absolute mt-32 px-3 font-bold bg-slate-100 text-green-600 shadow-2xl border border-slate-300 rounded cursor-pointer">
                              ADD
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })
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
