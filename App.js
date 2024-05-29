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

const styleCard = {
   backgroundColor: "#f0f0f0"

}
const RestroCard = (props) => {
const {resData} = props;

    return (
        <div className="restro-card" style={styleCard}>
            <img className="restro-logo" alt="restro-logo" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

const restroObj = {
    info: {
        id: "55473",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Sector 10",
        areaName: "Rohini",
        costForTwo: "₹350 for two",
        cuisines: [
          "Pizzas",
          "Garlic Bread",
          "Choco Volcano"
        ],
        avgRating: 4,
        parentId: "721",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-05-30 04:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹189"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        }
      },
      analytics: {
        
      },
      cta: {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-sector-10-rohini-delhi-55473",
        "type": "WEBLINK"
      },    
}
    

const Body = () => {
    return (
       <div className="body">
         <div className="search">Search</div>
         <div className="restro-container">
             <RestroCard resData ={restroObj} />
         </div>
       </div>
    )  
}



const AppLayout = () => {
return (
    <div className="app">
        <Header/>
        <Body />
    </div>
)

}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);