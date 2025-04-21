// import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoListReducer from "./TodoListRedux";

function App() {
  return (
    <Provider store={store}>
      {/* <TodoList /> */}
      <TodoListReducer />
    </Provider>
  );
}

export default App;
