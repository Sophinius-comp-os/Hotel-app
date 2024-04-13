import { useState } from "react";
import Mealrem from "./Mealrem";

function Meal3(props){
    //var rems=props.remainder
    const [eat, customerEat]=useState("Eat it")
   //const [reme, foodReme]=useState(props.remainder)
   const buts={
    border:"none",
    borderRadius:"10px"
}
return(
    <div>
<h1>{props.typess}</h1>
<button style={buts} onClick={()=>{customerEat('Eaten!')}}><h2>{eat}</h2></button>

</div>
);
}
export default Meal3