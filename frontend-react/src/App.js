import Expenses from "./Components/Expenses/Expenses";
import UseEffectDemo from "./Components/Playground/UseEffectDemo";

function App() {
  return (
    <div className="container">
      <h1>My First React App</h1>

      {/* <ClassBased /> */}
      <UseEffectDemo />

      <Expenses />
    </div>
  );
}

export default App;
