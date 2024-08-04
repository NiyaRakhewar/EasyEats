import { CDN_URL } from "../utils/constants";
import { IoHeartCircle } from "react-icons/io5";
export const RestaurantCard = ({ restroData }) => {
  const { info } = restroData;


  return (
    <div className="w-[270px] h-[305px] m-2 border rounded-lg transform hover:scale-105 transition duration-300 ease-in-out hover:bg-gray-200 hover:shadow-xl shadow-lg">
      <h4 className="absolute mx-[240px] my-1 text-2xl shadow-2xl cursor-pointer  transform hover:scale-105 transition duration-300 ease-in-out "><IoHeartCircle fill="gray" /></h4>
     <img
        className="w-[270px] h-[180px] rounded-lg object-cover "
        alt="logo"
        src={CDN_URL + info?.cloudinaryImageId}
      />
     
     <div  className="absolute flex items-center my-[-16]  px-1 bg-lime-800 rounded-lg text-white text-sm"><h2>⭐</h2><h2> {info?.avgRatingString }</h2> <h4 className="pl-1 "> ({info?.totalRatingsString})</h4> </div>
      <div className="py-2 px-4">
        <h1 className="text-black-800 font-bold py-1  w-50 overflow-hidden overflow-ellipsis whitespace-nowrap">{info?.name}</h1>
        <h4 className="text-xs w-50 overflow-hidden overflow-ellipsis whitespace-nowrap">
          {info?.cuisines?.join(", ")}
        </h4>
<div className="flex justify-between text-xs py-2">
  <h4 className="bg-gray-200 p-1 rounded-md">⏱{info?.sla?.slaString}</h4><h4 className="py-1">{info?.costForTwo}</h4>
</div>
       <div className="flex ">{info?.aggregatedDiscountInfoV3?.header &&<h4 className="text-xs px-1 text-white bg-red-500 rounded-md shadow-md">OFFER</h4> }<h4 className="text-xs pl-2"> 
          { info?.aggregatedDiscountInfoV3?.header}{" "}
          {info?.aggregatedDiscountInfoV3?.subHeader}
        </h4></div>
      </div>
    </div>
  );
};

export const WithPromotionCard = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute z-10 bg-slate-900 text-white mx-1 my-2 p-2 rounded-lg ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};
