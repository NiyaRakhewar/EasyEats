import React, { useState } from "react";
import { Shimmer } from "./../Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "./.././../utils/useRestaurantMenu";
import RestaurantInfo from "./RestaurantInfo";
import MenuSection from "./MenuSection";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantMenu(resId);
  const [openSections, setOpenSections] = useState({});

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
    <div className="menu container p-4 flex flex-col justify-center items-center">
      <div className="w-[60%]">
        <RestaurantInfo
          name={data?.name}
          cuisines={data?.cuisines}
          costForTwoMessage={data?.costForTwoMessage}
        />
        <div className="">
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
  ) : (
    <h3>No Data</h3>
  );
};
