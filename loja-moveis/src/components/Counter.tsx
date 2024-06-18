import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducers";
import { increment, decrement } from "../store/actions/counterActions";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
