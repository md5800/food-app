import { useState } from "react";
import MenuItems from "./MenuItems";

const RestaurantCategory = (props) =>{
    const {data, showItems, setShowIndex} =props;
    // console.log(showItems);
    // console.log(data);
    // const [showItems, setShowItems] = useState(false);
    const handlClick =()=>{
        //  setShowItems(true);
        // setShowItems(!showItems);
        setShowIndex();
     }
    return(
        // <div className="accordion" id="accordionExample">
        //     <div className="accordion-item">
        //         <h2 className="accordion-header" id="headingOne">
        //         <button className="accordion-button font-bold capitalize" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        //             {data?.data?.title} ({data?.data?.itemCards.length})
        //         </button>
        //         </h2>
        //         <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        //         <div className="accordion-body">
        //             <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        //         </div>
        //         </div>
        //     </div>
        // </div>
        <div className="accordion-box">
            <div className="accordion-heading flex justify-between items-center shadow-md py-4 px-6 mb-3 mt-3 cursor-pointer" onClick={handlClick}>
               <h3 className="font-bold text-3xl  mb-0">{data?.title} ({data?.itemCards.length})</h3>
               <span className={showItems ? 'rotate-180' : 'null'}><i class="bi bi-chevron-down text-xl"></i></span>
            </div>
            <div className="accordion-body py-2 px-8">
                {showItems ? <MenuItems data={data?.itemCards} /> : false}
                {/* <MenuItems data={data?.data?.itemCards} /> */}
            </div>
        </div>
    )
}

export default RestaurantCategory;