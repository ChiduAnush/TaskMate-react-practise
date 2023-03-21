import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className='container'>
            <h3 className='text-center my-3 '>Todos list</h3>
            {/* {props.todos} */}
            <TodoItem todo={props.todos[0]} />
        </div>
    )
}
