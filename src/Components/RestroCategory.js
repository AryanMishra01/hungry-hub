import { useState } from "react";
import ItemList from "./ItemList";

const RestroCategory = ({data}) => {
console.log("RestroCategory",data)

const [showItems, setShowItems] = useState(false)
//Toggle Accordion 
const handleClick = () => {
    setShowItems(!showItems)
}
    return (
        <div>
            {/*HEADER */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
              <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                 <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇</span>
                </div> 
                  {/*Accordion Body */}
          { showItems && <ItemList items={data.itemCards}/>}
            </div>
           
        </div>
    )
}

export default RestroCategory;