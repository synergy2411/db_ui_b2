function ExpenseItem({ expense }) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">{expense.title.toUpperCase()}</h4>
        </div>
        <div className="card-body">
          <p>Amount : ${expense.amount}</p>
          <p>Created At : {expense.createdAt}</p>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
