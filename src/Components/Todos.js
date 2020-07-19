import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FcApproval } from 'react-icons/fc';

const Todos = ({todos, markComplete}) => {
    return(
        <ListGroup className="mt-3 mb-2 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoItem}
                    <span
                        className="checkIcon"
                        onClick={() => markComplete(todo.id)}
                    >
                        <FcApproval />
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default Todos;
