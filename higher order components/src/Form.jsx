import { useState } from "react";
import withLogger from "./withLoggingHOC";

const Form = (props) => {
    const [name, setName] = useState("")
    return (
        <div>
            {props.name}
            <input type={"text"} onChange={e => setName(e.target.value)} /> 
        </div>
    )
}

export default withLogger(Form);