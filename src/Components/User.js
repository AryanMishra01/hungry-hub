import { useEffect, useState } from "react";
//import { User_Info } from "../utils/constants";
import Shimmer from "./Shimmer";

// const User = ({name}) => {
const User = () => {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    getUserInfo();
    const timer = setInterval(() => {
      console.log("setInterval");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("useEffect_Return");
    };
  }, []);

  const getUserInfo = async () => {
    const data = await fetch("https://api.github.com/users/AryanMishra01");
    const json = await data.json();
    // console.log("heheh",json)
    setUserInfo(json);
  };
  if (userInfo === null) return <Shimmer />;

  const { name, location, url } = userInfo;

  console.log("render");
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increae Count
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>URL: {url}</h4>
      <h5>Example from Functional Component</h5>
    </div>
  );
};

export default User;
