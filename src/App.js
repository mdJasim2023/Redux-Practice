
import TeamA from './TeamA';
import TeamB from './TeamB';
import store from './store/store';
import { Provider } from 'react-redux';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <h1 className='text-center border border-warning border-2 p-3'>Football Score Board</h1>
       <div className='d-flex flex-wrap justify-content-around m-1'id='myapp'>
          <div className='border p-5 w-50'>
            <TeamA></TeamA>
          </div>
          <div className='border p-5 w-50'>
            <TeamB></TeamB>
          </div>
       </div>
    </Provider>
  );
}

export default App;
