import React, { useState } from 'react'
import { AddTodoForm } from './AddTodoForm'
import { TodoList } from './TodoList'

const initialTodos: Array<Todo> = [
  {text: "Terminar o app TODO", complete: true },
  {text: "Completar o desafio da Livelo", complete: false}
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)

  const toogleTodo: ToogleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo)
        return {
          ...todo,
          complete: !todo.complete          
        }
      return todo
    })
    setTodos(newTodos)
  }

  return <>
    <TodoList todos={todos} toogleTodo={toogleTodo}/>
    <AddTodoForm/>
  </>
}

export default App;