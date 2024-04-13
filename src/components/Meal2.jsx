import { useState } from "react"

function Meal2(props){
    //const [eat, customerEat]=useState("Eat it")
    const [eats, customersEat]=useState("Eat it")
    const buts={
        border:"none",
        borderRadius:"10px"
    }
    return(
        <div>
        <h1>{props.types}</h1>
        <button style={buts} onClick={()=>customersEat('Eaten!')}><h2>{eats}</h2></button>
        </div>
    )
    }
    export default Meal2