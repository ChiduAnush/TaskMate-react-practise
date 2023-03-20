import logo from './logo.svg';
import './App.css';
import Header from "./my components/Header";
import { Todos } from './my components/Todos';
import { Footer } from './my components/Footer';

function App() {

  return (

    <>
      <Header title="TaskMate" searchBar={false} />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
