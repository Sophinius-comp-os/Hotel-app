import { useState } from "react"


function Meal1(props){
    const [eats, customersEat]=useState("Eat it")
    const buts={
        border:"none",
        borderRadius:"10px",
        backgroundColor:"green",
    
    }
    return (
        <div>
        <h1>{props.type}</h1>
        <button  style={buts}onClick={()=>customersEat('Eaten!')}><h2>{eats}</h2></button>
        </div>
    )
    }
    export default Meal1