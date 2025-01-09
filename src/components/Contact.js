const Contact = () => {
    return (
        <div className="contactsec">
           <div className="container">
                <div className="row">
                    <div className="col-md-12">
                       <div className="abtcontent text-center pb-5">
                        <h5>Need Help?</h5>
                        <h1>Contact Us</h1>
                       </div>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-7">
                        <div className="formbox">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Contact;