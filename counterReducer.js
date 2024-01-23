const count=0;

const counterReducer = (state=count,action) => {
    if(action.type==="INC"){
        return state+1;
    }
    if(action.type==="DEC"){
        return state-1;
    }
    return state;
}

export default counterReducer