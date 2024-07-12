import { useEffect, useState } from "react";
import {ITEM_MENU_API} from "../utils/constants";

const useRestaurantMenu = (resId)=>{
const [resMenu, setResMenu] = useState([]);

useEffect(()=>{fetchResMenu()},[]);

const fetchResMenu = async ()=>{
    const menuData = await fetch( ITEM_MENU_API + resId);
    const json = await menuData.json();
    console.log(ITEM_MENU_API + resId);
    setResMenu(json.data);
}
return resMenu;
}

export default useRestaurantMenu;