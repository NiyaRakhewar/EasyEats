import React from "react";
import { DISHES_URL } from "../utils/constants";
import SliderComponent from "../utils/SliderComponent";
export const Dishes = ({ dishesData }) => {
  const dishes = dishesData?.gridElements?.infoWithStyle?.info;
  const title = dishesData?.header?.title;

  console.log("dishData", dishes);

  return (
    <div>
      <div className="flex justify-between mt-3">
        <h1 className="font-bold text-xl ">{title}</h1>
      </div>

      <div className="mx-2">
        <SliderComponent
          code={dishes?.map((dish) => {
            return (
              <img
                key={dish?.id}
                alt="img"
                src={DISHES_URL + "/" + dish?.imageId}
                className="w-24 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
              />
            );
          })}
          dotsFlag={false}
          slideShowCount={10}
        />
      </div>
    </div>
  );
};
