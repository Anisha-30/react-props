import { useState } from "react";

function Counter(){
    const [display,setDisplay] = useState(0);
    //multiple conditions with toggle
    return (
        <div>
            <h2>{display}</h2>

            <button onClick={()=> setDisplay(display+1) }>Update</button>

            {
                display==0?<h2>Counter 0</h2>
                :display==1?<h2>Counter 1</h2>
                :display==2?<h2>Counter 2</h2>
                :display==3?<h2>Counter 3</h2>
                :display==4?<h2>Counter 4</h2>
                :display==5?<h2>Counter 5</h2>
                :null
            }
        </div>
    )
}    
export default Counter;