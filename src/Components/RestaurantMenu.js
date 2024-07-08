import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const {resId} = useParams();
  //console.log(params)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    //console.log(json);
    setresInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;
  //destructuring
  //console.log("name", resInfo?.cards[2]?.card?.card?.info)
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {" "}
            {item.card.info.name} - {" ₹"}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

//  <h3>{cuisines.join(",")}</h3>
// above was an array im api data to separate it with comma we use .join(",")

//Always use a key when using .map(); else React will throw warning
export default RestaurantMenu;
