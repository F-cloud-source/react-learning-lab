// built a counter App Project

import React, {useState} from 'react'

function Counter(){
  

    let [count , setCount] = useState(0)

    const increment = () => setCount(prev => prev +1);
     const decrement = () => setCount(prev => prev -1);
      const reset = () => setCount(0)

      return(
   <div>
     <button onClick={increment }>Start Counter:{count}</button>
        <button onClick={decrement}>Reverse Counter: {count}</button>
         <button onClick={reset}> Reset Counter:{count}</button>
          </div>
)
  
      
}



export default Counter;