import { useState, useRef } from "react";
import classes from "./ExpenseForm.module.css";

function ExpenseForm({ onAddNewExpense }) {
  const inputCreatedAtRef = useRef();

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);

  const amountChangeHandler = (e) => setEnteredAmount(e.target.value);
  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    onAddNewExpense(
      enteredTitle,
      enteredAmount,
      inputCreatedAtRef.current.value
    );
  };

  return (
    <div className={classes["backdrop"]}>
      <div className={classes["my-model"]}>
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Add Expense Form</h2>
            <form onSubmit={submitHandler}>
              {/* title */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  placeholder=""
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                />
                <label htmlFor="title">Title:</label>
              </div>

              {/* amount */}
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="amount"
                  id="amount"
                  placeholder=""
                  value={enteredAmount}
                  onChange={amountChangeHandler}
                />
                <label htmlFor="amount">Amount:</label>
              </div>

              {/* createdAt */}
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  name="created-at"
                  id="created-at"
                  placeholder=""
                  ref={inputCreatedAtRef}
                />
                <label htmlFor="created-at">Created At:</label>
              </div>
              {/* button */}
              <div className="row">
                <div className="col-6">
                  <div className="d-grid">
                    <button className="btn btn-primary" type="submit">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-grid">
                    <button className="btn btn-secondary">Cancel</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseForm;
