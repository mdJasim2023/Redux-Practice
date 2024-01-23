import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Countries()
{
    var [countries,setCountries]=React.useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then((res)=>{
            setCountries([...res.data])
        })
    },[])
    return(
        <>
            <h1>Countries:</h1>
            <ul>{
                countries.map((a)=>{
                    return <li><Link to={`countrydetails/${a.name.common}`}>{a.name.common}</Link></li>
                })
            }</ul>
        </>
    )
}

export default Countries