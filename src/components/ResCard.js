import {CARD_IMG} from "../utils/constants";

const ResCard = (props) =>{
    const { resData } = props;
    // console.log(props); 
    // console.log(resData.data);
    const {cloudinaryImageId , name , cuisines , avgRating , sla , costForTwo  } = resData?.info || {};
    return(
            <div className="cardbox mt-5">
                <div className="cardimg">
                    <img src={CARD_IMG + cloudinaryImageId} alt="cardimg" />
                </div>
                <div className="cardcontent">
                <h3 className="mt-3 mb-3">{name} <span style={{color:"#000"}}>({cuisines?.join(",")})</span></h3>
                <h5><i className="bi bi-star"></i> {avgRating} <span className="dot-divider"></span> {sla?.slaString} <span className="dot-divider"></span> {costForTwo}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                </div>
            </div>
    )
}

export const WithVegInfo = (ResCard) =>{
    return (props)=>{
       return (
        <div className="cardveg-wrapper">
            <div className="vegtag bg-green-700 text-white rounded-md text-center">Veg</div>
            <ResCard {...props} />
        </div>
       );
    };
};

export const WithNonVegInfo = (ResCard) =>{
    return (props)=>{
       return (
        <div className="cardveg-wrapper">
            <div className="vegtag bg-red-700 text-white rounded-md text-center">Non Veg</div>
            <ResCard {...props} />
        </div>
       );
    };
};

export default ResCard;