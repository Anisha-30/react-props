import './Body.css';

function Body(){
   
   
}

 export const ResCard = ({resData})=> {
    // object stored in a single variable? destructuring of object
   // const {img,name,des,price} = resData;
    const {  name, cuisines, cloudinaryImageId, avgRating, costForTwo} = resData.info;
     const img = `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`;
    
    return(
        <div className="">
            <div className="">
                 <div className="m-4 p-4 w-[250px] bg-slate-100">
                    <img className="w-[230px] h-[200px]" src={img} alt="image" />
                    <p className="p1">{name}</p>
                    <p className="p2">{cuisines.join(", ")}</p>
                    <p className="p3">⭐ {avgRating} | {costForTwo}</p>
                    <div>
                        <button className="p4">Add +</button>
                    </div>
                </div>
            </div>
               
        </div>
    )
 } 

 export default Body;