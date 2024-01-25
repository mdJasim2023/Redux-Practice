import { Provider } from "react-redux";
import store from "./store/store";
import Counter1 from "./counter1";
import Counter2 from "./counter2";
import Counter3 from "./counter3";

function App() {
  return (
    <Provider store={store}>
      <div className="border border-info p-4 m-2">
          <h1>Jasim Mohammad</h1>
          <Counter1></Counter1>
          <Counter2></Counter2>
          <Counter3></Counter3>
      </div>
    </Provider>
  );
}

export default App;
