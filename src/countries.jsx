import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CountryDetails from "./countrydetails";
function Countries(){
    let [countries,setCountries]=React.useState([]);

    React.useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((res)=>{setCountries(res.data)})
    },[])
      return(
        <div className="d-flex flexwrap">
          <ul className="w-50">
            <h1>Countries :</h1>
            {
              countries.map((a)=>{
                return (
                  <li><Link to={`countrydetails/${a.name.common}`}>{a.name.common}</Link></li>
                )
              })
            }
          </ul>
          <div className="w-50">
            <h1>Country Details :</h1>
          </div>
        </div>
  )
}

export default Countries