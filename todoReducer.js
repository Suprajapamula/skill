const initialState=["Supraja", "pamula","Chinna"]


function todoReducer(state=initialState,action) {
     if(action.type==="ADDTODO"){
        return [...state,action.payload]
     }
     return state;
}

export default todoReducer;