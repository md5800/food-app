import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return(
        <div className="errorsec">
           <div className="container">
                <div className="row">
                    <div className="col-md-12">
                       <div className="abtcontent text-center py-5">
                        <h1 className="mb-3">Oops something went wrong!!</h1>
                        <h5 className="mb-1">{err.data}</h5>
                        <h5>{err.status}: {err.statusText}</h5>
                       </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Error;