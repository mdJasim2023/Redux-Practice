
import React from "react";
import { connect } from "react-redux";

function Counter3(props){
    console.log(props);
    return(
        <div className="border border-info p-3 m-2">
            <h1>Counter 3 : {props.counter3.count}</h1>
            <button className="btn btn-success m-2" onClick={()=>{props.dispatch({type:'Inc3'})}}>Increment</button>
            <button className="btn btn-danger m-2" onClick={()=>{props.dispatch({type:'Dec3'})}}>Decrement</button>
            <button className="btn btn-info m-2" onClick={()=>{props.dispatch({type:'Res3'})}}>Restart</button>
        </div>
    )
}
export default connect((store)=>{return store}) (Counter3)