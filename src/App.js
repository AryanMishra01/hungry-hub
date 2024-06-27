import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import Body from "./Components/Body";
import About from "./Components/About";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Contact from "./Components/Contact";
import Error from "./Components/Error";

const AppLayout = () => {
  return (
      <div className="app">
          <Header/>
          <Body />
      </div>
  )
  
  }

  //declaring PATH AND WHICH ELEMENT TO OPEN using createBrowserRouter
  // to handle error use: 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <Error/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    
  ])
/**using map
  * Here we have looped over the restrolist
  * for each restaurant we're returning a JSX i.e: RestroCard with resturant data.
  */
/** key:  
     * Always give key while passing data
     * Doing this it will not re-render whole restrolist
     * By providing "key" it will uniquely identify the new resturant in the retroslist
     * Thus only render the newly added resturant, rest will not be re-rendered.
     * this increases the performance of app and reduces unnecessary re-rendering.
     */






const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>);