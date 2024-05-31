import { CDN_URL } from "../utils/constants";
// above is example to import a named export
const RestroCard = (props) => {
    //destructing 
  const {resData} = props;
  // conditional rendering ?.
  const {cloudinaryImageId, name, avgRating, cuisines,costForTwo } = resData?.info;
  const {deliveryTime} = resData?.info.sla
      return (
          <div className="restro-card" style={styleCard}>
              <img className="restro-logo" alt="restro-logo" src= {CDN_URL + cloudinaryImageId} />
              <h3>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRating} stars</h4>
              <h4>{costForTwo}</h4>
              <h4>{deliveryTime} minutes</h4>
          </div>
      );
  };

  const styleCard = {
    backgroundColor: "#f0f0f0"
 
 }

  export default RestroCard;