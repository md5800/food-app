import { useState, useEffect } from "react";

const useRestaurantDetails =() =>{

    const [newRestList, setNewRestList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(
        ()=>{fetchData()}, []
    );

    const fetchData =async ()=>{
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5015719&lng=88.3209437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();
       setNewRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return [newRestList,filteredRestaurant ];
}

export default useRestaurantDetails;