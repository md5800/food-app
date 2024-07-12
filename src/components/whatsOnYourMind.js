import Shimmer from "./Shimmer";
import ResCard, {WithVegInfo, WithNonVegInfo} from "./ResCard";
import { useParams } from "react-router-dom";
import useWhatsOnYourMindData from "../utils/useWhatsOnYourMindData";

const whatsOnYourMind = () =>{
    const {collectionId,tags} = useParams();
    const categoryMenu = useWhatsOnYourMindData(collectionId,tags);
    console.log(categoryMenu);

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

    // const categoryRes = categoryMenu.data.cards.filter(index => index?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
    // return (
    //     <div className="mainsec whatsonyourmindpg">
    //         <div className="container">
    //         <div className="cardsec mt-5">
    //                 <h2>Restaurants to explore</h2>
    //                 <div className="row justify-content-start align-items-start">
    //                     {
    //                         categoryRes.map(categoryData =>
    //                         <div className="col-md-3" key={categoryData?.card?.card?.info?.id}>
    //                             {/* <Link to={"/restaurant/" + categoryData?.card?.card?.info?.id}> 
    //                                  <ResCard resData={categoryData} />
    //                             </Link> */}
    //                              <ResCard resData={categoryData} />
    //                         </div>
    //                         )  
    //                     }
    //                 </div> 
    //             </div>
    //         </div>
     
    //     </div>
    // )
}

export default whatsOnYourMind;