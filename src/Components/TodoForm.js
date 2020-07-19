import React, { useState } from 'react';
import {
    Form,
    FormGroup,
    Input,
    Button,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import { v4 } from 'uuid';

const TodoForm = ({ addTodos }) => {
    const [todoItem, setTodoItem] = useState("");

    const todoSubmit = e => {
        e.preventDefault();
        if (todoItem === "") {
            return alert('Please enter a todo');
        };

        const todo = {
            todoItem,
            id: v4(),
        };

        addTodos(todo);

        setTodoItem("");
    };

    return(
        <Form onSubmit={todoSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Next todo"
                        value={todoItem}
                        onChange={e => setTodoItem(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                            color="success"
                        >
                            Add Todo
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
};

export default TodoForm;
