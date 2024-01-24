import React from "react";
import { useParams } from "react-router-dom";

function Saved(){
    let [std,setStd] = React.useState(null) 

    const params = useParams()
    console.log(params);

    React.useEffect(()=>{
        setStd({...JSON.parse(params.cname)})
    },[])
    return(
        <>
             {std && 
             <>
                <h1>Username :{std.username}</h1>
                <h1>Password :{std.password}</h1>
            </>
             }
        </>
    )
}

export default Saved