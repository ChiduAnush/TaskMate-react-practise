import React from 'react'

export const AddTodo = () => {
    return (
        <div className='container my-3'>
            <h5>Add a task</h5>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Task title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Task description</label>
                    <input type="text" class="form-control" id="desc" />
                </div>

                <button type="submit" class="btn btn-success btn-sm">Add task</button>
            </form>
        </div>
    )
}
