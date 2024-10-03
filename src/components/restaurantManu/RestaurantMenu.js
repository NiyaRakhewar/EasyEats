import React, { useState } from "react";
import { Shimmer } from "./../Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "./.././../utils/useRestaurantMenu";
import RestaurantInfo from "./RestaurantInfo";
import MenuSection from "./MenuSection";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantMenu(resId);
  const [openSections, setOpenSections] = useState({ 1: true });

  if (resinfo === null) {
    return <Shimmer />;
  }

  const data =
    resinfo?.cards?.length > 0 && resinfo?.cards[2]?.card?.card?.info;

  const menuSections =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const handleToggle = (sectionIndex) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionIndex]: !prevState[sectionIndex],
    }));
  };

  return resinfo?.cards?.length > 0 ? (
    <div>
      {" "}
      <div className="flex flex-col justify-center items-center  w-[100%]">
        <div className="w-[70%] p-4">
          <RestaurantInfo
            name={data?.name}
            cuisines={data?.cuisines}
            costForTwoMessage={data?.costForTwoMessage}
            data={data}
          />
          <div>
            {menuSections?.map((section, sectionIndex) => (
              <MenuSection
                key={sectionIndex}
                section={section}
                sectionIndex={sectionIndex}
                isOpen={!!openSections[sectionIndex]}
                onToggle={() => handleToggle(sectionIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h3>No Data</h3>
  );
};
