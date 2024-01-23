import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import './App.css'

function CountryDetails(){
    let params = useParams()
    let [countrydetails,setCountrydetails]=React.useState(null)

    React.useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/alpha/${params.cname}`).then((res)=>{
            setCountrydetails(res.data[0])
        },[params])
    })
    
    return(
        <>
             {countrydetails &&
            <div class="myclass">
                <h1>Name :{countrydetails.name.common}</h1>
                <h1>Region :{countrydetails.region}</h1>
                <h1>Population :{countrydetails.population}</h1>
                <h1>Capital :{countrydetails.capital}</h1>
                <img src={countrydetails.flags.png}/>
            </div>
            }
        </>
    )
}

export default CountryDetails