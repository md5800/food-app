import React from "react";
import Team from "./Team";
import TeamClass from "./TeamClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
        //console.log("Parent constructor is called");
    }

    componentDidMount(){
        //console.log("Parent componentDidMount is called");
    }

    render(){
        //console.log("Parent render is called");
        return (
            <div className="aboutsec">
               <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                           <div className="abtcontent text-center py-5 mb-5">
                            <h5>Know More</h5>
                            <h1>About Us</h1>
                            <UserContext.Consumer>
                                {(data) => <h5>Looged in as <span className="font-bold">{data.loggedInUser}</span></h5>}
                            </UserContext.Consumer>
                           </div>
                        </div>
                    </div>
                    <div className="row">
                        <Team name="Rohit Paul" location="Hyderabad" contact="+91 9236598653" type="Functional Card"/>
                        <TeamClass name="Smith Roy(first)" location="Bangaluru" contact="+91 9236889653" type="Class Card"/>
                        <TeamClass name="Smith Roy(Second)" location="Bangaluru" contact="+91 9236889653" type="Class Card"/>
                        <TeamClass name="Smith Roy(Third)" location="Bangaluru" contact="+91 9236889653" type="Class Card"/>
                    </div>
               </div>
            </div>
        )
        
    }
}

// const About = () => {
//     return (
//         <div className="aboutsec">
//            <div className="container">
//                 <div className="row">
//                     <div className="col-md-12">
//                        <div className="abtcontent text-center py-5 mb-5">
//                         <h5>Know More</h5>
//                         <h1>About Us</h1>
//                        </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <Team name="Rohit Paul" location="Hyderabad" contact="+91 9236598653" type="Functional Card"/>
//                     <TeamClass name="Smith Roy" location="Bangaluru" contact="+91 9236889653" type="Class Card"/>

//                 </div>
//            </div>
//         </div>
//     )
// }

export default About;