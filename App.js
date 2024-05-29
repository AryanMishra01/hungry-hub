import React from "react";
import ReactDOM from "react-dom/client"


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src="https://i.postimg.cc/VLQY49Lz/Firefly-Hungry-Hub-Food-Delivery-App-Logo-Description-Create-a-modern-and-classy-logo-for-a-food.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
   backgroundColor: "#f0f0f0"

}
const RestroCard = () => {
    return (
        <div className="restro-card" style={styleCard}>
            <img className="restro-logo" alt="restro-logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"/>
            <h3>Aryan Restaurant</h3>
            <h4>Fast Food, Chinese, Continental</h4>
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
             <RestroCard/>
             <RestroCard/>
             <RestroCard/>
             <RestroCard/>
             <RestroCard/>
             <RestroCard/>
             <RestroCard/>
             <RestroCard/>
             <RestroCard/>
             <RestroCard/>
             <RestroCard/>
             <RestroCard/>
             <RestroCard/>
             <RestroCard/>
         </div>
       </div>
    )  
}



const AppLayout = () => {
return (
    <div className="app">
        <Header/>
        <Body />
    </div>
)

}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);