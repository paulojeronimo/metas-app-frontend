import React, { ChangeEvent, FormEvent, useState } from 'react'

export const AddTodoForm: React.FC = () => {
    const [newTodo, setNewTodo] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }

    return (
        <form>
            <input type="text" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>
    )
}