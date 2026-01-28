

import React, {useState} from 'react'

function Object(){

// intail state of React Car Objects 
    const [ car , setCar] = useState({ year: 2024,
                                       model: "Toyota Yaris",
                                       make: "Toyota",
                                        });


   


function HanldeYearChange(event){


    setCar( c => ({... c, year: event.target.value}));
}         



function HanldeMakeChange(event){
     
    setCar( c => ({... c,  make: event.target.value}));
} 


function HanldeModelChange(event){
      
setCar( c => ({... c,  model: event.target.value}));
   
} 
  return(
    <div>
        <h1>Your liking Car: {car.model}  {car.year} {car.make} </h1>
        <input type="number" value={car.year} onChange={HanldeYearChange}/>
        <input type="text"  value={car.make}  onChange={HanldeMakeChange}/>
        <input type="text"  value={car.model}  onChange={HanldeModelChange}/>
       
    </div>
  )

}


export default Object;