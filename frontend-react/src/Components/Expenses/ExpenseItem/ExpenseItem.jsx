function ExpenseItem({ expense }) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h4>{expense.title.toUpperCase()}</h4>
        </div>
        <div className="card-body">
          <p>Amount : ${expense.amount}</p>
          <p>Created At : {expense.createdAt.toISOString()}</p>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
