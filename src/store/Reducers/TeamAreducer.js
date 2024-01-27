

const initialValue = {
    player:'',
    count:0,
    isGoal:false
}

const TeamAReducer = (state=initialValue,action)=>{
    // if(action.type==='goalA'){

    //     return {...state,count:state.count+1,isGoal:!false}
    // }
    if(action.type==='over'){
        return {...state,count:initialValue.count,isGoal:false}
    }
    if(action.type==='p1'){
        return {...state,count:state.count+1,isGoal:!false ,player:state.player='Christiano'}
    }
    if(action.type==='p2'){
        return {...state,count:state.count+1,isGoal:!false,player:state.player='Acuña'}
    }
    if(action.type==='p3'){
        return {...state,count:state.count+1,isGoal:!false,player:state.player='Germán Pezzella'}
    }
    if(action.type==='p4'){
        return {...state,count:state.count+1,isGoal:!false,player:state.player='CEnzo Fernandez'}
    }
    if(action.type==='p5'){
        return {...state,count:state.count+1,isGoal:!false,player:state.player='Otamendi'}
    }
    if(action.type==='p6'){
        return {...state,count:state.count+1,isGoal:!false,player:state.player='Di María'}
    }
    if(action.type==='p7'){
        return {...state,count:state.count+1,isGoal:!false,player:state.player='Alexis Mac Allister'}
    }
    if(action.type==='p8'){
        return {...state,count:state.count+1,isGoal:!false,player:state.player='Juan Foyth'}
    }
    if(action.type==='p9'){
        return {...state,count:state.count+1,isGoal:!false ,player:state.player='Germán Pezzella'}
    }



        return state
}

export default TeamAReducer