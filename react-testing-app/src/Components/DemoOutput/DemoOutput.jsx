import { useState, useEffect } from "react";

function DemoOutput() {
  const [toggle, setToggle] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        return;
      }
      const todos = await response.json();
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  return (
    <>
      <h1>The Demo Output Component</h1>
      <p>Some cool contents here</p>

      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      {toggle && <p>Toggle is true</p>}

      {!toggle && <p>Toggle is false</p>}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default DemoOutput;
