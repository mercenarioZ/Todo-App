// Tạo actions creator
export const addTodo = (data) => {
    return {
        type: "todoList/addTodo",
        payload: data,
    };
};

export const deleteTodo = (id) => {
    return {
        type: "todoList/deleteTodo",
        payload: id,
    };
};

export const searchFilterChange = (text) => {
    return {
        type: "filter/searchFilterChange",
        payload: text,
    };
    // tra ve object thi nho de vao return
};

export const statusFilterChange = (status) => {
    return {
        type: 'filter/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (priorities) => {
    return {
        type: 'filter/priorityFilterChange',
        payload: priorities
    }
}

export const toggleCheckTodo = (todoId) => {
    return {
        type: 'todoList/toggleCheckbox',
        payload: todoId
    }
}