import "../utils/styles.css"
import React, { useState } from "react";
import { RestaurantCard, WithPromotionCard } from "./RestaurantCard";
import { Link } from "react-router-dom";
export const TopRestaurants = ({ topResData }) => {
  const restaurantData = topResData?.gridElements?.infoWithStyle?.restaurants;

  const title = topResData?.header?.title;

  const [searchText, setSearchText] = useState("");

  const RestaurantCardWithPromoted = WithPromotionCard(RestaurantCard);
  return (
    <div className="">
      <h1 className="font-bold text-xl mx-1 ">{title}</h1>

      <div className="relative p-4">
        <div className="flex overflow-x-scroll custom-scrollbar space-x-4 ">
          {/* <div className="flex overflow-x-scroll scrollbar-hide p-4 space-x-4"> */}
          {restaurantData?.map((res, i) => (
            <Link key={res?.info?.id} to={`/restaurants/${res?.info?.id}`} className="mb-2">
              {" "}
              <RestaurantCard restroData={res} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
