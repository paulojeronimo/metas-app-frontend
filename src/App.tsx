import React, { useState } from 'react'
import { TodoListItem } from './TodoListItem'

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

  return (
    <>
      <TodoListItem todo={todos[0]} toogleTodo={toogleTodo}/>
      <TodoListItem todo={todos[1]} toogleTodo={toogleTodo}/>
    </>
  )
}

export default App;