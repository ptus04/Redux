import { useState } from "react";
import { useReducer } from "react";

function App() {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, { done: false, todo: text.trim() }];
      case "TOGGLE_TODO":
        return state.map((v, i) =>
          i === action.payload ? { ...v, done: !v.done } : v
        );
      case "DELETE_TODO":
        return state.filter((v, i) => i !== action.payload);

      default:
        return state;
    }
  }, []);

  return (
    <div className="mx-auto grid container grid-rows-[min-content_min-content_50%] gap-2 h-dvh">
      <h1 className="text-center text-4xl font-bold text-green-600">
        TODO LIST
      </h1>
      <div className="flex gap-2 justify-center">
        <input
          className="border px-3 py-1 rounded-sm"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="border px-3 py-1 rounded-sm"
          onClick={() => dispatch({ type: "ADD_TODO" })}
        >
          Thêm
        </button>
      </div>

      <div className="p-4 flex flex-col gap-2 border rounded-sm">
        {state.map((v, i) => (
          <div key={i} className="gap-2 flex">
            <input
              type="checkbox"
              checked={v.done}
              onChange={() => dispatch({ type: "TOGGLE_TODO", payload: i })}
            />
            <label className={v.done ? "line-through" : ""}>{v.todo}</label>
            <button
              className="ms-auto bg-red-500 text-white px-3 py-1 rounded-sm cursor-pointer"
              onClick={() => dispatch({ type: "DELETE_TODO", payload: i })}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
