import React,{useEffect, useState}  from 'react'
import { RestaurantCard, WithPromotionCard } from "./RestaurantCard";
import { Link } from "react-router-dom";

export const AllRestaurants = ({allResData}) => {

  
    const title = allResData?.cards[2]?.card?.card?.title

    const filter = allResData?.cards[3]?.card?.card

    const restaurantData = allResData?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    const moreData = allResData?.cards[5]?.card?.card

    // useEffect(()=>{

    //   getData()
    // },[])

    // const getData = async () => {
    //   const apiUrl = "https://www.swiggy.com/dapi/restaurants/list/update";
    //   const payload = {
    //     "lat": 12.9352403,
    //     "lng": 77.624532,
    //     "nextOffset": "CJhlELQ4KICI9pjD14SOWzCnEw==",
    //     "widgetOffset": {
    //         "NewListingView_category_bar_chicletranking_TwoRows": "",
    //         "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
    //         "Restaurant_Group_WebView_PB_Theme": "",
    //         "Restaurant_Group_WebView_SEO_PB_Theme": "",
    //         "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "24",
    //         "inlineFacetFilter": "",
    //         "restaurantCountWidget": ""
    //     },
    //     "filters": {},
    //     "seoParams": {
    //         "seoUrl": "https://www.swiggy.com/",
    //         "pageType": "FOOD_HOMEPAGE",
    //         "apiName": "FoodHomePage"
    //     },
    //     "page_type": "DESKTOP_WEB_LISTING",
    //     "_csrf": "qPYTIt15doAy-JD1ttLQgLAJjAUjRqtmIGH_rALA"
    // }
    
    //   try {
    //     const response = await fetch(apiUrl, {
    //       method: 'POST',
    //       headers: {
    //         // 'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(payload)
    //     });
    
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    
    //     const json = await response.json();
    //     const data = json
    
    //     console.log("data new", data);
    //     // setData(data);
    //   } catch (error) {
    //     console.error("Fetching data error:", error);
    //     // setError(error.message);
    //   }
    // };
    

console.log("allres", allResData)

const RestaurantCardWithPromoted = WithPromotionCard(RestaurantCard)

  return (
    <div className="">
      <div className="filter">
      <h1 className="font-bold text-xl m-2 text-center">{title}</h1>

      </div>
<div>
<div className=''>
 <div className="flex flex-wrap justify-center">
        {restaurantData?.map((res, i) => (
         <Link key={res?.info?.id} to={`/restaurants/${res?.info?.id}`}> {res?.info?.avgRating > 4.4 ? <RestaurantCardWithPromoted  restroData={res}  />:<RestaurantCard  restroData={res} />}</Link>
        ))}
      </div>
 </div>
</div>
      <div className='flex items-center justify-items-center '>
      {/* <h1 className='text-xl p-2 m-2 cursor-pointer bg-slate-400 rounded-md '>{moreData?.message}</h1> */}

      </div>
    </div>
  )
}
