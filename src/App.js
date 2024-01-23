
import Todolist from './todolist';
import Countries from './countries';
import My from './my';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <h1>Jasim Mohammad</h1>
        <Link to='/todolist'>Todolist</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/countries'>Countries</Link>
        <Outlet/>                                                                                      
    </div>
  );
}

export default App;
