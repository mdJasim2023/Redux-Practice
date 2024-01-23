import React from "react";
import axios from "axios";
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
                  <li><Link state={a}>{a.name.common}</Link></li>
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