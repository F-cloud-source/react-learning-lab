// PropTypes = a mechanism ensures the value is passed
//              as props is correct datatype
//              Age = PropTypes.number

import PropTypes from './prop-types'

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

Student.PropTypes = {
    
   name: PropTypes.string,
   birthDate: PropTypes.number,
   age: PropTypes.number,
   salary: PropTypes.Number,
   job: PropTypes.boolean,
   
}

export default Student;