import store from "./store/store";
import { Provider } from "react-redux";
import Todolist from "./todo";

function App() {
  return (
   <Provider store={store}>
      <Todolist></Todolist>
   </Provider>
  );
}

export default App;
