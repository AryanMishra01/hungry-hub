import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";


//lazy loading
const Grocery = lazy(()=> import("./Components/Grocery"))
const About = lazy(()=> import("./Components/About"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/** Outlet will populate the children from appRoute*/}
      <Outlet/>
    </div>
  );
};

//declaring PATH AND WHICH ELEMENT TO OPEN using createBrowserRouter
// to handle error use: errorElement
//children: to render pages accordingly
// Giving dynamic path:  path: "/restaurants/:resId",
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense> ,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  },
]);
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

root.render(<RouterProvider router={appRouter} />);