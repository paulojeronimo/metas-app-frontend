import React from 'react'
import { TodoListItem } from './TodoListItem'

interface TodoListProps {
    todos: Array<Todo>
    toogleTodo: ToogleTodo
}

export const TodoList: React.FC<TodoListProps> = ({todos, toogleTodo}) =>
    <ul>
        {todos.map(todo => <TodoListItem key={todo.text} todo={todo} toogleTodo={toogleTodo}/>)}
    </ul>