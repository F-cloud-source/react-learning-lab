

import React, {useState} from 'react'


function ArrayUpdate(){


    const {cars , setCars} = useState(["Buggati" , "Lamborgini" ]);
 
     
    


     return(

        <div>
            <h1>List Car Name:</h1>
            <ol>
                {cars.map((car ,  index ) => 
                 <li key={index}>{car}</li>)}
            </ol>
        </div>
     );

};

export  default ArrayUpdate;