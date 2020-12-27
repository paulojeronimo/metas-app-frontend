import React, { ChangeEvent, useState } from 'react'

export const AddTodoForm: React.FC = () => {
    const [newTodo, setNewTodo] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    return (
        <form>
            <input type="text" onChange={handleChange}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}