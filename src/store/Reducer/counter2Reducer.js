const initialvalue = {
    count:100
}

let counterReducer1 = (state=initialvalue,action)=>{
    console.log(state);
    if(action.type==='Inc2'){
        return {...state,count:state.count+100}
    }
    if(action.type==='Dec2'){
         return {...state,count:state.count-100}
    }
    if(action.type==='Res2'){
        return {...state,count:initialvalue.count}
    }
    return state
}

export default counterReducer1