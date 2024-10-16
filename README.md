/\*\*

- Header
- -Logo
  -Nav Items
- Body
  - Search
  - Restro Container
    - Restro Cards
      - Image
      - Name of Resturant, Star Rating, cuisine, dilevery time.
- Footer - Copyright - Links - Address
  \*/

CSS:

- Inside index.css
- Inline style in index.html

*         e.g: <div id="root" class="root" style="width 20px"></div>
  - Directly by using a javascript object:
    e.g: Here styleCard is JS object
*          const styleCard = {
           backgroundColor: "grey"
          }
          const RestroCard = () => {
           return (
            <div className="restro-card" style={StyleCard}>
            <h3>Aryan Resturant</h3>
            </div>
             )
            }

            or we can directly ingest it by below syntax"
               e.g:

*           const RestroCard = () => {
           return (
            <div className="restro-card" style={{backgroundColor: "grey"}}>
            <h3>Aryan Resturant</h3>
            </div>
             )
            }
  Making restro cards dynamic

- props
  - used to pass properties to the component
  - these are just like passing normal arguments to a function.
  - when you have to dynamic pass data to a component we pass it as a prop
    e.g:
    const RestroCard = (props) => {
    return (

*       <div className="restro-card" style={styleCard}>
              <img className="restro-logo" alt="restro-logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"/>
              <h3>{props.resName}</h3>
              <h4>{props.cuisine}</h4>
              <h4>4.5 stars</h4>
              <h4>30 minutes</h4>
          </div>
      );

  };

* const Body = () => {
  return (
*     <div className="body">
        <div className="search">Search</div>
        <div className="restro-container">
            <RestroCard resName="Aryan Restaurant" cuisine="Contiental, Chinese, Fast Food & more"/>
            <RestroCard resName="McDonalds" cuisine="Burger, Fries & more"/>

        </div>

*       </div>
      )
  }

## OR

# we can write as below:

const RestroCard = (props) => {
const {resName, cuisine} = props

    return (
        <div className="restro-card" style={styleCard}>
            <img className="restro-logo" alt="restro-logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.5 stars</h4>
            <h4>30 minutes</h4>
        </div>
    );

## };

We can write the above code as below also:
-Destructing on the fly: - this is in JavaScript - \* const RestroCard = ({resName,cuisine}) => {

- return (
-          <div className="restro-card" style={styleCard}>
              <img className="restro-logo" alt="restro-logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"/>
              <h3>{resName}</h3>
              <h4>{cuisine}</h4>
              <h4>4.5 stars</h4>
              <h4>30 minutes</h4>
          </div>
      );
  };

---

# JSON VIEWER extension download.

--

# Config Driven UI:

    * The UI changes based on the data feeded from the backend.
    e.g  UI's will be different as per data provided to the cities.

# To separate array with comma's use:

     join(", ")
        e.g.   <h4>{resData.info.cuisines.join(", ")}</h4>

# Creatd list of array of data and use the data as below:

    e.g : <RestroCard resData ={restrolist[0]} />
    * using above syntax we can re-iterate n numbers of data by changing the array value [1]... so on.

# key (unique key) [best practice]

- Always give key while passing data
- Doing this it will not re-render whole restrolist
- By providing "key" it will uniquely identify the new resturant in the retroslist
- Thus only render the newly added resturant, rest will not be re-rendered.
- this increases the performance of app and reduces unnecessary re-rendering.

  e.g:

  - {restrolist.map(restaurant => (
  -      <RestroCard key={restaurant.info.id} resData = {restaurant}/>
        ))}

# index (not recommended) only use when key is not available

- we can also use index instead of above acutal id.

# but NEVER USE index as suggest by React docs.

- Because it is anti-pattern means:
  This will negatively impact the performance and may cause issues with the component state.

- e.g :
  {restrolist.map(restaurant => (
-        <RestroCard key={index}  resData = {restaurant}/>
       ))}

# Two types of import and export files:

- Default export:
  e.g export default Body;
  import component from "path"
- Named import/export:
  -> When we need to export multiple things from a single file.
  -> export const Component
  -> import { CDN_URL } from "../utils/contants";
  e.g
- Contants.js
  -> export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export const LOGO_URL =
"https://i.postimg.cc/VLQY49Lz/Firefly-Hungry-Hub-Food-Delivery-App-Logo-Description-Create-a-modern-and-classy-logo-for-a-food.jpg"

# GOOD PRACTICE: KEEP YOUR COMPONENT FILE UPTO 200 LINES ONLY

# onClick event handler

     e.g:
     <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(listOfRestaurants)
          }}
        >
          Top Rated Restaurants{" "}
        </button>
      </div>

- To display the filtered data on UI:
  => We need to use #HOOKS
  _ It is normal JS utility function with powers
  _ Two very important hooks 1. useState() - superpowerful state variable
  e.g:
  //State variable - super powerfull variable
  const [variableList, setvariableList] = useState(defaultData);
- Whenever a state variable updates react re-renders the component. 2. useEffect()

# Reconciliation Algorithm or React Fiber (React 16):

- Documentation:
  => https://github.com/acdlite/react-fiber-architecture

# Microservice Architecture

- Structured and indepedent services.
- Combined together to form an APP.
  Note: Hungry-Hub is an UI micro service written in React
- We can write micro services in different languages.
  i.e. 1. Backend could be in Java 2. Datbase could be in Python 3. SMS Services could be in GoLang etc.

- These services runs on different server:
  - example:
    1.  UI: http://localhost:1234
    2.  Backend: 1000
    3.  SMS: 3000
- We can connect them with different url codes:
  1.  UI: /
  2.  Backend: /api
  3.  SMS: /sms

# Two approaches to fetch data from backend:

1. On page load:
   page load=> API calls => UI renders with DATA.

   - We can only see UI once the dta is fetched and need to wait till this process is done.

2. After page load: (Recommended)
   page load=> Render the UI => API CALL => re-render the UI with fetched data.

# useEffect():

- normal function which has:

  1.  First Argument as callback function:

      - This will be called after your component renders.

  2.  Second Argument as dependency array.
      example:
      useEffect{()=> {}, []}

# .fetch

- this is given by js engines of browsers.
- when we pass api url to it, it will return promise.
- We can resolve promise with:
  # .then
  # .catch
  # async/await (Recommended)
- Then we need to convert the data in JSON format.
  e.g:
- useEffect(()=> {
  fetchData();
  }, [])

const fetchData = async () =>{
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
);

const json = await data.json();
console.log(json)
setListOfRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

}

# CORS

# We cannot directly fetch data from swiggy api: due to CORS policy

- Our Broswers are not allowing to call Swiggy's api from local host.
  i.e from one origin to another origin.

# Remedy: add CORS Extentions in browser.

# To give this JSON data we need to ingest it in the state variable

- Make sure to write exact api path of array
  setListOfRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

# do optional chaining (Recommended):

      setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

# Cannot find module 'react' in reactjs.

- use this command : npm install --save react react-dom @types/react @types/react-dom

# To enable search: bind local state to the value and enable onChange to reflect it in text:

<!-- e.g  <input type="text" className="search-box" value={searchtext} onChange={(e) => {setSearchText(e.target.value)}}/> -->

# Note: Whenever state variable update, react triggers a reconcilation cycle (re-renders the component)

# Remove CORS error by appending https://corsproxy.io/? in front of the api call.

# useEffect: useEffect(() => {}, [])

- //if no dependency array ==> useEffect is called on every render
- //if empty dependency array = [] ==> useEffect is called on initial render (just once)
- // if dependency array is [btnName] => useEffect is called everytime btnName is updated.

# useState: const [state, letState]= useState("")

- Never create useState outside the body.
- Never create useState inside loops.
  e.g for loop/ if loop
- Never create useState inside a function.

# Install React Router DOM: npm i react-router-dom

# useRouteError

- This hook is used to give extra info about error

# children route for pages using

- Outlet

# Never use anchor tag with href

- Because the whole page refreshes.

# We can route without reloading the page:

# Link component:

- Behind the scenes it is using anchor tag and href.
- Link is a wrapper over anchor tag
<!-- e.g: <li><Link to="/contact">Contact Us</Link></li>  -->

# Two types of routing in web apps

- Client Side Routing:
  1. All the routing of pages comes under it using react router dom.
  2. It dosn't make any network calls.
- Server Side Routing: When we use anchor tag with href it makes call to about.html page and fetchs it then renders on the page while refreshing the whole page.

# useParams

- It is a hook given by react router dom.
- Used to read resID in urls

# Class Based Component.

- Life Cycle: Constructor -> Render -> ComponentDidMount
  for. eg:
- Parent Constructor
- Parent Render
- Child Constructor
- Child Render
- Child ComponentDidMount
- Parent ComponentDidMount

- If we have lets say 2 child class component; React will reconsolidate the process and create batches of rendering and commiting phase.
- Parent Constructor
- Parent Render
- Child Constructor
- Child Render
- Child2 Constructor
- Child2 Render
- Child ComponentDidMount
- Child2 ComponentDidMount
- Parent ComponentDidMount

# In class based components:

- We need to unmount incase we have explicitly put something in componentDidMount e.g setInterval by using:
  componentWillUnmount

# In Functional Components:

- if we use setInterval in useEffect(()=>{},[]); and then we switch to another componenet on the page; it will not stop the setInterval because we are not cleaning up:
- To clean it:
  useEffect(()=> {
  const timer = setInterval(() => {
  console.log("setInterval");
  }, 1000);
  return () => {
  //Unmounting
  clearInterval(timer);
  }
  },[])

In React: it wants to render it's component as qucikly as possibile and then makes the Api's call using below methods.

For ClassBasedComponent-->>>>>

# ComponentDidMount:

- We make API calls inside it.
  For Functional Component-->>>>

# useEffect:

    * We make API calls inside it.

# LifeCycleMethod in React:

- It has two phases:
  1. Rendering phase
  2. Commit phase

Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# Single responsibility principle

- Any component created should only perform the tasks for its work.
- Keeping the modules smaller and task specific leads to easier

1.  Testing
2.  Maintainability
3.  Reusability

# CUSTOM HOOKS

- All hooks are utility functions.
- It's not mandatory to create custom hooks.

# Online event listner

- window.addEventListener("offline", () => {
  setOnlineStatus(false);
  })

# Windows Key + .

- opens EMOJI panel

# Chunking/ Code Splitting/ Dynamic Bundling / Lazy Loading/ On Demand Loading/ Dynamic Import

- Bundling application fucntionality individually.
- Decreasing the size of JS file will increase the performance of the app.
- Splitting JS file into smaller JS file bundles using lazy function.
- Only load the code/page when the tab is clicked (lazy laoding)
  for eg: using function lazy().
  - import React , {lazy} from "react";
  - const Grocery = lazy(()=> import("./Components/Grocery"))
  <!--callback-->
  <!-- const Grocery = lazy(()=> import("path")) -->
- Since it takes time to load the lazy loaded page; React will throw error.
- To resolve this issue:
  - Suspense is used.
  - Import it and then WRAP the component with Suspense.
  - Give a "fallback" (similar to shimmer UI, we can pass Shimmer UI component as well)when the code loads on the screen; since it takes time to load code using lazy loading.
  - In fallback we can pass JSX
  <!-- import React , {lazy, Suspense} from "react";
    {
     path: "/grocery",
      element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
   }, -->

# Recommended ways to ad CSS in project.

    * SCSS or SASS
    * Styled components.
    * Material UI
    * Bootstrap
    * Chakra UI
    * Ant Design
    * Tailwind CSS

# Tailwind CSS:

- Install:
   <!-- npm install -D tailwindcss postcss
   npx tailwindcss init -->
- postcss:

  - Tool to transform CSS with JS.
  - Tailwind uses postcss behind the scene.

- npx tailwindcss init:
  - We're intiallizing tailwindcss in our repository.
  - It creates "tailwind.config.js"
- Create a .postcssrc file in root.
  - This helps parcel bundler to understand what is written in tailwind.

# Tailwind use:

- flex - sets the ui as per page
- w-56 - set the width
- justify-between - equal sapce between texts.
- p-5 - padding
- m-5 - margin
- mb-2 - margin bottom
- items-center - aligns items to center
- px-4 - padding on X-axis
- py-4 - padding on Y-axis
- w-[200px] - making own width size
- flex-wrap - To wrap cards
- text-lg - text large
- font-bold - BOLD font

# Install Tailwind CSS IntelliSense:

- for easier use.
- Incase it doesn't give sugesstion use:
  - CTRL + SPACEBAR

# Higher ORDER Function (HOC)

- HOC is a function that take a component and returns a component.
- It enahces an existing component and returns it back.

# Lifting state up

# Props Drilling:

- If we want to pass data(props) from parent to a specific child we cannot do it until we pass the data (props) through the child trees below it.
- To solve this issue we use: "useContext"

# React Context: we can create multiple context

- createContext: to create a context
  import { createContext } from "react";
  const UserContext = createContext({
  loggedInUser: "Default User"
  });
  export default UserContext;

- useContext: to use the context created
  import { useState, useContext} from "react";
  const {loggedInUser} = useContext(UserContext)

- Provider
<!-- * <UserContext.Provider  value={{loggedInUser: userName}>
   
  1. We can wraps the whole App.js.
  
  2. We can wrap particular component with it with different value

  3. This will give you the value passed as props, not the value mentioned in UserContext.

</UserContext.Provider> -->

# usecontext in Class based:

    <!-- * <UserContext.Consumer>
     {({loggedInUser}) => (<h1>{loggedInUser}</h1>)}
    </UserContext.Consumer>

-->

# REDUX:

- It's not mandatory to use it.
- Alterante to it is "zustand"
- Advantages:
  - Used for handling state of our application.
  - It is easier to debug.
- Extention:
  - Redux dev tools
- Two libraries offered by REDUX
  _ React-Redux (learning curve was very high)
  _ Redux Toolkit [RTK](standard way to write)
- Advantages of REDUX TOOLKIT [RTK]:
  _ It doesn't have to add a lot of packages to get Redux to do anything useful.
  _ Shorter Code.

- Architecture of Redux:
     <!-- * We will store cart's information in our REDUX STORE. -->

# TO WRITE DATA:

     * REDUX STORE:
         * JS object with lots of data inside it.
         * It is kept in a global central place.
         * Any component can read/write or edit data from it.

     * SLICES:
          * We make logical partitions
          * These logical partitions are SLICES.
     * We cannot directly modify Cart in redux:
          * To do that we need: DISPATCH an ACTION.
          * ACTION will calls a FUNCTION(REDUCER) which motifies the CART.
          * This REDUCER updates the slice of our REDUX STORE.

# TO READ DATA:

     * SELECTOR will read the data and modifiy our react component.
     * The above phenomenon is known as Subscribing to the store.

# REDUX Flow:

      Click[Add]-->Dispatches [Action] --> Reducer[Function] -->Store[Slice] -->Subscribes [Selector] --> Updated

# REDUX TOOLKIT:

- Install @reduxjs/toolkit and react-redux
- Build our own store:
  import { configureStore } from "@reduxjs/toolkit"
  appStore.js
- Connect our store to our app:
import { Provider } from "react-redux";
<!-- <Provider store={appStore}>
<UserContext.Provider value={{loggedInUser: userName, setUserName}}>
<div className="app">
  <Header />
  {/** Outlet will populate the children from appRoute*/}
  <Outlet/>
</div>
</UserContext.Provider>
</Provider> -->
- Slice (cartSlice)
  import { createSlice } from "@reduxjs/toolkit"
  cardSlice.js
- dispatch(action)
- Selector
  import { useSelector } from "react-redux";
  Header.js

# Things to remember in REDUX SUBSCRIBE:

- Make sure to subscribe to the right portion of the STORE.
- Because this could cause performance loss.

# Things to remember in REDUX REDUCER/REDUCERS:

- We only use reducer in appStore.
- "reducers" are only used when create slice; But it is exported as reducer. ; cardSlice.js.

# RTK QUERY: READ https://redux-toolkit.js.org/tutorials/rtk-query

# TESTING (DEV Point of View)

- Manual Testing
  - After developing a feature; check the basic functinality.
- CODE to perform TESTING.

# Types of testing (developer)

# Unit Testing (important)

# Integration Testing (important)

- End to End Testing - e2e Testing. (cypress/selenium)

# Unit Testing:

- Isolating one component and testing it.

# Intergration Testing:

- Checking the interaction of multipe component which results into a specific output.

# End To End Testing: (cypress/selenium)

- How the user will flow throughout the applicaton.

# SETTING UP TESTING IN OUR APP:

- install React Testing Library.
  npm install -d @testing-library/react
- It uses JEST:
  npm -i -d jest \* It is a JavaScript Testing Framework with a focus on simplicity.
- Install Babel:
  npm install --save-dev babel-jest @babel/core @babel/preset-env
- Configure the babel.config.js from jest website.
- Configure Parcel Config file to diable BABEL TRANSPILATON
  - Since PARCEL has its own Babel configuration but incase we need to use our own configuration:
  - We can choose to DISABLE BABEL TRANSPILATON in PARCEL when using Jest or linters like ESlint.
  - Read Doc:
    https://parceljs.org/languages/javascript/#babel

- Jest Configuration:
  npx jest --init

  - Using Typescript: NO
  - Choose test environment: jsdom(browser-like)
    - These test cases don't run on browsers, they would need an environment. which is "jsdom"
  - Do you want Jest to add coverage reports: Yes
  - Which provider should be used to instrument code for coverage: BABEL
  - Automatically clear mock calls, instances, contexts and results before every test: yes

- File would be created for jest.config,js
# Note: If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.
* Install jest-environment-jsdom package:
   npm install --save-dev jest-environment-jsdom
* Install babel: To make JSX work in test cases.
     npm i -d @babel/preset-react
* Include @babel/preset-react inside the babel config (babel.config.js):
      ['@babel/preset-react', {runtime: 'automatic'}]
* Install @testing-library/jest-dom
      1. npm i -D @testing-library/jest-dom
      2. import "@testing-library/jest-dom" in your testing module.
     

# To run test cases:

     * npm run test

# optional to install extension: vscode-icons.

# Format of TEST files:
  * __test__
    * _ _ means dunder 
    * lets say Reserved for test file.
  * Header.test.js
  * Header.test.ts
  * Header.spec.js
  * Header.spect.js

# Test function format:
   * it takes two argument:
      * string
      * callback function
   * test("Sum function", () => {

   })

# UNIT TESTING
# it/test: we can use both 
# describe("Contact page test cases", () => {
<!-- 
it("", () => {
or
  test("", () => {
     
     return(<Contact/>)
     //quering:
       const heading = screen.toGetByRole("heading")
     //assertion 
       expect(heading).toBeInTheDocument()
  })
  // we can club all test cases under one describe.
}) -->

# Important things to import while unit testing:
 1. import "@testing-library/jest-dom"
 2. import { fireEvent, render, screen } from "@testing-library/react";
     2.1:  fireEvent: used to click on button
     2.2:  render: to render the page
     2.3:  screen: to check on the screen for the text,button
  EXAMPLES could be seen in Header.test.js file.
 3. Make sure to import dependecies of the module in the test file as well.

# INTEGRATION TESTING:
# Creating a dummy/mock fetch function for test case:
1. global.fetch: It will replace the function.

# To run test automatically on saving test cases write this is package.json under "scripts"
   "test": "jest",
    "watch-test": "jest --watch"
  },

# import { act } from "react"
 1. act returns a promise.
 2. act is a function which takes an async callback function 
 3. this will return render and this render will render your body component. 
  
# getByTestId
 1. we can provide data-testid attribute to element for testing which could be read by jest.
    e.g.  data-testid="searchInput"

# beforeAll, beforeEach, AfterEach, AfterAll test cases.

# Good Practice for testing is: Mininum of 80 to 90 percentage.



  



































