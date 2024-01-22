import React from "react";
import axios from "axios";
import './App.css'

function Countries(){
    let [countries,setCountries]=React.useState([])

    React.useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((res)=>{setCountries(res.data); console.log(res.data);}).catch(()=>{})
    },[])
    
    return(
        <table border='1px solid'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Region</th>
                    <th>Continents</th>
                    <th>Population</th>
                    <th>Flags</th>
                </tr>
            </thead>

            <tbody>
                {
                    countries.map((a)=>{
                        return(
                            <tr>
                                <td>{a.name.common}</td>
                                <td>{a.region}</td>
                                <td>{a.continents}</td>
                                <td>{a.population}</td>
                                <td><img src={a.flags.png} /></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    )
}


export default Countries