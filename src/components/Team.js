import Teamimg from "../img/team-img1.jpg";
import { useState } from "react";

const Team = (props)=>{
const [rating] = useState(0);
const [age] = useState(24);

 return(
    <div className="col-md-3">
        <div className="team-card text-center">
            <div className="team-img">
                <img src={Teamimg} alt="team"/>   
            </div>
           <h2>{props.name}({rating}) - Age:{age}</h2>
           <p>{props.location}</p>
           <p>{props.contact}</p>
           <p>{props.type}</p>
       </div>
    </div>
 )
}

export default Team;