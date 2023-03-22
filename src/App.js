import './App.css';
import Header from "./my components/Header";
import { Todos } from './my components/Todos';
import { Footer } from './my components/Footer';
import { useState } from 'react';
import { AddTodo } from "./my components/AddTodo";


function App() {

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "go to the mall",
      desc: "you need to go to the market to get this job done2"
    },
    {
      sno: 3,
      title: "go to the ghat",
      desc: "you need to go to the market to get this job done3"
    }

  ]);

  return (

    <>
      <Header title="TaskMate" searchBar={false} />
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
