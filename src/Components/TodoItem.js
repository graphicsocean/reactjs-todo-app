import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <> 
        <main className="text-center mt-2">
            <h3>{todo.title}</h3>
            <p  className="">{todo.desc}</p>
            <div className="mb-5">
            <button className="btn btn-block btn-lg px-4 btn-danger" onClick={()=>{onDelete(todo)}}>Delete or Mark Done</button>
            </div>
        </main>
         <hr/>
         </>
    )
}
