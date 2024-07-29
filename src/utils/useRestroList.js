// import { useState, useEffect } from "react";

// const useRestroList = () => {
//   const [listOfRes,setListOfRes] = useState([])
//   const [filteredRes, setFilteredRes] = useState([]);

//   useEffect(() => {
//     fetchData();
//   },[]);


// const fetchData = async() => {
//     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8541536&lng=80.94478269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//     const json = await data.json()
//       setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//       setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// }

//     return (listOfRes,filteredRes)
// }

// export default useRestroList;
