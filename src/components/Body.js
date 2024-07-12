import ResCard, {WithVegInfo, WithNonVegInfo} from "./ResCard";
// import resCardData from "../utils/cardData";
import { useState , useEffect , useContext} from "react";
import loader from "../img/loader.gif";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "../utils/UserContext";
import {WHATS_ON_YOUR_MIND_IMG} from "../utils/constants";
import Slider from "react-slick";
// Import slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import whatsOnYourMind from "./whatsOnYourMind"


const Body =() =>{
     
    const [whatsOnYourMind, setWhatsOnYourMind] = useState([]);
    const [newRestList, setNewRestList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const RestaurantVeg = WithVegInfo(ResCard);
    const RestaurantNonVeg = WithNonVegInfo(ResCard);
    const { setUserName, loggedInUser} =useContext(UserContext);



    useEffect(()=>{fetchData()},[]);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5015719&lng=88.3209437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);
        
        setNewRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setWhatsOnYourMind(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);

    };
 
  const internetStatus = useOnlineStatus();
  if(internetStatus === false){
    return <h1>Looks like, You are offline</h1>
  }

  const [searchText, setSearchText] = useState("");


  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3
  };

// <div className="loaderbox">
    //     <img src={loader} alt="loader" />
// </div>
   
// conditional rendering
    // if(newRestList.length === 0){
    //     return (
    //         <div className="shimmerbox">
    //             <div className="container">
    //                 <div className="row">
    //                         <Shimmer/>
    //                         <Shimmer/>
    //                         <Shimmer/>
    //                         <Shimmer/>
    //                         <Shimmer/>
    //                         <Shimmer/>
    //                         <Shimmer/>
    //                         <Shimmer/>
    //                     </div>
    //                 </div>
    //         </div>
    //     )
    // }
    
    // console.log(newRestList);

    return (newRestList.length === 0) ? 
    (
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
    : (
        <div className="mainsec">
            <div className="container">
                <div className="topbar pb-5 pt-3">
                    <div className="row justify-content-between align-items-start">
                        <div className="col-md-4">
                            <div className="searchbox d-flex">
                                <input className="form-control" type="text" placeholder="Search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                                <button className="btn"  onClick={
                                    () =>{
                                    // console.log(searchText);
                                    const filterRest = newRestList.filter((rest)=>rest.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                    setFilteredRestaurant(filterRest);
                                    }
                                } >Search</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="username searchbox d-flex justify-start items-center">
                                <label>User Name:</label>
                                <input className="form-control" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-3 text-end">
                            <button  className="filter-btn" onClick={
                                ()=>{const filteredList  = newRestList.filter((res)=> res.info.avgRating>4.3);
                                // console.log(filteredList);
                                setFilteredRestaurant(filteredList);
                                }
                            }>Top Rated Restautant</button>
                        </div>
                    </div>
                </div>
                
                <div className="whatonmindsec">
                  <h2>What's on your mind?</h2>
                  {/* <h2>{json?.data?.cards[0]?.card?.card?.header?.title}</h2> */}
                  <div className="row">
                  {/* <Slider {...settings}>
                    {
                        whatsOnYourMind.map((whatonmind)=>(
                            <div className="col-md-2" key={whatonmind.id}>
                                <Link to={whatonmind.action.link}> 
                                    <div className="image">
                                        <img src={WHATS_ON_YOUR_MIND_IMG + whatonmind.imageId} alt="" />
                                    </div>
                               </Link>
                            </div>
                        )) 
                    }
                    </Slider> */}
                    <Slider {...settings}>
                    {
                        whatsOnYourMind.map((whatonmind)=>(
                            <div className="col-md-2" key={whatonmind.id}>
                                <Link to={"/whatsOnYourMind/" + whatonmind.id} > 
                                    <div className="image">
                                        <img src={WHATS_ON_YOUR_MIND_IMG + whatonmind.imageId} alt="" />
                                    </div>
                               </Link>
                            </div>
                        )) 
                    }
                    </Slider>
                  </div>
                </div>



                <div className="cardsec mt-5">
                    <h2>Top restaurant chains in Kolkata</h2>
                    <div className="row justify-content-start align-items-start">
                        {
                            filteredRestaurant.map(restaurantData =>
                            <div className="col-md-3" key={restaurantData.info.id}>
                                <Link to={"/restaurant/" + restaurantData.info.id }> 
                                {restaurantData.info.veg ? (<RestaurantVeg resData={restaurantData} />) : (<RestaurantNonVeg resData={restaurantData} />)}
                                {/* <ResCard resData={restaurantData} /> */}
                                </Link>
                            </div>
                            )  
                        }
                        {/* <ResCard resData={resCardData[0]} />
                        <ResCard resData={resCardData[1]} />
                        <ResCard resData={resCardData[2]} />
                        <ResCard resData={resCardData[3]} />
                        <ResCard resData={resCardData[4]} />
                        <ResCard resData={resCardData[5]} />
                        <ResCard resData={resCardData[6]} />
                        <ResCard resData={resCardData[7]} />
                        <ResCard resData={resCardData[8]} /> */}
                    </div> 
                </div>
            </div>
        </div>
    );
}


export default Body;