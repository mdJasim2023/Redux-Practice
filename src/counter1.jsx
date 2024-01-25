
import React from "react";
import { connect } from "react-redux";

function Counter1(props){
    console.log(props);
    return(
        <div className="border border-info p-3 m-2">
            <h1>Counter 1 : {props.counter1.count}</h1>
            <button className="btn btn-success m-2" onClick={()=>{props.dispatch({type:'Inc1'})}}>Increment</button>
            <button className="btn btn-danger m-2" onClick={()=>{props.dispatch({type:'Dec1'})}}>Decrement</button>
            <button className="btn btn-info m-2" onClick={()=>{props.dispatch({type:'Res1'})}}>Restart</button>
        </div>
    )
}

export default connect((store)=>{return store}) (Counter1)