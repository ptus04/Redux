import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/toolkitStore.js";
import AppReduxToolkit from "./AppReduxToolkit.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppReduxToolkit />
    </Provider>
  </StrictMode>
);
