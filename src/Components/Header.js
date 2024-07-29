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
    <div className="flex justify-between shadow-md mb-2 bg-yellow-50">
      <div className="logo-container">
      <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5 font-bold">
          <li className="px-4 text-slate-500">Online Status: {onlineStatus ? "✅" : "🔴" } </li>
          <li className="px-4  text-slate-950 hover:text-blue-600"><Link to="/">Home</Link></li>
          <li className="px-4  text-slate-950 hover:text-blue-600"><Link to="/about">About Us</Link></li>
          <li className="px-4  text-slate-950 hover:text-blue-600"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4  text-slate-950 hover:text-blue-600"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4  text-slate-950 hover:text-blue-600"><Link to="/cart">Cart</Link></li>
          <button
            className="px-4  text-slate-950 hover:text-blue-600"
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
