import { useSelector, useDispatch } from "react-redux";
import { onDeleteResult, onStoreResult } from "../../store/slices/result";
import classes from "./Result.module.css";

function Result() {
  const { counter } = useSelector((store) => store.ctr);
  const { result } = useSelector((store) => store.res);
  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="d-grid">
          <button
            className="btn btn-danger"
            onClick={() => dispatch(onStoreResult(counter))}
          >
            Store Result
          </button>
        </div>
        <ul className="list-group">
          {result.map((res, i) => (
            <li
              onClick={() => dispatch(onDeleteResult(i))}
              className={`list-group-item mb-3 ${classes["highlight"]}`}
              key={i}
            >
              {res}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Result;
