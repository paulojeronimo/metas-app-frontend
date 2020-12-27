import React, { ChangeEvent, FormEvent, useState } from 'react'

interface AddTodoFormProps {
    addTodo: AddTodo
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (newTodo.trim() !== "") {
            addTodo(newTodo)
            setNewTodo("")
        }
    }

    return (
        <form>
            <input type="text" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>
    )
}