import { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

function Expenses() {
  let expenses = [
    {
      id: "e001",
      title: "shopping",
      amount: 199,
      createdAt: new Date("Jun 20, 2024"),
    },
    {
      id: "e002",
      title: "planting",
      amount: 69,
      createdAt: new Date("Sept 2, 2023"),
    },
    {
      id: "e003",
      title: "insurance",
      amount: 149,
      createdAt: new Date("Feb 18, 2024"),
    },
  ];

  const [show, setShow] = useState(false);

  const showClickHandler = () => {
    setShow(!show);
    //   show = !show;     // NEVER EVER CHANGE STATE MUTABLY
  };

  return (
    <div>
      <h2 className="text-center display-4 mb-4">My Expenses</h2>

      <div className="row mb-4">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button className="btn btn-primary" onClick={showClickHandler}>
              {show ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </div>

      {show && <ExpenseForm />}

      <div className="row">
        {expenses.map((exp) => (
          <ExpenseItem expense={exp} key={exp.id} />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
