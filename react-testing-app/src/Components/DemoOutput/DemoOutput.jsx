import { useState } from "react";

function DemoOutput() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1>The Demo Output Component</h1>
      <p>Some cool contents here</p>

      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      {toggle && <p>Toggle is true</p>}

      {!toggle && <p>Toggle is false</p>}
    </>
  );
}

export default DemoOutput;
