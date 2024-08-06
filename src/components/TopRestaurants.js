import "../utils/styles.css";
import React, { useState } from "react";
import { RestaurantCard, WithPromotionCard } from "./RestaurantCard";
import { Link } from "react-router-dom";
import SliderComponent from "../utils/SliderComponent";

export const TopRestaurants = ({ topResData }) => {
  const restaurantData = topResData?.gridElements?.infoWithStyle?.restaurants;

  const title = topResData?.header?.title;

  const RestaurantCardWithPromoted = WithPromotionCard(RestaurantCard);
  return (
    <div className="">
      <h1 className="font-bold text-xl mx-1 mb-1">Top restaurant chains</h1>

      <SliderComponent
        code={restaurantData?.map((res, i) => (
          <Link
            key={res?.info?.id}
            to={`/restaurants/${res?.info?.id}`}
            className="mb-2 "
          >
            {" "}
            <RestaurantCard restroData={res} />
          </Link>
        ))}
        dotsFlag={true}
      />
    </div>
  );
};
