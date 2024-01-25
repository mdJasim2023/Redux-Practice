import { Provider } from "react-redux";
import store from "./store/store";
import Counter1 from "./counter1";

function App() {
  return (
      <Provider store={store}>
          <Counter1></Counter1>
      </Provider>
  );
}

export default App;
