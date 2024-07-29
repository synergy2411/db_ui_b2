import Expenses from "./Components/Expenses/Expenses";
import ThemeContext from "./context/theme-context";

function App() {
  return (
    <div className="container">
      <h1>My First React App</h1>

      {/* <ClassBased /> */}
      {/* <UseEffectDemo /> */}

      <ThemeContext.Provider value={{ theme: "dark" }}>
        <Expenses />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
