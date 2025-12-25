

// import DigitalProblem from './DigitalProblem.jsx'
// import './index.css'
// <>
   // <DigitalProblem name="DigitalSpeedReader" problem="Internet Latency" boost={23} solution="Yes"/>
   // <DigitalProblem name="BugTracker" problem="WifiServer"  boost={19} solution="No"/>
   // </>



import User from './User'

function App() {
  return(
      <>

    <User   failInput="Acessed Denied" userName="Faizan Ali" emptyName="[XXXXXX]"  emptyEmail="xxxxx@xxx.com"  islogIn={true}  emailValid="aliXXX@outlook.com"/>
    <User   failInput="Acessed Denied" userName="Sara" emptyName="[XXXXXX]"  emptyEmail="xxxxx@xxx.com"  islogIn={true}  emailValid="AlexXXX@outlook.com"/>
    <User   failInput="Acessed Denied" userName="John" emptyName="[XXXXXX]"  emptyEmail="xxxxx@xxx.com"  islogIn={true}  emailValid="JohnXXX@outlook.com"/>

    </>
  )
};

export default App;
