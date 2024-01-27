let initialvalue = {
    todos:[],
    new:{
        task:'',
        isDone:false
    },
    selectIndex:null,
    isUpdate:false
}

let TodoReducer = (state=initialvalue,action)=>{
    if(action.type==='UpdateTodo'){
        return {...state,new:{task:action.payload}}
    }
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,{...state.new}]}
    }
    if(action.type==='Delete'){
        var temp = [...state.todos]
        temp.splice(action.index,1)
        return {...state,todos:[...temp]}
    }
   
    if(action.type==='Done'){
        let temp1 = [...state.todos]
        temp1[action.index].isDone=!temp1[action.index].isDone
        return {...state,todos:[...temp1]}
    }
    if(action.type==='Undo'){
        let temp2 = [...state.todos]
        temp2[action.index].isDone=!temp2[action.index].isDone
        return {...state,todos:[...temp2]}
    }
    if(action.type==='Edit'){
        return {...state,isUpdate:true,selectIndex:action.payload}
    }
    if(action.type==='Updatebtn'){
        let temp = [...state.todos];
        temp[state.selectIndex].task=state.new.task
        return {...state,todos:[...temp],isUpdate:false, selectIndex:null}
    }


    return  state
}

export default TodoReducer