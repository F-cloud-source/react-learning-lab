
import ProfilePicture from './assets/Profile-pic.jpg'


function Card(){
   
     return(
        <div className="card">
        <img className="card-Img" src={ProfilePicture} alt="Profile picture"></img>
        <h1 className="card-title">Card Project</h1>
        <p className="card-content">This is  all Process of building Card in React App and in javascript</p>
     </div>
     );
     
}

export default Card;