import { connect } from "react-redux";
import React from "react";

function Counter1(props){
    return(
         <>
            <h1>Counter 1 : {props.counter1.count}</h1>
            <button onClick={()=>{props.dispatch({type:'Inc'})}}>Increment</button>
            <button onClick={()=>{props.dispatch({type:'Dec'})}}>Decrement</button>
        </>
    )
}

export default connect((store)=>{return store}) (Counter1)