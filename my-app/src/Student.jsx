

function Student(props) {
      return(
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Date Of Birth: {props.birthDate}</h1>
            <h1>Age: {props.age}</h1>
            { <h1>Stable Job: {props.job ? "Yes" : "NO" }</h1> }

        </div>
      )
}

export default Student;