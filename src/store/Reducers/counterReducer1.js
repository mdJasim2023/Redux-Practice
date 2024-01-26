const initialvalue = {
    count:10
}

let CounterReducer = (state=initialvalue,action)=>{
    if(action.type==='Inc'){
        return {...state,count:state.count+10}
    }
    if(action.type==='Dec'){
        return {...state,count:state.count-1}
    }
    if(action.type==='Res'){
        return {...state,count:initialvalue}
    }
    return state
}


export default CounterReducer