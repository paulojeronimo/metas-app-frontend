import React from 'react'
import { TodoListItem } from './TodoListItem'

const todos: Array<Todo> = [
  {text: "Terminar o app TODO", complete: true },
  {text: "Completar o desafio da Livelo", complete: false}
]

const App: React.FC = () => (
  <React.Fragment>
    <TodoListItem todo={todos[0]}/>
    <TodoListItem todo={todos[1]}/>
  </React.Fragment>
)

export default App;
