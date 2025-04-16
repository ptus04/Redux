import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/store";

function CounterRedux() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Counter App (Redux)
      </h1>
      <h2 className="text-4xl font-bold my-4 text-center">{count}</h2>
      <div className="flex justify-center gap-4 my-4">
        <button
          className="px-6 py-2 text-white font-bold bg-green-500 rounded hover:bg-green-600 hover:scale-105 transition-all"
          onClick={() => dispatch(increment())}
        >
          Tăng
        </button>
        <button
          className="px-6 py-2 text-white font-bold bg-red-500 rounded hover:bg-red-600 hover:scale-105 transition-all"
          onClick={() => dispatch(decrement())}
        >
          Giảm
        </button>
      </div>
    </div>
  );
}

export default CounterRedux;
