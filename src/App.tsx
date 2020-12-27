import React from 'react'
import { TodoListItem } from './TodoListItem'

const todos: Array<Todo> = [
  {text: "Terminar o app TODO", complete: true },
  {text: "Completar o desafio da Livelo", complete: true}
]

const App: React.FC = () => <TodoListItem todo={todos[0]}/>

export default App;
