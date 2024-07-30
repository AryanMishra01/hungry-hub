//import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestroCategory from "./RestroCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  //const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();
  //console.log(params)

  const resInfo = useRestaurantMenu(resId);

  const [showIndex,setShowIndex] = useState(null)
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API+resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setresInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;
  //destructuring
  //console.log("name", resInfo?.cards[2]?.card?.card?.info)
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);

  // const categories =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.filter(
  //     (c) =>
  //       c.card?.["card"]?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );
  //   console.log("categories",categories)
  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl ">{name}</h1>
      <p className="font-semibold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Categories Accordions */}
      {categories.map((category, index) => (
        //controlled component
        <RestroCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
        />
      ))}
      {/* <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {" "}
            {item.card.info.name} - {" ₹"}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

//  <h3>{cuisines.join(",")}</h3>
// above was an array im api data to separate it with comma we use .join(",")

//Always use a key when using .map(); else React will throw warning
export default RestaurantMenu;
