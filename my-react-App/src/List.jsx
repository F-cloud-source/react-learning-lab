

function Car() {

   const Cars = ["lamborgini" , "Royal Ross" , "Toyota" , "Porshe"]

     
    return(
     <header>
     <nav>
     <ol>

          {Cars.map((car , index) =>{
               return <li key={index}>{car.toUpperCase()}</li>
          })}

     </ol>
     </nav>
     </header>
    );


}
export default Car;