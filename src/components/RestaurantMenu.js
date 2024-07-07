import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {ITEM_CARD_IMG} from "../utils/constants";
import { useParams } from "react-router-dom";
import {ITEM_MENU_API} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () =>{

const {resId} = useParams();
const resMenu = useRestaurantMenu(resId);

const [showIndex, setShowIndex] = useState(0);

// const [resMenu, setResMenu] = useState([]);
// useEffect(()=>{fetchResMenu()},[]);
// const fetchResMenu = async () =>{
//     const menuData = await fetch(ITEM_MENU_API + resId);
//     // const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5015719&lng=88.3209437&restaurantId=49726&catalog_qa=undefined&isMenuUx4=true&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A155663%2C%22primaryRestaurantId%22%3A150070%2C%22cloudinaryId%22%3A%22g2nidvu2kprlq6opd31z%22%2C%22brandId%22%3A155663%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION");
//     const json = await menuData.json();
//     console.log(json);
//     setResMenu(json.data);
// }

if (resMenu.length === 0) return (
    <div className="shimmerbox">
        <div className="container">
            <div className="row">
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                </div>
            </div>
    </div>
)

const {name,avgRating,totalRatingsString,costForTwoMessage,cuisines,areaName,city,sla} = resMenu?.cards[2]?.card?.card?.info;

const menuItems = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

const menuCategory = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(index => index?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

// console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
// console.log(menuCategory);


return(
    <div className="resmenuwrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8"> 
              <h1>{name}</h1>
              <div className="overviewbox">
                <div className="d-flex justify-content-start">
                  <h5><i className="bi bi-star"></i> {avgRating} ({totalRatingsString}) <span className="dot-divider"></span> {costForTwoMessage}</h5>
                </div>
                <p className="cuisine">{cuisines}</p>
                <p><i className="bi bi-geo-alt-fill"></i> {areaName}, {city}</p>
                <p className="mb-0"><i className="bi bi-hourglass-split"></i>{sla?.slaString}</p>
              </div>
              {/* lifting state up/controlled component */}
              {menuCategory.map((category, index) =>(<RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index === showIndex? true : false} setShowIndex={()=>setShowIndex(index)}/>))}


              {/* <h2>Recommended({menuItems.length})</h2>
              <ul>     
                {menuItems.map(item => 
                  <li className="menuitems" key={item.card.info.id}>
                    <div className="item-content">
                      <h3>{item.card.info.name}</h3>
                      <p className="price"><i className="bi bi-currency-rupee"></i>{item.card.info.price/100 || item.card.info.variantsV2.pricingModels[0].price/100}</p>
                      <p className="star-rating"><i className="bi bi-star-fill"></i>{item.card.info.ratings.aggregatedRating.rating}<span>({item.card.info.ratings.aggregatedRating.ratingCountV2})</span></p>
                    </div>
                    <div className="item-img">
                        {item.card.info.imageId !== undefined ? <img src={ITEM_CARD_IMG + item.card.info.imageId} alt="menu" /> : null}
                        <a href="" className="addtocart">ADD</a>
                    </div>  
                  </li>
                )}     
              </ul> */}
          </div>
        </div>
      </div>      
  </div>
)
}


export default RestaurantMenu;