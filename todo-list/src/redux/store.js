import { createStore } from "redux";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ done: false, todo: action.payload, id: Date.now() }, ...state];
    case TOGGLE_TODO:
      return state.map((v) =>
        v.id === action.payload ? { ...v, done: !v.done } : v
      );
    case DELETE_TODO:
      return state.filter((v) => v.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(todoReducer);
export default store;
