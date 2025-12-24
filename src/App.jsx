

import DigitalProblem from './DigitalProblem.jsx'
import './index.css'


function App() {
  return(
    <>

    <DigitalProblem name="DigitalSpeedReader" problem="Internet Latency" boost={23} solution="Yes"/>
    <DigitalProblem name="BugTracker" problem="WifiServer"  boost={19} solution="No"/>


    </>
  )
};

export default App;
