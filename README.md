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
          e.g: <div id="root" class="root" style="width 20px"></div>
   - Directly by using a javascript object:
            e.g: Here styleCard is JS object
          const styleCard = {
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
           const RestroCard = () => {
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
        <div className="restro-card" style={styleCard}>
            <img className="restro-logo" alt="restro-logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.5 stars</h4>
            <h4>30 minutes</h4>
        </div>
    );
};     
         
       const Body = () => {
    return (
       <div className="body">
         <div className="search">Search</div>
         <div className="restro-container">
             <RestroCard resName="Aryan Restaurant" cuisine="Contiental, Chinese, Fast Food & more"/>
             <RestroCard resName="McDonalds" cuisine="Burger, Fries & more"/>
             
         </div>
       </div>
    )  
}

OR
------------
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
         const RestroCard = ({resName,cuisine}) => {
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
         
-----
# JSON VIEWER extension download.
--
# Config Driven UI:
    * The UI changes based on the data feeded from the backend.
    e.g  UI's will be different as per data provided to the cities.

# To separate array with comma's use:
     join(", ") 
        e.g.   <h4>{resData.info.cuisines.join(", ")}</h4>   
