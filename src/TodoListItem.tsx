import React from "react"
import "./TodoListItem.css"

interface TodoListItemProps {
    todo: Todo
    toogleTodo: ToogleTodo
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toogleTodo }) => {
    return (
        <li>
            <label className={todo.complete ? "complete" : undefined}>
                <input type="checkbox" checked={todo.complete} onChange={() => toogleTodo(todo)}/>
                {todo.text}
            </label>
        </li>
    )
}