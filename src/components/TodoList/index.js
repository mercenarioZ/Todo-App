import { Button, Col, Input, Row, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, deleteTodo } from "../../Redux/actions";
import { todosRemainingSelector } from "../../Redux/selectors";
import Todo from "../Todo";
import "./styles.scss";

function TodoList() {
    const [todoName, setTodoName] = useState("");
    const [priority, setPriority] = useState("Medium");

    const todoList = useSelector(todosRemainingSelector);

    const dispatch = useDispatch();

    const handleAddButton = () => {
        // use Dispatch() in Redux to send an action
        dispatch(
            addTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            })
        );

        setTodoName("");
        setPriority("Medium");
    };

    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    };

    const handlePriorityChange = (value) => {
        setPriority(value);
    };

    const handleDeleteButton = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleEnterKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleAddButton();
        }
    };

    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col
                span={24}
                style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
            >
                {/* <Todo name='Learn React' priority='High' />
                        <Todo name='Learn Redux' priority='Medium' />
                        <Todo name='Something else' priority='High' /> */}

                {todoList.map((todo) => (
                    <div style={{ display: "flex" }}>
                        <Todo
                            id={todo.id}
                            key={todo.id}
                            name={todo.name}
                            priority={todo.priority}
                            completed={todo.completed}
                        />
                        <button
                            className='delete-button'
                            onClick={() => handleDeleteButton(todo.id)}
                            id={todo.id}
                            style={{ position: "absolute", right: 0 }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </Col>
            <Col span={24} style={{ position: "relative" }}>
                <div className='input-group'>
                    <Input.Group style={{ display: "flex" }} compact>
                        <Input
                            placeholder='Write some tasks'
                            value={todoName}
                            onChange={handleInputChange}
                            onKeyDown={handleEnterKeyDown}
                        />
                        <Select
                            style={{ lineHeight: "25px", width: "20%" }}
                            defaultValue='Medium'
                            value={priority}
                            onChange={handlePriorityChange}
                        >
                            <Select.Option
                                style={{
                                    lineHeight: "20px",
                                    width: "100%",
                                    margin: "0",
                                }}
                                value='High'
                                label='High'
                            >
                                <Tag color='red'>High</Tag>
                            </Select.Option>
                            <Select.Option
                                style={{
                                    lineHeight: "20px",
                                    width: "100%",
                                    margin: "0",
                                }}
                                value='Medium'
                                label='Medium'
                            >
                                <Tag color='blue'>Medium</Tag>
                            </Select.Option>
                            <Select.Option
                                style={{
                                    lineHeight: "20px",
                                    margin: "0",
                                    width: "100%",
                                }}
                                value='Low'
                                label='Low'
                            >
                                <Tag color='gray'>Low</Tag>
                            </Select.Option>
                        </Select>
                        <Button type='primary' onClick={handleAddButton}>
                            Add
                        </Button>
                    </Input.Group>
                </div>
            </Col>
        </Row>
    );
}

export default TodoList;
