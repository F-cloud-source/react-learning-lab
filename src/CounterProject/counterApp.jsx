// built a counter App Project

 import React, {useState} from 'react'

///import   './counter.css'

function Counter(){
  

    let [count , setCount] = useState(0)

    const increment = () => setCount(prev => prev +1);
     const decrement = () => setCount(prev => prev -1);
      const reset = () => setCount(0)

      return(
   <div>
     <button  className="btn" onClick={increment }>Start Counter:{count}</button>
        <button  className="btn" onClick={decrement}>Reverse Counter: {count}</button>
         <button  className="btn" onClick={reset}> Reset Counter:{count}</button>
          </div>
)
  
      
}



export default Counter;