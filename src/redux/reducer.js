import { combineReducers } from "redux";
import { statusFilters } from "./constants";
// init for Tasks
const tasksInitialState = [
        { id: 0, text: "Learn HTML and CSS", completed: true },
        { id: 1, text: "Get good at JavaScript", completed: true },
        { id: 2, text: "Master React", completed: false },
        { id: 3, text: "Discover Redux", completed: false },
        { id: 4, text: "Build amazing apps", completed: false },
    ];
// reducer for Tasks
export const tasksReducer = (state = tasksInitialState, action) =>{
switch (action.type) {
    case "task/addTask":
        return[...state, action.payload];
    case "task/deleteTask":
        return state.filter(task => task.id !== action.payload);      
    case "task/toggleCompleted":
        return state.map(task =>{
                if(task.id !== action.payload){
                    return task;
                }
                return{...task, completed: !task.completed};
            })
    default:
      return state;
  }
}
// init for Filters
const filtersInitialState = { 
        status: statusFilters.all,
}
// reducer for Filters
export const filterReducer = (state = filtersInitialState, action) =>{
    switch (action.type) {   
        case "filters/setStatusFilter":
            return{
                ...state,
                status: action.payload,
            }
        default:
          return state;
      }
}
//gather split reducer
// export const rootReducer = (state = {}, action) =>{
//     return{
//         tasks: tasksReducer(state.tasks, action),
//         filters: filterReducer(state.filters, action),
//     }
// }
export const rootReducer = combineReducers({
    tasks: tasksReducer,
    filters: filterReducer,
});