import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { RESTAURANT_API } from "../utils/constants";
import { AllRestaurants } from "./AllRestaurants";
import { Dishes } from "./Dishes";
import { TopRestaurants } from "./TopRestaurants";

export const Body = () => {
  const [APIData, setAPIData] = useState("");
  const [error, setError] = useState(null);

  const _ = require("lodash");

  useEffect(() => {
    fetchData();
    console.log("useeffect");
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANT_API);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();

      const data = json?.data;

      console.log("data", data);

      setAPIData(data);
    } catch (error) {
      // console.error("Fetching data error:", error);
      setError(error.message);
    }
  };

  console.log("APIdata", APIData);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <div>Looks offline</div>;
  }

  return !APIData ? (
    <Shimmer />
  ) : (
    <div>
      {/* <div className="h-[100px]"></div> */}

<div className="mx-20">
<div >
        <Dishes dishesData={APIData?.cards[0]?.card?.card} />
        <hr className="m-6" />

        <TopRestaurants topResData={APIData?.cards[4]?.card?.card} />
        <hr className="m-6" />
        <AllRestaurants allResData={APIData} />
      </div>
</div>
    
    </div>
  );
};
