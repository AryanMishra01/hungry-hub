import { LOGO_URL } from "../utils/constants";
import { useState, useEffect} from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  //if no dependency array ==> useEffect is called on every render
  //if empty dependency array = [] ==> useEffect is called on initial render (just once) 
  // if dependency array is [btnName] => useEffect is called everytime btnName is updated.
//useEffect(() => {}, [])


  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
