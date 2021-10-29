import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description should not be empty");
        }else{
            props.addTodo(title, desc);
            setDesc("");
            setTitle("");
        }
    }

    return (
        <div className="mb-5 mt-5">
            <h3>Add New Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Add</button>
            </form>
        </div>
    )
}
