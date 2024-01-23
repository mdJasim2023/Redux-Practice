import React, { useEffect } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails(){
    var param = useParams()
    var [country,setCountry]=React.useState({})
    console.log(country);
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${param.cname}`).then((res)=>{setCountry(res.data)})
    },[])
    return(
        <>
          <h1>{country.state.name.common}</h1>  
          <h1>{country.state.region}</h1>
        </>
    )
}

export default CountryDetails