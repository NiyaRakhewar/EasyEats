import React,{useState}  from 'react'
import { RestaurantCard, WithPromotionCard } from "./RestaurantCard";
import { Link } from "react-router-dom";
export const TopRestaurants = ({topResData}) => {

    const restaurantData = topResData?.gridElements?.infoWithStyle?.restaurants

    const title = topResData?.header?.title

    const [searchText, setSearchText] = useState("")

const RestaurantCardWithPromoted = WithPromotionCard(RestaurantCard)
  return (
    <div className="">

       
       <h1 className="font-bold text-xl m-1">{title}</h1>
     
      <div className="flex overflow-x-scroll scrollbar-hide p-4 space-x-4">
        {restaurantData?.map((res, i) => (
         <Link key={res?.info?.id} to={`/restaurants/${res?.info?.id}`}> <RestaurantCard  restroData={res} /></Link>
        ))}
      </div>
      </div>
  )
}
