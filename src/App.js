import './App.css';
import Header from "./my components/Header";
import { Todos } from './my components/Todos';
import { Footer } from './my components/Footer';

function App() {

  let todos = [
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

  ]

  return (

    <>
      <Header title="TaskMate" searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
