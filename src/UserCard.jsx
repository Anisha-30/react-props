import './Body.css';
import { useEffect, useState } from 'react';

const UserCard = ()=> {
    const userinfo = {
        name: "Arohi Sharma",
        location: "Bhopal",
        Contact: "nsjdhj"

    }
    const[userData, setUserData] = useState(userinfo);
    useEffect(()=>{
        fetchUser();
    },[])

    const fetchUser = async ()=>{
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json)
        setUserData(json);
        
    }

    return(
        <div className="user-card">
            <h3>Name: {userinfo.name}</h3>
            <h3>Location: {userinfo.location}</h3>
            <h3>Contact: {userinfo.contact}</h3>
        </div>
    )
}
export default UserCard;