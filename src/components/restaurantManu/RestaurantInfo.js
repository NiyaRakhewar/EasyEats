import React from "react";

const RestaurantInfo = ({ name, cuisines, costForTwoMessage, data }) => {
  console.log("data-->", data);
  return (
    <div>
      <h1 className="text-3xl font-bold mt-6">{name}</h1>
    <div className="m-3 mb-4 border rounded-lg shadow-md w-[40%]">

    <h4 className="mt-2 font-semibold m-1">
        {" "}
        ⭐ {data?.avgRating} ({data?.totalRatingsString})
      </h4>
      <p className="text-green-600 text-sm  ml-2 mb-4 font-semibold ">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <p>
        {data?.address}
      </p>
    </div>
      <h2 className="text-xl m-2 text-center">〰 Menu 〰</h2>
    </div>
  );
};

export default RestaurantInfo;
