
import { useState } from "react";
import PortalComponent from "./PortalComponent";
function App() {
  const [parentState, setParentState] = useState(0);
  return (
    <div className="App">
      <PortalComponent msg="this is portal component" counter={parentState} setCounter={setParentState}/>
    </div>
  );
}

export default App;
