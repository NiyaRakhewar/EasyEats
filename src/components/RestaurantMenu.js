import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
export const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);
const {resId} = useParams()

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API+resId
    );

    const menu = await data.json();
    console.log(menu);
    setResInfo(menu?.data);
  };

  if( resinfo === null ){
    return <Shimmer />

  }

  const data = resinfo?.cards?.length > 0 &&resinfo?.cards[2]?.card?.card?.info;

  return resinfo?.cards?.length > 0 ? (
    <div className="menu">
      <h1>{data?.name}</h1>
      <p>
        {data?.cuisines?.join(", ")} - {data?.costForTwoMessage}
      </p>
      <h2>
        <b>Menu</b>
      </h2>
      <h3>{resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.title}</h3>
      <ul>
        {resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item, index) => (
          <li key={index}>
            <h3>{item?.card?.info?.name} - ₹ {Math.floor((item?.card?.info?.defaultPrice || item?.card?.info?.price )/100)}</h3>
           
          </li>
        ))}
      </ul>
    </div>
  ): <h3> No Data</h3>
};
