import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Hungry Hub About Page</h2>
            <User/>
       {/* <User name={"Aryan Mishra (Functional component)"}/> */}
            <UserClass name={"Aryan Mishra (Class Component)"} location={"India Class Component"}/> 
       </div> 
    )
}

export default About;