import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todoApi";

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);

    const nextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const prevTodo = () => {
        if (todoId === 1) return;
        
        setTodoId( todoId - 1 );
    }

    // Using a query hook automatically fetches data and returns query values
    // const { data: todos = [], error, isLoading } = useGetTodosQuery();
    const { data: todo, error, isLoading } = useGetTodoQuery( todoId );

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

            <pre>{ JSON.stringify( todo ) }</pre>

            <button onClick={ prevTodo }>
                Prev Todo
            </button>
            <button onClick={ nextTodo }>
                Next Todo
            </button>

            {/* <ul>
                {
                    todos.map(({ id, title, completed }) => (
                        <li key={ id }> <strong>{ completed ? 'DONE' : 'PENDING' }</strong> { title }</li>)
                    )
                }
            </ul>

            <button>
                Next Todo
            </button> */}
            
        </>
    )
}
