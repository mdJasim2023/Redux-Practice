import React from "react";
import { connect } from "react-redux";

const Todolist = (props)=>{
    console.log(props);
    return(
        <div className="border m-2 border-warning">
            <div className="border m-5 w-25 p-3 border-success">
                <h1 className="text-danger">TodoList :</h1>
                <input type="text" onKeyUp={(e)=>{props.dispatch({type:'UpdateTodo',payload:e.target.value})}}/>
                <button onClick={()=>{props.dispatch({type:'ADDTODO'})}}>AddTask</button>
            </div>
            <ul className="border border-info p-2 m-5">
                {
                    props.Todolist.todos.map((a,ind)=>{
                        return <li className="p-2 m-3 border w-25 list-group-item d-flex justify-content-around">
                            <b>{a}</b>
                            <button className="btn btn-success" onClick={()=>{props.dispatch({type:'Done'})}}>Done</button>
                            <button className="btn btn-danger" onClick={()=>{props.dispatch({type:'Delete'})}}>Delete</button>
                            </li>
                    })
                }
            </ul>
        </div>
    )
}

export default connect(store=>store) (Todolist)