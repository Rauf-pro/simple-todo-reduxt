import "./App.css";
import Todo from "./Todo";
import { Provider } from "react-redux";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App</h1>
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
