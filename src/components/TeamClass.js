import React from "react";
import Teamimg from "../img/team-img1.jpg";

class TeamClass extends React.Component {
    constructor(props){
      super(props); 
      this.state = {
        rating:0,
        age:24,
        userInfo:{
          name: "Mohuya",
          location: "Kolkata"
        },
      };
      console.log(this.props.name + "constructor is called");
    };

    async componentDidMount(){
        console.log(this.props.name +  "componentDidMount is called");

        const data = await fetch("https://api.github.com/users/md7580");
        const json = await data.json();

        // this.setState({
        //     userInfo :json,
        // });
        this.setState(json);
        console.log(json);
    }
    componentWillUnmount(){
     console.log(this.props.name + "componentWillUnmount is called")
    }
    
    componentDidUpdate(){
        console.log(this.props.name + "componentDidUpdate is called")
    }

    render(){
        console.log(this.props.name +  "render is called");
        return(
            <div className="col-md-3">
                <div className="team-card text-center">
                    <div className="team-img">
                        <img src={Teamimg} alt="team"/>   
                    </div>
                   <h2>{this.state.userInfo.name}({this.state.rating}) - Age:{this.state.age}</h2>
                   <p>{this.state.userInfo.location}</p>
                   <p>{this.props.contact}</p>
                   <p>{this.props.type}</p>
                   <button className="team-rating" onClick={
                    ()=>{ this.setState({
                        rating: this.state.rating +1,
                    })}
                   }>Give Rating</button>
               </div>
            </div>
         )
    }
}

export default TeamClass;