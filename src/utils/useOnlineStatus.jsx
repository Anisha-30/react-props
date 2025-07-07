import { useEffect, useState } from "react";

const useOnlineStatus = ()=> {

    const [onLineStatus,setOnLineStatus] = useState(true);
    useEffect(()=> {
        window.addEventListener("Offline",()=> {
            setOnLineStatus(false);
        });

         window.addEventListener("Online",()=> {
            setOnLineStatus(true);
        });

    },[]);

    return onLineStatus;
}
export default useOnlineStatus;