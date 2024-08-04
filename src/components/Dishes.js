import React from "react";
import { DISHES_URL } from "../utils/constants";
export const Dishes = ({ dishesData }) => {
  const dishes = dishesData?.gridElements?.infoWithStyle?.info;
  const title = dishesData?.header?.title;

  console.log("dishData", dishes);

  return (
    <div>
      <div className="flex justify-between my-2">
        <h1 className="font-bold text-xl m-1">{title}</h1>
        <h1>
          {"<"} {">"}
        </h1>
      </div>
      <div className="flex overflow-x-scroll scrollbar-hide p-4 space-x-4">
        {dishes?.map((dish) => {
          return (
            // <div key={dish?.id} className="">
              <img
                alt="img"
                src={DISHES_URL + "/" + dish?.imageId}
                className="w-24"
              />
            // </div>
          );
        })}
      </div>
    </div>
  );
};
