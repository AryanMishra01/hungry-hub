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

const AppLayout = () => {
return (
    <div className="app">
        <Header/>
    </div>
)

}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);