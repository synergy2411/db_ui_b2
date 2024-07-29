import { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch("http://localhost:3030/expenses");
      const expenses = await response.json();
      setExpenses(expenses);
    };
    fetchExpenses();
  }, []);

  const showClickHandler = () => {
    setShow(!show);
    //   show = !show;     // NEVER EVER CHANGE STATE MUTABLY
  };

  const onAddNewExpense = async (title, amount, createdAt) => {
    let newExpense = {
      title,
      amount: Number(amount),
      createdAt: createdAt,
    };
    const response = await fetch("http://localhost:3030/expenses", {
      method: "POST",
      body: JSON.stringify(newExpense),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    setExpenses((prevExpenses) => [result, ...prevExpenses]);
    setShow(false);
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

      {show && <ExpenseForm onAddNewExpense={onAddNewExpense} />}

      <div className="row">
        {expenses.map((exp) => (
          <ExpenseItem expense={exp} key={exp.id} />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
