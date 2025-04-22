import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./redux/todoSlice";

const TodoListReduxToolkit = () => {
  const [text, setText] = useState("");
  const state = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

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
          onClick={() => dispatch(addTodo(text))}
        >
          Thêm
        </button>
      </div>

      <div className="p-4 flex flex-col gap-2 border rounded-sm">
        {state.map((v) => (
          <div key={v.id} className="gap-2 flex">
            <input
              type="checkbox"
              checked={v.done}
              onChange={() => dispatch(toggleTodo(v.id))}
            />
            <label className={v.done ? "line-through" : ""}>{v.todo}</label>
            <button
              className="ms-auto bg-red-500 text-white px-3 py-1 rounded-sm cursor-pointer"
              onClick={() => dispatch(deleteTodo(v.id))}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoListReduxToolkit;
