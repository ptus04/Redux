import { Provider } from "react-redux";
import CounterReduxToolkit from "./CounterReduxToolkit";
import toolkitStore from "./redux/toolkitStore";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 gap-8">
      <Provider store={toolkitStore}>
        <CounterReduxToolkit />
      </Provider>
    </div>
  );
}

export default App;
