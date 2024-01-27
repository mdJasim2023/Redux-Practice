let initialvalue = {
    todos:[
        {
            task:'JasiM',
            isDone:false
    }
],
    new:'',
    isDone:false
}

let TodoReducer = (state=initialvalue,action)=>{
 
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,state.new]}
    }
    if(action.type==='Delete'){
        var temp = [...state.todos]
        temp.splice(action.index,1)
        return {...state,todos:[...temp]}
    }
    if(action.type==='UpdateTodo'){
        return {...state,new:action.payload}
    }
    if(action.type==='Done'){
        var temp = [...state.todos]
        
        .isDone=!(temp[action.index].isDone)
    }
    return  state
}

export default TodoReducer