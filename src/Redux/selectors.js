import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filter.search;
export const filterStatusSelector = (state) => state.filter.status;
export const todoListSelector = (state) => state.todoList;
export const filterPrioritiesSelector = (state) => state.filter.priority;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, searchText, priority) => {
        return todoList.filter((todo) => {
            if (status === "All") {
                return priority.length ? todo.name.includes(searchText) && priority.includes(todo.priority) : todo.name.includes(searchText);
            } else {
                return (
                    todo.name.includes(searchText) && // Check the search box condition
                    (status === "Completed" ? todo.completed : !todo.completed) && // Check the radio buttons condition (completed or other)
                    (priority.length ? priority.includes(todo.priority) : true) // if do not choose any priority filter, the value is always true (its mean return all items in list).
                    // Its mean all the conditions over there must return true.
                );
            }
        });
    }
);
