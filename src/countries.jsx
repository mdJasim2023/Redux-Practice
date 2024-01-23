import React from "react";
import axios from "axios";
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
                    return <li><Link>{countries.name.common}</Link></li>
                })
            }</ul>
        </>
    )
}

export default Countries