import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.scss";
import newAcc from "./Components/NewAcc";

const KEY = 'klientas';

function App() {
  useEffect(() => {
    setList(read(KEY));
  },[lastRefresh]);

  useEffect(() => {
    if (null === newAcc) {
      return;
    }
    
  })
  
  return (

  );
}

export default App;
