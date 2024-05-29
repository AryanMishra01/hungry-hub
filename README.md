/**
 * Header
 *  -Logo
    -Nav Items
 * Body
    - Search
    - Restro Container
      - Restro Cards
         - Image
         - Name of Resturant, Star Rating, cuisine, dilevery time.
 * Footer
     -  Copyright
     -  Links
     -  Address 
 */

 CSS:
   - Inside index.css
   - Inline style in index.html
          e.g: <div id="root" class="root" style="width 20px"></div>
   - Directly by using a javascript object:
            e.g: Here styleCard is JS object
          const styleCard = {
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
           const RestroCard = () => {
           return (
            <div className="restro-card" style={{backgroundColor: "grey"}}>
            <h3>Aryan Resturant</h3>
            </div>
             )
            }
         
