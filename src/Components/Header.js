import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
const [btnName, setBtnName] = useState("Login");
const onlineStatus = useOnlineStatus();

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
          <li>Online Status: {onlineStatus ? "✅" : "🔴" } </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
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
