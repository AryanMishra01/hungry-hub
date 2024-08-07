import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {


const dispatch = useDispatch()

const handleAddItem = (item) => {
  // dispatch an action
  dispatch(addItem(item))
}

  console.log("itemList", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="flex justify-between p-2">
              <span className="font-semibold">{item?.card?.info?.name}</span>
            </div>
            <span className="font-semibold flex justify-between">
              {"₹"}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <span className="font-bold text-cyan-600 flex justify-between">
              {"⭐"}
              {item?.card?.info?.ratings?.aggregatedRating?.rating ||
                "No reviews"}
            </span>
            <span className="text-lg ">{item?.card?.info?.description}</span>
          </div>
          <div className="w-3/12 p-4 ">
            <div className="absolute ">
              <button className="p-4 w-1/2 mx-14 my-36 shadow-lg bg-white hover:bg-gray-200 text-green-500 font-bold rounded-lg"
              onClick={()=> handleAddItem(item)}>
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="rounded-xl w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
