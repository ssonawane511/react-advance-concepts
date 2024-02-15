
import { useEffect, useState } from 'react';
import Form from './Form'
function App() {
  const [name, setName] = useState("")

  useEffect(() => {
    setInterval(() =>{
      setName("sagar " + Math.random())
    }, 2000)
  },[])
  return (
    <div className="App">
      <Form name={name}/>
    </div>
  );
}

export default App;
