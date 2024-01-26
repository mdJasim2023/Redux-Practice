import React from "react";
import { connect } from "react-redux";

function Counter1(props){
    console.log(props);
    return(
        <>
            <h1>Counter :{props.counter.count}</h1>
            <button onClick={()=>{props.dispatch({type:'Inc'})}}>Increment</button>
            <button onClick={()=>{props.dispatch({type:'Dec'})}}>Decrement</button>
            <button onClick={()=>{props.dispatch({type:'Res'})}}>Restart</button>
        </>
    )
}

export default connect((store)=>{return store}) (Counter1)