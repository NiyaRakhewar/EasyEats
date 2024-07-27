import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);
  const [error, setError] = useState(null);
const [searchText, setSearchText] = useState("")

const  _ = require("lodash")
  useEffect(() => {
    fetchData();
    console.log("useeffect")
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
  
      console.log("json=>4", json);

const restro = json?.data?.cards
  .find(i => i?.card?.card?.id === "restaurant_grid_listing")
  ?.card?.card?.gridElements?.infoWithStyle?.restaurants;



console.log("filter=>",restro)

console.log(restro?.card?.card?.gridElements?.infoWithStyle?.restaurants)


      setListOfRestaurants(restro)
      setFilterListOfRestaurants(restro)
    } catch (error) {
      // console.error("Fetching data error:", error);
      setError(error.message);
    }
  }; 

  // console.log(listOfRestaurants);
  console.log("render")

  const onlineStatus = useOnlineStatus()

  if(onlineStatus === false){
    return <div>Looks offline</div>
  }
 
  return listOfRestaurants?.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" onChange={(e)=>setSearchText(e.target.value)}/>
          <button onClick={()=>{
           const filteredData =  listOfRestaurants?.filter(
              (data) => data?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setFilterListOfRestaurants(filteredData);
          }} >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants?.filter(
              (data) => data?.info?.avgRating > 4
            );
            setListOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="restro-container">
        {filterListOfRestaurants?.map((res, i) => (
         <Link to={`/restaurants/${res?.info?.id}`}> <RestaurantCard key={res?.info?.id} restroData={res} /></Link>
        ))}
      </div>
    </div>
  );
};
