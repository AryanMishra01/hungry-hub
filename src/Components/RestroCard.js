import { CDN_URL } from "../utils/constants";
// above is example to import a named export
const RestroCard = (props) => {
    //destructing 

  const {resData} = props;
  console.log("RestroCard Data",resData)
  // conditional rendering ?.
  const {cloudinaryImageId, name, avgRating, cuisines,costForTwo, sla } = resData?.info;
  //const {deliveryTime} = resData?.info.sla
      return (
       //  <div style={styleCard} >
          <div className="m-4 p-4 w-[250px] rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200">
              <img className="rounded-lg" alt="restro-logo" src= {CDN_URL + cloudinaryImageId} />
              <h3 className="font-bold py-4 text-lg">{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRating} stars</h4>
              <h4>{costForTwo}</h4>
              <h4>{sla?.slaString}</h4>
          </div>
      );
  };

 // const styleCard = {
   // backgroundColor: "#f0f0f0" 
 //}

 //HOC: HIGHER ORDER FUNCTION
 // INPUT: RestaurantCard =>  RestaurantCardPromoted
export const withPromotedLabel = (RestroCard) => {

  return (props) => {
    return (
      <div>
        <label className="flex flex-auto absolute bg-green-800 text-white m-2 p-2 rounded-lg opacity-80">Veg</label>
        <RestroCard {...props}/>
      </div>
    )
  }
 }

  export default RestroCard;