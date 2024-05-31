import RestroCard from "./RestroCard";
import restrolist from "../utils/mockData";
import { useState } from "react";
const Body = () => {
 //Local State variable - super powerfull variable
 const [listOfRes, setListOfRes ] = useState(restrolist);
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
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="restro-container">
        {listOfRes.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
