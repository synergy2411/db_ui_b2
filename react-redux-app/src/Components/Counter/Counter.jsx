import { useSelector } from "react-redux";

function Counter() {
  const { counter } = useSelector((store) => store.ctr);

  return (
    <div className="text-center">
      <h1 className="display-3">Counter : {counter}</h1>
    </div>
  );
}

export default Counter;
