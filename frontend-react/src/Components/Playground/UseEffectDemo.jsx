import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [toggle, setToggle] = useState(false);

  //   useEffect(() => {
  //     console.log("effect works!");
  //   }, []);

  //   useEffect(() => {
  //     console.log("effect works!");
  //   }, [toggle]);

  useEffect(() => {
    console.log("Effect works!");
    return () => {
      console.log("Clean up works!");
    };
  }, [toggle]);

  return (
    <>
      <h1>Use Effect in action</h1>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

      {toggle && <p>Dynamic Content</p>}
    </>
  );
}

export default UseEffectDemo;
