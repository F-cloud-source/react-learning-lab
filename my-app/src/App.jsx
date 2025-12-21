

import Student from './Student'
function App() {
  

    return(
      <>
      <Student name="Faizan Ali" age={23} birthDate={2004} job="No"  salary="2000$" />
      <Student name="John" age={32} birthDate={1955}  job="Yes" salary="1300$"/>
      <Student name="Alex" age={34} birthDate={1990}  job="No" salary="3400$"/>
      <Student name="Alya" age={19} birthDate={2000}  job="No" salary="2000$"/>
      <Student name="Carry" age={45} birthDate={2001}  job="Yes" salary="900$"/>

      </>
    )
  
}

export default App;
