import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ListProduct />
      </div>
    </Provider>
  );
}

export default App;
