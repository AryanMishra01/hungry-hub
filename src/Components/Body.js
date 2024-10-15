import RestroCard, { withPromotedLabel } from "./RestroCard";
//import restrolist from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//import useRestroList from "../utils/useRestroList";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local State variable - super powerfull variable
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestroCard);
  //const listOfRes = useRestroList()
  //const filteredRes = useRestroList()

  //console.log("Body rendered", listOfRes)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8541536&lng=80.94478269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // to give this data to listOfRes; we need to set it to the state.
    console.log("data", json);
    // Optional Chaining
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Loading conditon if no data in array [SHIMMER UI]
  // if(listOfRes.length === 0){
  //   return <Shimmer/>
  // }

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
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline ! Please check your internet connection.
      </h1>
    );

  const { setUserName, loggedInUser } = useContext(UserContext);

  // using Ternary operator below:
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex shadow-sm">
        <div className="search m-2 p-2">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid: border-black shadow-md p-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-5 py-2 font-medium bg-green-200 hover:bg-green-400 m-2 rounded-lg shadow-md"
            onClick={() => {
              //filter the restro cards and update the UI
              // using the text written by user
              // includes is needed to extract text from textbox
              const filteredRestro = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRestro);
              // console.log(filteredRestro)
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-1 p-1 flex items-center">
          <button
            className="px-3 py-2 font-medium bg-sky-200 hover:bg-sky-700 rounded-lg shadow-md"
            onClick={() => {
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRes(filteredList);
              // console.log("Top filtered", filteredList);
            }}
          >
            Top Rated Restaurants 🔝
          </button>
        </div>
        <div className="search m-1 p-1 flex items-center">
          <lable>UserName: </lable>
          <input
            className="border border-black shadow-md p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((r) => (
          <Link key={r.info.id} to={"/restaurants/" + r.info.id}>
            {r.info.veg ? (
              <RestaurantCardPromoted resData={r} />
            ) : (
              <RestroCard resData={r} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
