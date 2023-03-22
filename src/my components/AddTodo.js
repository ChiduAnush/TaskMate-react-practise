import React from 'react'
import { useState } from 'react';


export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("please fill out all the details")
        } else {
            props.addTodo(title, desc);
            setTitle("")
            setDesc("")

        }

    }

    return (
        <div className='container my-3'>
            <h5>Add a task</h5>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Task description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-success btn-sm">Add task</button>
            </form>
        </div>
    )
}
