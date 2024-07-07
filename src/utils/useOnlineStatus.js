import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
//   logic === check user is online or not then return the status

const [internetStatus, setInternetStatus] = useState(true);

useEffect (
  ()=>{ 
    window.addEventListener("online", (event) => {setInternetStatus(true)});
    window.addEventListener("offline", (event) => {setInternetStatus(false)});
    }, []
);
return internetStatus;
}

export default useOnlineStatus;