import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Meal1 from './components/Meal1'
import Meal2 from './components/Meal2'
import Meal3 from './components/Meal3'
import Mealrem from "./components/Mealrem";
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'

function App() {
  let rem=3
const item4={
  color:"purple",
  backgroundColor:"orange",
  boxShadow:"0 0 8px rgba(0, 0 ,0,1)",
  border:'green',
  borderRadius:"10px"

}
  return (
    <div>
    <Header/>
    <h1 style={{color:"red", textAlign:"center"}}>BOOK YOUR fOOD ITEM Now!</h1><br/>
    

    <div className='container'>
      <div className='item1' ><Meal1 type="Baked Beans, 200 calories" remainder={rem}/></div>
      <div className='item2'> <Meal2 types="Grilled veggies, 80 calories" remainder={rem}/></div>
      <div className='item3'> <Meal3 typess="Soup, calories" remainder={rem}/></div>
      
        
    </div>
    <div  class="row">
    <div className='item4' >
    <Mealrem remainder={rem}/>
    </div>
<h2 style={item4} >Please Book your food item Now!<h3> Remaining books is:{rem} </h3></h2>
    </div>

   
<Footer/>
    </div>
  )
}

export default App
