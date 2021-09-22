export const initialState = {
  employees: [],
  activities:[]
};
const reducer = (state,action) =>{
    switch (action.type) {
        case 'SET_EMPLOYEES':
        return {
            ...state,
            employees: action.payload
        };
        case 'Drop_EMPLOYEES':
        return {
            ...state,
            activities: action.payload
        };
         case 'Add_Balance':
        return {
            ...state,
            activities: action.payload
        };
        default:
        return state;
    }

}
export default reducer;