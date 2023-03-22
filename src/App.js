import './App.css';
import Header from "./my components/Header";
// import { Todos } from './my components/Todos';
import { Footer } from './my components/Footer';
import { useState, useEffect } from 'react';
// import { AddTodo } from "./my components/AddTodo";
import { About } from "./my components/About";
import { Home } from "./my components/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // const onDelete = (todo) => {
  //   console.log("I am on delete of todo", todo);

  //   setTodos(todos.filter((e) => {
  //     return e !== todo;
  //   }));
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }

  // const addTodo = (title, desc) => {
  //   console.log("i am adding this todo", title, desc)
  //   let sno;
  //   if (todos.length == 0) {
  //     sno = 0;
  //   } else {
  //     sno = todos[todos.length - 1].sno + 1;
  //   }
  //   const myTodo = {
  //     sno: sno,
  //     title: title,
  //     desc: desc
  //   }
  //   setTodos([...todos, myTodo]);
  //   console.log(myTodo);
  // }


  // const [todos, setTodos] = useState([
  //   {
  //     sno: 1,
  //     title: "Go to the market",
  //     desc: "you need to go to the market to get this job done"
  //   },
  //   {
  //     sno: 2,
  //     title: "go to the mall",
  //     desc: "you need to go to the market to get this job done2"
  //   },
  //   {
  //     sno: 3,
  //     title: "go to the ghat",
  //     desc: "you need to go to the market to get this job done3"
  //   }

  // ]);
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  return (

    <>
      <Router>
        <Header title="TaskMate" searchBar={false} />

        {/* <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Switch> */}


        <Routes>
          {/* <Route path="/" element={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />

              </>
            )
          }} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>



        <Footer />
      </Router>
    </>
  );
}

export default App;
