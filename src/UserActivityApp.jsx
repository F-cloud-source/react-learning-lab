
// Project Outline 
// Array data User Data As Object and intial state 
// Making new State function and Add task and Delete Task 
// Making Handle input bar for adding and atagrt new Task vlaue on UI 
// Making  button for ADd task and  delete task 

// Import useState Hook from react bundle

import React, {useState} from 'react'

// Buildng All Features

function TodoApp(){

// Building Intial Array for User Daily Chores

const [useractivity ,  setUserActivity] = useState([{ id:1 , Chores: "I am cooking food "},
                                                    {id:2 , Chores: "I am feeding my dog"},
                                                    {id:3 , Chores: "I am doing exercise"},
                                                    {id:4 , Chores: "I am reading Novel on History"},
                                                    {id:5 , Chores: "I am Taking Shower"}
                                                    ]);
// New State 
const [newactivity , setNewActivity] = useState("");


function HandleUserInput(event){


setNewActivity(event.target.value);
}


function AddActivity(){

 if(newactivity.trim()  === "") return;

 // For live Task Update
  const NewTodo= {
    Chores: newactivity,
    text: newactivity,
  }

setUserActivity([...useractivity, NewTodo]);

 }

function DeleteActivity(Chores){

  setUserActivity(useractivity.filter(task => task.Chores !== Chores));

}

return(
  <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">

  <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6">  


  <div className="space-y-1"  >
  <h1 className="text-3xl font-black text-slate-800 tracking-tighter">User Activity App</h1>
  </div>
 
<div className="flex flex-col gap-3"> 

<input  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                type="text"
                placeholder="Add User Activity" 
                value={newactivity}
                onChange={HandleUserInput}/>

    <button  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-2xl shadow-lg shadow-indigo-200 transition-all active:scale-95"  onClick={AddActivity}>Add Activity</button>

</div>
    
 <div className=" mt-4 border-t pt-6 space-y-3">

  <ul className="mt-4 space-y-3 border-t border-slate-100 pt-6">
           {useractivity.map((task)  => 
           <li key={task.id}>{task.Chores}
           <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-2xl shadow-lg shadow-indigo-200 transition-all active:scale-95"  onClick={DeleteActivity}>Delete Activity</button></li>
      )}

    </ul>
  </div>

     </div>
  </div>
)



}





export default TodoApp;

