import React, { useState } from "react";
import AccordionToggle from "./AccordionToggle";
import ReadMore from "../../utils/ReadMore";
import { FOOD_IMG } from "../../utils/constants";

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
              const ratings = nestedItem?.card?.info?.ratings?.aggregatedRating;
              return (
                <li key={itemData?.id} className="py-2 px-4 border-b">
                  <div className="flex justify-between">
                    <div className="text-lg  font-semibold w-[70%]">
                      {itemData?.itemAttribute?.vegClassifier === "VEG" && (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                          alt="vegetarian-food-symbol"
                        />
                      )}
                      {itemData?.itemAttribute?.vegClassifier === "NONVEG" && (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/fluency/48/non-vegetarian-food-symbol.png"
                          alt="non-vegetarian-food-symbol"
                        />
                      )}
                      <h3 className="text-slate-800">{itemData?.name}</h3>
                      <h3 className="text-lg">
                        ₹{" "}
                        {Math.floor(
                          (itemData?.defaultPrice || itemData?.price) / 100
                        )}
                      </h3>
                      {ratings?.rating && (
                        <h3 className="text-xs my-1">
                          ⭐{ratings?.rating} ({ratings?.ratingCountV2})
                        </h3>
                      )}
                      <ReadMore
                        text={itemData?.description}
                        maxCharacterCount={150}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center w-[30%] ">
                      {itemData?.imageId && (
                        <img
                          className="rounded-lg w-[156px] h-[144px] object-cover mb-2 shadow-2xl"
                          alt="img"
                          src={FOOD_IMG + itemData?.imageId}
                        />
                      )}
                      <button
                        className={
                          itemData?.imageId
                            ? "absolute mt-32 px-3 font-bold bg-slate-100 text-green-600 shadow-2xl border border-slate-300 rounded cursor-pointer"
                            : " font-bold px-3 bg-slate-100 text-green-600 shadow-2xl border border-slate-300 rounded cursor-pointer"
                        }
                      >
                        ADD
                      </button>
                    </div>
                  </div>
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
