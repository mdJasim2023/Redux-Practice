import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function CountryDetails() {
  var params = useParams();
  var [countrydet, setCountrydet] = React.useState(null);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${params.cname}`)
      .then((res) => {
        setCountrydet({ ...res.data[0] });
      });
  }, []);
  return (
    <>
      {countrydet && 
        <>
          <h1>hello</h1>
          <h1>{countrydet.name.common}</h1>
          <h1>{countrydet.population}</h1>
          <h1>{countrydet.capital}</h1>
          <img src={countrydet.flags.png} alt="" />
        </>
      }
    </>
  );
}

export default CountryDetails;
