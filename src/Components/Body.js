import RestroCard from "./RestroCard";
//import restrolist from "../utils/mockData";
import { useState, useEffect } from "react";
const Body = () => {
 //Local State variable - super powerfull variable
 const [listOfRes, setListOfRes ] = useState([]);

 useEffect(()=> {
    fetchData();
 }, [])

 const fetchData = async () =>{
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8541536&lng=80.94478269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();
  // to give this data to listOfRes; we need to set it to the state.
  //console.log(json)
  setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 }

  // normal JS variable
  // let listOfRestaurantsJS = [
  //   {
  //     info: {
  //       id: "55473",
  //       name: "Pizza Hut",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "Sector 10",
  //       areaName: "Rohini",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 3.9,
  //       parentId: "721",
  //       avgRatingString: "4.0",
  //       totalRatingsString: "5K+",
  //       sla: {
  //         deliveryTime: 33,
  //         lastMileTravel: 2.3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "30-35 mins",
  //         lastMileTravelString: "2.3 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "55472",
  //       name: "Dominos",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "Sector 10",
  //       areaName: "Rohini",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.5,
  //       parentId: "721",
  //       avgRatingString: "4.0",
  //       totalRatingsString: "5K+",
  //       sla: {
  //         deliveryTime: 33,
  //         lastMileTravel: 2.3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "30-35 mins",
  //         lastMileTravelString: "2.3 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={()=>{
            const filteredList = listOfRes.filter((res) => res.info.avgRating > 4.4  );
            setListOfRes(filteredList)
          }
         }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {listOfRes.map((r) => (
          <RestroCard key={r.info.id} resData={r} />
        ))}
      </div>
    </div>
  );
};

export default Body;