import './Body.css';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

function RestaurantMenu(){
    const [resInfo, setResInfo] = useState(null);
     const {resId} = useParams();
    console.log(resId);

    useEffect(()=>{
        fetchMenu();
    },[])
 
    const fetchMenu = async ()=>{
       // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.25050&lng=77.40650&restaurantId=84400&catalog_qa=undefined&submitAction=ENTER")
         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.25050&lng=77.40650&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);       
    }

    if (resInfo == null) return <Shimmer/>
  //const {cardsItems} = 
    const {id,name,cuisines,cloudinaryImageId,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     
    return (
        <div className="menu">
            <div>
               <h1>{id}</h1>
                <h1>{name}</h1>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{costForTwoMessage}</h3>
            </div>
            <div className="flex flex-wrap border-1 border-s-violet-500">
                {itemCards.map((item)=> (
                        <div className="m-4 " key={item.card.info.name.id} >
                     <h3>{item.card.info.name}</h3>
                     <h2>{item.card.info.price / 100} for one</h2>
                    
                     <img className="w-52 h-52"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${item.card.info.imageId}`} alt="" />
                </div>               
               ))
                }
               
            </div>
        </div>
    )
}
export default RestaurantMenu;