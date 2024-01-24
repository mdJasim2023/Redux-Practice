import React from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import './App.css'
function Countries(){
    let [countries,setCountries]=React.useState([]);
    let [order,setOrder]=React.useState(true)
    let [search,setSearch]=React.useState('')
    let [temp,setTemp]=React.useState([])

    React.useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((res)=>{setCountries(res.data);setTemp(res.data)})
    },[])
    const sortbycountries = ()=>{
        order = !order
        countries.sort((a,b)=>{
          if(a.name.common > b.name.common){
            return order? 1:-1;
          }
          else{
            return order?-1:1;
          }
        })
        setCountries([...countries])
        setOrder(order)
    }

    const fil = (e)=>{
      setCountries([...temp])
        setCountries(countries.filter((b)=>{
          return(
            (b.name.common.toLowerCase()).includes(e.toLowerCase())
          )
        }))
    }
    console.log(temp);
      return(
        <div className="d-flex flexwrap">
          <ul className="w-50">
            <h1 className="headings">Countries :</h1>
            {order && (<button className="btn btn-info" onClick={()=>{sortbycountries()}}>Sort&#x2193;</button>)}
            {!order && (<button className="btn btn-info" onClick={()=>{sortbycountries()}}>Sort&#x2191;</button>)}
             
             <input type="text" onKeyUp={(e)=>{fil(e.target.value)}} />
            {
              countries.map((a)=>{
                return (
                  <li><Link id='link' to={`countrydetails/${a.cca2}`}>{a.name.common}</Link></li>
                )
              })
            }
          </ul>
          <div className="w-50">
            <h1 className="headings">Country Details :</h1>
            <Outlet></Outlet>
          </div>
        </div>
  )
}

export default Countries