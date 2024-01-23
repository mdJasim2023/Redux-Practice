import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function CountryDetails(){
    let params = useParams()
    let [countrydetails,setCountrydetails]=React.useState(null)

    React.useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/alpha/${params.cname}`).then((res)=>{
            setCountrydetails(res.data[0])
        },[params])
    })
    
    return(
        {countrydetails &&
        <>
            <h1>hello</h1>
        </>}
    )
}

export default CountryDetails