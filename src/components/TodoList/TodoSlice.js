const initState = [
    {
        id: 1,
        name: "Learning TailwindCSS",
        completed: true,
        priority: "Medium",
    },

    {
        id: 2,
        name: "Learning React",
        completed: false,
        priority: "High",
    },
];

const todoListReducer = (state = initState, action) => {
    // console.log({ state, action });

    // action la mot object voi truong type va payload

    switch (action.type) {
        case "todoList/addTodo":
            return [action.payload, ...state];

        case "todoList/deleteTodo":
            const newTodoList = state.filter(
                (todo) => todo.id !== action.payload
            );

            return newTodoList;

        case "todoList/toggleCheckbox":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        default:
            return state;
    }
};

export default todoListReducer;
