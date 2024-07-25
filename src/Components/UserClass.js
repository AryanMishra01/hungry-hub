//ClassBasedComponent.
import React from "react";
//or
//import { Component } from "react";

//class UserClass extends Component {
class UserClass extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        count: 0,
        userInfo: {
          name: "Dummy",
          location: "Default",
          avatar_url: ""
        }
    }
}

async componentDidMount() {
  const data = await fetch("https://api.github.com/users/AryanMishra01")
  const json = await data.json()
  console.log("Class",json)

  this.setState({
    userInfo: json
  })
}

  render() { 
    const {count} = this.state
    const {name, location, avatar_url} = this.state.userInfo
    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
          <div>
        <button onClick={() => (
            // NEVER UPDATE STATE VARIABLES DIRECTLY
          this.setState({
            count: this.state.count +1,
          })
        )}>Increase Count</button> 
        </div>
<br/>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Email: aryanmishrareact@gmail.com</h4>
        <h5>Example of ClassBasedComponent</h5>
      </div>
    );
  }
}

export default UserClass;