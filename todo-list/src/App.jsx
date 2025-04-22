import { Provider } from "react-redux";
import store from "./redux/toolkitStore";
import TodoListReduxToolkit from "./TodoListReduxToolkit";

function App() {
  return (
    <Provider store={store}>
      <TodoListReduxToolkit />
    </Provider>
  );
}

export default App;
