
import Countries from './countries';
import { Link, Outlet } from 'react-router-dom';
import CountryDetails from './countrydetails';

function App() {
  return (
    <div className="App">
      <h1>Welcome To Edupoly</h1>
        <Link to='/country'>Countries</Link>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
