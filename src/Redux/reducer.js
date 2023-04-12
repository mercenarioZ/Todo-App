import { combineReducers } from "redux";
import filterReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodoSlice";

const rootReducer = combineReducers({
    todoList: todoListReducer,
    filter: filterReducer,
});

// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filterReducer(state.filter, action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// };

export default rootReducer;
