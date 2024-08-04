import React,{useState}  from 'react'
import { RestaurantCard, WithPromotionCard } from "./RestaurantCard";
import { Link } from "react-router-dom";

export const AllRestaurants = ({allResData}) => {

  
    const title = allResData?.cards[2]?.card?.card?.title

    const filter = allResData?.cards[3]?.card?.card

    const restaurantData = allResData?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    const moreData = allResData?.cards[5]?.card?.card

console.log("allres", allResData)

const RestaurantCardWithPromoted = WithPromotionCard(RestaurantCard)

  return (
    <div className="">
      <div className="filter">
     
       <h1 className="font-bold text-xl m-1">{title}</h1>
      </div>
      <div className="flex flex-wrap">
        {restaurantData?.map((res, i) => (
         <Link key={res?.info?.id} to={`/restaurants/${res?.info?.id}`}> {res?.info?.avgRating > 4.4 ? <RestaurantCardWithPromoted  restroData={res}  />:<RestaurantCard  restroData={res} />}</Link>
        ))}
      </div>
      <div className='flex items-center justify-center '>
      <h1 className='text-xl p-2 m-2 cursor-pointer bg-slate-400 rounded-md '>{moreData?.message}</h1>

      </div>
    </div>
  )
}
