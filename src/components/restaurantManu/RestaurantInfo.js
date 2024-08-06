import React from 'react';

const RestaurantInfo = ({ name, cuisines, costForTwoMessage }) => (
  <div>
    <h1 className="text-3xl font-bold mt-6">{name}</h1>
    <p className="text-gray-600 mb-4">
      {cuisines?.join(", ")} - {costForTwoMessage}
    </p>
    <h2 className="text-xl m-2 text-center">〰 Menu 〰</h2>
  </div>
);

export default RestaurantInfo;
