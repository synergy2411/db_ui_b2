import { useDispatch } from "react-redux";
import {
  increase,
  decrease,
  addCounter,
  subtractCounter,
} from "../../store/slices/counter";

function CounterButtons() {
  const dispatch = useDispatch();

  return (
    <>
      <button className="btn btn-primary" onClick={() => dispatch(increase())}>
        Increase
      </button>
      <button className="btn btn-success" onClick={() => dispatch(decrease())}>
        Decrease
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch(addCounter(10))}
      >
        Add - 10
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(subtractCounter(5))}
      >
        Subtract - 5
      </button>
    </>
  );
}

export default CounterButtons;
