const initialvalue = {
    count:1000
}

let counterReducer3 = (state=initialvalue,action)=>{
    console.log(state);
    if(action.type==='Inc3'){
        return {...state,count:state.count+1000}
    }
    if(action.type==='Dec3'){
         return {...state,count:state.count-1000}
    }
    if(action.type==='Res3'){
        return {...state,count:initialvalue.count}
    }
    return state
}

export default counterReducer3