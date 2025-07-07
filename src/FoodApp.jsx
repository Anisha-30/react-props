import {ResCard} from './Body';
import img1 from './assets/Arancini-bites.jpg';
import img2 from './assets/rings.jpg';
import img3 from './assets/rolls.jpg';
import img4 from './assets/kabobs.jpg';
import img5 from './assets/Club.jpg';
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useOnlineStatus from './utils/useOnlineStatus';
import './Body.css';

 export const resList =[
        {
            img: img2,
            id:1,
            name:"Crispy Onion Rings",
            des:"Crispy deep fried snack made with onion rings, corn flour batter.",
            price:200
        },
        {
            img: img3,
            id:2,
            name:"Thai Spring Rolls",
            des:"Contain wood ear mushrooms, shredded cabbage, carrots etc.",
            price:90
        },
        {
            img:img1,
            id:3,
            name:"Arancini Bites",
            des:"Stuffed, coated with breadcrumbs and deep-fried.",
            price:280
        },
        {
            img: img4,
            id:4,
            name:"Ham fruit cheese kabobs",
            des:"Grapes, pineapple and cheddar,plus delicious ham roll.",
            price:450
        },
        {
            img: img5,
            id:5,
            name:"Club Sandwich",
            des:"Three-layer sandwich bread,poultry, lettuce, tomato, and mayonnaise.",
            price:120
        }
    ]


function FoodApp(){
     const [restaurantList,setRestList] = useState([]);
     useEffect(()=> {
        fetchData();
     } ,[]);

     const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25050&lng=77.40650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
       
      // const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //conditional rendering
        // if(restaurantList.length == 0){
        //     return <Shimmer/>
        // }

     }

    const onlineStatus = ()=> useOnlineStatus();

    if(onlineStatus == false)  return (
           <div>
            <h1>you are offline check your internet connection</h1>
           </div>
        )

    return(
       restaurantList.length == 0? <Shimmer/>: <div className="main">
           
            <div className="filter flex">
                <div className="search-box mr-4">
                <input type="text" className=" p-2 border-solid border-2 border-indigo-600" />
                <button  className="p-2 border-solid border-2 border-indigo-600 rounded-md" type="search">Search</button>
                 </div>
            <div>
                <button className="bg-green-100" onClick={()=> {
                    const filteredList = restaurantList.filter(
                (res) => res.info.avgRating > 4.3
              );
              setRestList(filteredList);
                }}>  Filter rating greater than 4.3
                </button>
            </div>
            </div>
                 <div className=" m-4 p-4 flex flex-wrap">
                    {restaurantList.map((restaurantData) =>
                        { 
                            //always use key for uniqueness or map(var,index) -- key ={index}
                        return <Link key={restaurantData.info.id} to={"/restaurants/"+restaurantData.info.id}>
                                    <ResCard  resData={restaurantData}/>
                                </Link>
                        })
                    }
                 </div>
             
        </div>
    )
}
export default FoodApp;