import { connect } from "react-redux";
import React from "react";
import './App.css'

function TeamB(props){
    return(
        <div>
            <h1> Team Brazil </h1>
            <div className="border p-5" id="teamA">
                <h3>Score :<b> {props.teamB.count}</b></h3>
            </div>
            <button className="m-1 btn btn-warning" onClick={()=>{props.dispatch({type:'IncB'})}}>Goal</button>
            <button className="btn btn-success" onClick={()=>{props.dispatch({type:'overB'})}}>Match Over</button>
            {props.teamB.isGoal && <h4>Neymar scored a goal:({props.teamB.count})</h4>}
        </div>
    )
}

export default connect(store=>store) (TeamB)