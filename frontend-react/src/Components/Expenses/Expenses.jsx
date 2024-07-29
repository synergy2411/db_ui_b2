import ExpenseItem from "./ExpenseItem/ExpenseItem";

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

  return (
    <div>
      <h2>Expenses coming soon...</h2>
      <div className="row">
        <ExpenseItem expense={expenses[0]} />
        <ExpenseItem expense={expenses[1]} />
        <ExpenseItem expense={expenses[2]} />
      </div>
    </div>
  );
}

export default Expenses;
