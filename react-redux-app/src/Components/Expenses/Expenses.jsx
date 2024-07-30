import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses } from "../../store/slices/expenses";

function Expenses() {
  const dispatch = useDispatch();
  const { expenses, isLoading, error } = useSelector((store) => store.exp);

  return (
    <div className="text-center">
      <h1>My Expenses</h1>
      <button
        onClick={() => dispatch(fetchExpenses())}
        className="btn btn-primary"
      >
        Fetch Expenses
      </button>

      {isLoading && <h1>Loading...</h1>}
      {error.trim() !== "" && <h1>{error}</h1>}
      <ul className="list-group">
        {expenses.map((exp) => (
          <li>{exp.title.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;
