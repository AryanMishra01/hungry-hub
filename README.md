/**
 * Header
 *  -Logo
    -Nav Items
 * Body
    - Search
    - Restro Container
      - Restro Cards
         - Image
         - Name of Resturant, Star Rating, cuisine, dilevery time.
 * Footer
     -  Copyright
     -  Links
     -  Address 
 */

 CSS:
   - Inside index.css
   - Inline style in index.html
 *         e.g: <div id="root" class="root" style="width 20px"></div>
   - Directly by using a javascript object:
            e.g: Here styleCard is JS object
*          const styleCard = {
           backgroundColor: "grey"
          }
          const RestroCard = () => {
           return (
            <div className="restro-card" style={StyleCard}>
            <h3>Aryan Resturant</h3>
            </div>
             )
            }

            or we can directly ingest it by below syntax"
               e.g:
*           const RestroCard = () => {
           return (
            <div className="restro-card" style={{backgroundColor: "grey"}}>
            <h3>Aryan Resturant</h3>
            </div>
             )
            }
    Making restro cards dynamic     
- props
     -  used to pass properties to the component
     - these are just like passing normal arguments to a function.
     - when you have to dynamic pass data to a component we pass it as a prop
      
         e.g:  
         const RestroCard = (props) => {
    return (
 *       <div className="restro-card" style={styleCard}>
            <img className="restro-logo" alt="restro-logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.5 stars</h4>
            <h4>30 minutes</h4>
        </div>
    );
};     
         
*    const Body = () => {
    return (
 *     <div className="body">
         <div className="search">Search</div>
         <div className="restro-container">
             <RestroCard resName="Aryan Restaurant" cuisine="Contiental, Chinese, Fast Food & more"/>
             <RestroCard resName="McDonalds" cuisine="Burger, Fries & more"/>
             
         </div>
*       </div>
    )  
}

OR
------------
# we can write as below:
const RestroCard = (props) => {
const {resName, cuisine} = props

    return (
        <div className="restro-card" style={styleCard}>
            <img className="restro-logo" alt="restro-logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.5 stars</h4>
            <h4>30 minutes</h4>
        </div>
    );
};
----------------
We can write the above code as below also:
-Destructing on the fly:
      - this is in JavaScript
      - 
    *     const RestroCard = ({resName,cuisine}) => {
*    return (
*          <div className="restro-card" style={styleCard}>
            <img className="restro-logo" alt="restro-logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.5 stars</h4>
            <h4>30 minutes</h4>
        </div>
    );
};     
         
-----
# JSON VIEWER extension download.
--
# Config Driven UI:
    * The UI changes based on the data feeded from the backend.
    e.g  UI's will be different as per data provided to the cities.

# To separate array with comma's use:
     join(", ") 
        e.g.   <h4>{resData.info.cuisines.join(", ")}</h4>  

# Creatd list of array of data and use the data as below:
    e.g : <RestroCard resData ={restrolist[0]} />
    * using above syntax we can re-iterate n numbers of data by changing the array value [1]... so on. 

# key (unique key) [best practice]
  * Always give key while passing data
  * Doing this it will not re-render whole restrolist
  * By providing "key" it will uniquely identify the new resturant in the retroslist
  * Thus only render the newly added resturant, rest will not be re-rendered.
  * this increases the performance of app and reduces unnecessary re-rendering.

     e.g: 
      * {restrolist.map(restaurant => (
       *      <RestroCard key={restaurant.info.id} resData = {restaurant}/> 
             ))}

# index (not recommended) only use when key is not available
   * we can also use index instead of above acutal id. 
   # but NEVER USE index as suggest by React docs.
   * Because it is anti-pattern means:
         This will negatively impact the performance and may cause issues with the component state.


*    e.g : 
 {restrolist.map(restaurant => (
 *        <RestroCard key={index}  resData = {restaurant}/>
        ))}

# Two types of import and export files:
 * Default export:
    e.g  export default Body;
    import component from "path"
 * Named import/export:
    -> When we need to export multiple things from a single file.
    -> export const Component
    -> import { CDN_URL } from "../utils/contants";
    e.g    Contants.js
    export const CDN_URL =
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export const LOGO_URL = 
"https://i.postimg.cc/VLQY49Lz/Firefly-Hungry-Hub-Food-Delivery-App-Logo-Description-Create-a-modern-and-classy-logo-for-a-food.jpg"

# GOOD PRACTICE: KEEP YOUR COMPONENT FILE UPTO 200 LINES ONLY


