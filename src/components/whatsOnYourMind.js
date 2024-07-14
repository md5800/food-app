import Shimmer from "./Shimmer";
import ResCard, {WithVegInfo, WithNonVegInfo} from "./ResCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useWhatsOnYourMindData from "../utils/useWhatsOnYourMindData";

const whatsOnYourMind = () =>{
    const {collectionId,tags} = useParams();
    const categoryMenu = useWhatsOnYourMindData(collectionId,tags);
    

    // if (categoryMenu.length === 0) return (
    //     <div className="shimmerbox">
    //         <div className="container">
    //             <div className="row">
    //                     <Shimmer/>
    //                     <Shimmer/>
    //                     <Shimmer/>
    //                     <Shimmer/>
    //                     <Shimmer/>
    //                     <Shimmer/>
    //                     <Shimmer/>
    //                     <Shimmer/>
    //                 </div>
    //             </div>
    //     </div>
    // )

    const categoryRes = categoryMenu?.cards?.filter(index => index?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
    console.log(categoryRes);
    return (
        <div className="mainsec whatsonyourmindpg">
            <div className="container">
            <div className="cardsec mt-5">
                    <h2>Restaurants to explore</h2>
                    <div className="row justify-content-start align-items-start">
                        {
                            categoryRes?.map(categoryData =>
                            <div className="col-md-3" key={categoryData?.card?.card?.info?.id}>
                                {/* <Link to={"/restaurant/" + categoryData?.card?.card?.info?.id}> 
                                     <ResCard resData={categoryData} />
                                </Link> */}
                                 {/* <ResCard resData={categoryData} /> */}

                                <Link to={"/restaurant/" + categoryData?.card?.card?.info?.id}>
                                    <div className="cardbox mt-5">
                                        <div className="cardimg">
                                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + categoryData?.card?.card?.info?.cloudinaryImageId} alt="cardimg" />
                                        </div>
                                        <div className="cardcontent">
                                        <h3 className="mt-3 mb-3">{categoryData?.card?.card?.info?.name} <span style={{color:"#000"}}>({categoryData?.card?.card?.info?.cuisines?.join(",")})</span></h3>
                                        <h5><i className="bi bi-star"></i> {categoryData?.card?.card?.info?.avgRating} <span className="dot-divider"></span> {categoryData?.card?.card?.info?.sla?.slaString} <span className="dot-divider"></span> {categoryData?.card?.card?.info?.costForTwo}</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                                        </div>
                                    </div>
                                </Link>

                                 
                                    
                            </div>
                            )  
                        }
                    </div> 
                </div>
            </div>
     
        </div>
    )
}

export default whatsOnYourMind;