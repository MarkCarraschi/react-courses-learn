import React from "react";
import { Todo } from '../models/Todo'

const TodoList = () => {
    const todos: Todo[] = [
        { id: 1, title: 'Go to supermarket', done: false },
        { id: 2, title: 'Go to gym', done: false }
    ];
    return (<div>Todo List</div>);
}

export default TodoList;