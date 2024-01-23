import React from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
function Countries() {
  var [countries, setCountries] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries([...res.data]);
    });
  }, []);
  return (
    <>
      <h1>Countries:</h1>
      <div style={{display:"flex",flexWrap:'wrap'}}>
        <ul style={{width:"48%"}}>
          {countries.map((a) => {
            return (
              <li>
                <Link to={`countrydetails/${a.cca2}`}>
                  {a.name.common}
                </Link>
              </li>
            );
          })}
        </ul>
        <div style={{width:"48%"}}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Countries;
