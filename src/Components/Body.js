import RestroCard from "./RestroCard";
import restrolist from "../utils/mockData";


const Body = () => { 
    return (
       <div className="body">
         <div className="search">Search</div>
         <div className="restro-container">
             {restrolist.map(restaurant => (
             <RestroCard key={restaurant.info.id} resData = {restaurant}/>
             ))}
         </div>
       </div>
    );  
};

export default Body;