import { useSelector } from "react-redux";
import CounterButtons from "./CounterButtons";
import Result from "./Result";

function Counter() {
  const { counter } = useSelector((store) => store.ctr);

  return (
    <div className="text-center">
      <h1 className="display-3">Counter : {counter}</h1>
      <CounterButtons />
      <hr />
      <Result />
    </div>
  );
}

export default Counter;
