import logo from "../img/logo.png";
const Footer = () =>{
  return (
    <div className="ftsec">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="abt">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, omnis, facere deserunt reiciendis quia repellendus.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <h4>Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Instamart</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4>Contact us</h4>
                    <ul>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4>We deliver to:</h4>
                    <ul>
                        <li>Bangalore</li>
                        <li>Gurgaon</li>
                        <li>Delhi</li>
                        <li>Pune Mumbai</li>
                        <li>Hyderabad</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;