import React from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import './App.css'
function Countries(){
    let [countries,setCountries]=React.useState([]);
    let [order,setOrder]=React.useState(true)
    let [search,setSearch]=React.useState('')

    React.useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((res)=>{setCountries(res.data)})
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
        var temp = countries.filter((a)=>{
          a.name.common.includes(e)
        })
    }
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