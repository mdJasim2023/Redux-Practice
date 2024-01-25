const initialvalue = {
    count:0
}

let CounterReducer = (state = initialvalue,action)=>{
    if(action.type==='Inc'){
        return {...state,count:state.count+1}
    }
    if(action.type==='Dec'){
        return {...state,count:state.count-1}
    }
    if(action.type==='Res'){
        return {...state,count:initialvalue.count}
    }
    return state
}

export default CounterReducer