import React from "react";
import { isPropertySignature } from "typescript";
import { Todo } from "../models/Todo";

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {

    const onRemove = (todo: Todo) => {
        console.log();
    }

    const handleChange = (event: any) => {
        console.log("chaged");
    }

    return (
        <tr className="uk-animation-slide-bottom-medium">

            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox"
                        type="checkbox"
                        checked={props.todo.done}
                        onChange={handleChange}
                    ></input>
                </label>
            </td>
            <td className="uk-width-expand">
                {props.todo.title}
            </td>

            <td className="uk-width-auto">
                <button
                    className="uk-icon-button uk-button-danger"
                    uk-icon="trash"
                    onClick={() => onRemove(props.todo)}
                ></button>
            </td>
        </tr>


    );
}

export default TodoListItem;