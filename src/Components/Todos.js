import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center mb-5 mt-3">Your Todo's List</h3>
            {props.todos.length === 0 ? <div class="alert alert-danger" role="alert">
                No todo's to Display!
            </div> :
                props.todos.map((todo) => {
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)

                })
            }

        </div>
    )
}
