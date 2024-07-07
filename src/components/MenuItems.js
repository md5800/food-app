import { useDispatch } from "react-redux";
import {ITEM_CARD_IMG} from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const MenuItems = ({data}) =>{
// console.log(data);

const dispatch = useDispatch();
const handleAddedItems = (item)=>{
// dispatch an action
dispatch(addItem(item));
}

return (
    <ul>     
        {data.map((item) => 
            <li className="menuitems" key={item?.card?.info?.id}>
                <div className="item-content w-75 pe-2">
                    <h3>{item?.card?.info?.name}</h3>
                    <p className="price"><i className="bi bi-currency-rupee"></i>{item?.card?.info?.price/100 || item?.card?.info?.variantsV2.pricingModels[0].price/100}</p>
                    <p className="star-rating"><i className="bi bi-star-fill"></i>{item?.card?.info?.ratings.aggregatedRating.rating}<span>({item?.card?.info?.ratings.aggregatedRating.ratingCountV2})</span></p>
                    <p className="text-xl leading-8 text-gray-500">{item?.card?.info?.description}</p>
                </div>
                <div className="item-img w-25">
                    {item?.card?.info?.imageId !== undefined ? <img src={ITEM_CARD_IMG + item?.card?.info?.imageId} alt="menu" /> : null}
                    {/* <img src={ITEM_CARD_IMG + item?.card?.info?.imageId} alt="menu" /> */}
                    <a href="javascript:void(0)" className="addtocart" onClick={()=>handleAddedItems(item)}>ADD</a>
                </div>  
             </li>
        )}     
    </ul>

)
}

export default MenuItems;