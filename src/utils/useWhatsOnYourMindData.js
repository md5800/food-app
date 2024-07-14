import { useEffect, useState } from "react";
import {ITEM_MENU_API} from "../utils/constants";

const useWhatsOnYourMindData = (collectionId,tags)=>{
const [whatsOnYourMindCategory, setWhatsOnYourMindCategory] = useState([]);

useEffect(()=>{fetchWhatsOnYourMindRes()},[]);

const fetchWhatsOnYourMindRes = async ()=>{
    // const categoryData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.499757&lng=88.3177647&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const categoryData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.499757&lng=88.3177647&collection=" + collectionId + "&tags=layout_CCS_" + tags + "&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json = await categoryData.json();
    console.log(json);
    console.log("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.499757&lng=88.3177647&collection=" + collectionId + "&tags=layout_CCS_" + tags + "&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    setWhatsOnYourMindCategory(json.data);
}
return whatsOnYourMindCategory;
}

export default useWhatsOnYourMindData;