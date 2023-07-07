import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reducers/counterSlice";
//or import {actions} from ./reducers/...

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App container mt-5 text-center">
      <h2 className="mb-3">React Js Redux Store with Slice State Examle</h2>
      <p className="h1">{count}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="me-2 btn btn-primary"
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="me-2 btn btn-danger"
      >
        Decrement
      </button>
    </div>
  );
}
export default App;
