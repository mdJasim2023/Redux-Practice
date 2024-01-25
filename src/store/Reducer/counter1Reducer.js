const initialvalue = {
    count:0
}

let counterReducer1 = (state=initialvalue,action)=>{
    console.log(state);
    if(action.type==='Inc1'){
        return {...state,count:state.count+1}
    }
    if(action.type==='Dec1'){
         return {...state,count:state.count-1}
    }
    if(action.type==='Res1'){
        return {...state,count:initialvalue.count}
    }
    return state
}

export default counterReducer1