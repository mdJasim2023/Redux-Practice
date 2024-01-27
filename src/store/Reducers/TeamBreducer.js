const initialValue = {
    count:0,
    isGoal:false
}

const TeamBReducer = (state=initialValue,action)=>{
    if(action.type==='IncB'){
        return {...state,count:state.count+1,isGoal:!false}
    }
    if(action.type==='overB'){
        return {...state,count:initialValue.count,isGoal:false}
    }
    return state
}

export default TeamBReducer