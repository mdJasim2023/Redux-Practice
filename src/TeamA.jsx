import { connect } from "react-redux";
import React from "react";
import './App.css'
function TeamA(props){
    const handleOver = ()=>{
        props.dispatch({type:'over'})
        setP1(p1=null)
        setP2(p2=null)
        setP3(p3=null)
        setP4(p4=null)
        setP5(p5=null)
        setP6(p6=null)
        setP7(p7=null)
        setP8(p8=null)
        setP9(p9=null)
    }
    var [p1,setP1]=React.useState(null)
    var [p2,setP2]=React.useState(null)
    var [p3,setP3]=React.useState(null)
    var [p4,setP4]=React.useState(null)
    var [p5,setP5]=React.useState(null)
    var [p6,setP6]=React.useState(null)
    var [p7,setP7]=React.useState(null)
    var [p8,setP8]=React.useState(null)
    var [p9,setP9]=React.useState(null)
    const handleP1 = ()=>{
        props.dispatch({type:'p1'})
        setP1(p1+1)
        console.log(props);
    }
    const handleP2 = ()=>{
        props.dispatch({type:'p2'})
        setP2(p2+1)
    }
    const handleP3 = ()=>{
        props.dispatch({type:'p3'})
        setP3(p3+1)
    }

    const handleP4 = ()=>{
        props.dispatch({type:'p4'})
        setP4(p4+1)
    }

    const handleP5 = ()=>{
        props.dispatch({type:'p5'})
        setP5(p5+1)
    }

    const handleP6 = ()=>{
        props.dispatch({type:'p6'})
        setP6(p6+1)
    }

    const handleP7 = ()=>{
        props.dispatch({type:'p7'})
        setP7(p7+1)
    }

    const handleP8 = ()=>{
        props.dispatch({type:'p8'})
        setP8(p8+1)
    }

    const handleP9 = ()=>{
        props.dispatch({type:'p9'})
        setP9(p9+1)
    }

    
    return(
        <>
        <div>
            <h1>Team Argetina</h1>
            <div className="border p-3">
                <h3>Score :<b> {props.teamA.count}</b></h3>
                {props.teamA.isGoal && <h2 className="border p-4">{props.teamA.player} scored a goal({p1})</h2>}
            </div>
            {/* <button  className="m-1 btn btn-warning" onClick={()=>{handlebtn()}}>Goal</button> */}
            <button  className="btn btn-success" onClick={()=>{handleOver()}}>Match Over</button>
            <button className="btn btn-primary">Final score</button>
            <br />
            <button onClick={()=>{handleP1()}} className="btn btn-info text-light">Christain Romero(<strong>{p1}</strong>)</button>
            <button onClick={()=>{handleP2()}} className="btn btn-info text-light">Acuña(<strong>{p2}</strong>)</button>
            <button onClick={()=>{handleP3()}} className="btn btn-info text-light">Germán Pezzella (<strong>{p3}</strong>)</button>
            <button onClick={()=>{handleP4()}} className="btn btn-info text-light">CEnzo Fernandez (<strong>{p4}</strong>)</button> 
            <button onClick={()=>{handleP5()}} className="btn btn-info text-light">Otamendi (<strong>{p5}</strong>)</button> 
            <button onClick={()=>{handleP6()}} className="btn btn-info text-light">Di María (<strong>{p6}</strong>)</button> 
            <button onClick={()=>{handleP7()}} className="btn btn-info text-light">Alexis Mac Allister(<strong>{p7}</strong>)</button> 
            <button onClick={()=>{handleP8()}} className="btn btn-info text-light">Juan Foyth (<strong>{p8}</strong>)</button> 
            <button onClick={()=>{handleP9()}} className="btn btn-info text-light">Germán Pezzella(<strong>{p9}</strong>)</button> 
            {props.teamA.isGoal && <h4>TEAM ARGENTINA scored a goal:({props.teamA.count})</h4>}
        </div>
        </>
    )
}

export default connect(store=>store) (TeamA)