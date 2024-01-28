import React, { useRef } from "react";
import { connect } from "react-redux";
import './App.css'

const Todolist = (props)=>{
    let inp =React.useRef()
    const handleEdit = (a,ind)=>{
        props.dispatch({type:'Edit',payload:ind})
        inp.current.value=a.task
    }
    
    return(
        <div className="border  border-warning w-50" id="cen">
            <div className="border m-5 w- p-3 border-success">
                <h1 className="text-danger">TodoList :</h1>
                <input ref={inp} type="text" className="p-1 m-1" onKeyUp={(e)=>{props.dispatch({type:'UpdateTodo',payload:e.target.value})}}/>
                {!props.Todolist.isUpdate && <button className="btn btn-success" onClick={()=>{props.dispatch({type:'ADDTODO'})}}>AddTask</button>}
                {props.Todolist.isUpdate && <button className="btn btn-secondary" onClick={()=>{props.dispatch({type:'Updatebtn'})}}>Update</button>}
            </div>
            
            <ul className="border border-info p-2 m-5">
            <h1 className="text-secondary p-2">Todos</h1>
           
                {
                    props.Todolist.todos.map((a,ind)=>{
                        return (<>
                        <li className="p-2 m-3 border w-50 list-group-item d-flex justify-content-around rounded">
                            <b style={a.isDone?{textDecoration:'line-through',color:'red'}:{}}>{a.task}</b>
                            <button className="btn btn-success" onClick={()=>{props.dispatch(a.isDone?{type:'Done',index:ind}:{type:'Done',index:ind})}} style={a.isDone?{backgroundColor:'orange'}:{backgroundColor:'green'}}>{a.isDone?'Undo':'Done'}</button>
                            {a.isDone && <button className="btn btn-danger" onClick={()=>{props.dispatch({type:'Delete',index:ind})}}>Delete</button>}
                            {!a.isDone && <button className="btn btn-warning" onClick={()=>{handleEdit(a,ind)}}>Edit</button>}
                            </li>
                            </>
                            )
                    })
                }
            </ul>
        </div>
    )
}

export default connect(store=>store) (Todolist)