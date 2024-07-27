import { CDN_URL} from "../utils/constants"
export const RestaurantCard = ({restroData})=>{
    const {info} = restroData

    console.log("rr",restroData)
  
    return (
      <div  className='restro-card'>
        <img className="restro-logo" alt="logo" src={CDN_URL+ info?.cloudinaryImageId}/>
  <h3>{ info?.name }</h3>
  <h4>{(info?.cuisines)?.join(", ")}</h4>
  <h4>{info?.avgRatingString} stars</h4>
      </div>
    )
  }