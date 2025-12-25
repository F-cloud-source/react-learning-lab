

// import DigitalProblem from './DigitalProblem.jsx'
// import './index.css'
// <>
   // <DigitalProblem name="DigitalSpeedReader" problem="Internet Latency" boost={23} solution="Yes"/>
   // <DigitalProblem name="BugTracker" problem="WifiServer"  boost={19} solution="No"/>
   // </>


import User1 from './User1'
import User2 from './User2'
import User3 from './User3'

function App() {
  return(
      <>

    <User1   failInput="Acessed Denied" userName1="Faizan Ali" emptyName="[XXXXXX]"  emptyEmail="xxxxx@xxx.com"  islogIn={true}  emailValid1="aliXXX@outlook.com"/>
    <User2  failInput="Acessed Denied"  userName2="Sara"   emptyName="[XXXXXX]" emptyEmail="xxxxx@xxx.com" islogIn={true}  emailValid2="saraAAA@outlook.com"/>
    <User3 failInput="Acessed Denied"  userName3="John"   emptyName="[XXXXXX]"  emptyEmail="xxxxx@xxx.com" islogIn={true}  emailValid3="johnCCC@outlook.com"/>

    </>
  )
};

export default App;
