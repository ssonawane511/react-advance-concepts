import NormalComponent from "./NormalComponent"
import PureComponent from "./PureComponent";
function App() {
  return (
    <div className="App">
      Hello from pure component
      <NormalComponent />
      <PureComponent />
    </div>
  );
}

export default App;
