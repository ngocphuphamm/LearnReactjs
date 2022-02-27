const intialState =  {
    list : [],
    activeId : null,
}
const hobbyReducers = (state = intialState,action) =>{
    switch(action.type){
        case 'ADD_HOBBY' :{
            const newList = [...state.list];
            newList.push(action.payload);

            return {
                // tất cả state còn lại giữ nguyên
                ...state,
                list : newList,
            }
        };
        case 'SET_ACTIVE_HOBBY':
        {
            const newActiveId = action.payload.id;
            return {
              ...state,
              activeId : newActiveId,
            }
        }
        default : 
            return state
    }
}
export default hobbyReducers;