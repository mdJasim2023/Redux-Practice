import React from "react";
import axios from "axios";
import './App.css'
import CountryDetails from "./countrydetails";
import { Link, Outlet } from "react-router-dom";
function Countries(){
    let [countries,setCountries] = React.useState([])
    React.useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((res)=>{setCountries(res.data)}).catch(()=>{})
    })
    return(
        <div class='mybox' style={{display:'flex',flexWrap:'wrap'}}>
            
            <ul style={{width:'50%'}}>
                <h1>Countries :</h1>
                {
                    countries.map((data)=>{
                        return <li><Link  to={data.name.common}>{data.name.common}</Link></li>
                    })
                }
            </ul>
            <div style={{border:'1px solid', width:'45%',margin:'10px'}}>
                <h1 style={{padding:'10px'}}>Country Details:</h1>
                <Outlet></Outlet>
            </div>
        </div>
    )
   
}

export default Countries