import { Button } from "primereact/button";
import { useState } from "react";

function DemoDebugger() {
  const [counter, setCounter] = useState(0);

  const btnClickHandler = () => {
    setCounter(counter + 1);
    debugger;
  };

  return (
    <>
      <Button onClick={btnClickHandler}> {counter}</Button>
    </>
  );
}

export default DemoDebugger;
