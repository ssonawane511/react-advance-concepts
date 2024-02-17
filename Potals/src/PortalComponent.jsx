import React from "react";
import ReactDOM  from "react-dom";

const PortalComponent = (props) => {
  const { msg, counter, setCounter } = props;
  return  ReactDOM.createPortal(
    <div>
      <h1>{msg}</h1>
      <p> state passed from parent {counter}</p>
      <button onClick={(e) => setCounter(counter + 1)}> Set state in parent</button>
    </div>
  , document.getElementById('portal'));
};

export default PortalComponent;
