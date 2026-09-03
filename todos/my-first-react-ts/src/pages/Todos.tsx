import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


export default function Todos() {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [showCompleted, setShowCompleted] = useState(false)

    async function getTodos() {
        let apiTodos = await fetch('https://jsonplaceholder.typicode.com/todos')
        let data: ITodo[] = await apiTodos.json()
        setTodos(data)
        console.log(data)
    }

    useEffect(() => {
        getTodos()
        console.log('Todos component mounted')
    }, [])

    return (
        <div>
            <button onClick={() => setShowCompleted(true)}>Show Completed</button>
            <ul>
                {todos
                    .filter((todo) => !showCompleted || todo.completed)
                    .slice(0, 20)
                    .map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            border: '1px solid black',
                            padding: '10px',
                            margin: '10px'
                        }}
                    >
                        <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
                        <p>Todo ID: {todo.id}</p>
                        <p>Title: {todo.title}</p>
                        <p>User ID: {todo.userId}</p>
                        <p>Completed: {todo.completed ? 'Completed' : 'Not Completed'}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}