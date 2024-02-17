import DisplayHero from "./DisplayHero";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <div className="App">
      Error Boundaries example
      <DisplayHero name="SpideMan"/>
      <DisplayHero name="Sagar"/>

      {/*  Error safe boundary */}
      <ErrorBoundary>
        <DisplayHero name="joker"/>
      </ErrorBoundary>
    
    </div>
  );
}

export default App;
