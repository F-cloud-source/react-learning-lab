// PropTypes = a mechanism ensures the value is passed
//              as props is correct datatype
//              Age = PropTypes.number



function Student(props) {
      return(
        <div className="student-1">
            <h1>Name: {props.name}</h1>
            <h1>Date Of Birth: {props.birthDate}</h1>
            <h1>Age: {props.age}</h1>
            <h2>Salary in Dollars:{props.salary}</h2>
            <h1>Stable Job: {props.job === "Yes" ? "Yes" : "No"}</h1>

        </div>
      )
}

export default Student;