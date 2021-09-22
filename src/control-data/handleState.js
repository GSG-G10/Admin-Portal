import addBalance from "../utils/addBalance";
import dropEmployees from "../utils/deleteEmploye";

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
      const emplo = {
        ...state,
        employees: dropEmployees(state.employees,action.payload),
        activities: [...state.activities,{type: 'Drop', msg:`You made drop for ${action.payload} at ${new Date()}`}]
        }
        localStorage.setItem('activities',JSON.stringify(state.activities))
        return emplo;
         case 'Add_Balance':
            const obj ={
            ...state,
                employees: addBalance(state.employees,action.payload),
                activities: [...state.activities,{type: 'Add', msg:`You made add balance for ${action.payload} at ${new Date()}`}]
            };
            localStorage.setItem('activities',JSON.stringify(state.activities));
            return obj;
            case 'GET_ACT_LOCALSTORAGE':
               return{
                    ...state,
                activities: JSON.parse(localStorage.getItem('activities'))
               }
        default:
        return state;
    }

}
export default reducer;