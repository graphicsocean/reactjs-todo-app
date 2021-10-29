import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header'
import { Footer } from './Components/Footer'
import { Todos } from './Components/Todos';
import { AddTodo } from './Components/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { About } from './Components/About';
import { Contact } from './Components/Contact';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];

  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    // console.log(myTodo)
  }


  return (
    <>
      <Router>
        <div className="col-lg-8 mx-auto p-3 py-md-5">
          <Header title="My Todos App" searchBAr={true} />
          <Switch>
            <Route exact path="/">
              <Todos todos={todos} onDelete={onDelete} />
            </Route>
            <Route exact path="/add">
              <AddTodo addTodo={addTodo} />
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
