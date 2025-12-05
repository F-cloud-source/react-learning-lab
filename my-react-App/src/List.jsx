

function Car() {

//  Buiding Variable for Car use Vanilla Js inside REACT 

    const Car1 = "Lamborgini";
    const Car2 = "Royal Roylcee";
    const Car3 = "Mustang";
    const Car4 = "Toyota";

// Use{Car1} Skill to Return Car1 Store variable not Car1 as strign on UI live a Bugs unSeen

     return(
<header>
     <nav>
             <ol>
              <li> {Car1.toUpperCase()}</li>   
              <li>{Car2.toUpperCase()}</li> 
              <li>{Car3.toUpperCase()}</li> 
              <li>{Car4.toLowerCase()}</li> 

           </ol>
    </nav>
</header>
     );
}

export default Car;