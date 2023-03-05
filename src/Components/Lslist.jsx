


import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.scss";
import randColor from "./Functions/randColor";
import { v4 as uuidv4 } from 'uuid';


function App() {

    const [vardas, setVardas] = useState('');
    const [pavarde, setPavarde] = useState('');
    const [suma, setSuma] = useState(0);
    const [klientas, setKlientas] = useState([]);


    const addVardas = e => {
      setVardas(e.target.value);
    }

    const addPavarde = e => {
      setPavarde(e.target.value);
    }

    const addKlientas = () => {
      setKlientas(k => [...k,
        {
          id: uuidv4(),
          vardas,
          pavarde, 
          suma, 
          color: randColor()
        }
      ]);
      setVardas('');
      setPavarde('');
    }
    const del = suma => {
      setKlientas(suma => suma.filter(suma => suma === 0));

    }


  return (
    <>
          <div className="card m-5">
            <div className="card-header center">
                <h3 className="text-center" >Nauja Sąskaita</h3>
            </div>
            <ul className="list-group list-group-flush">
              {
                klientas.map((k, i) =>
                <li key={i} className="list-group-item"
                style={{color: k.color}}>
                  {k.name} {k.pavarde}<b></b> <b>{k.suma}</b>
                  <div className="del-button" onClick={() => del(k.suma)}></div>
                </li>)
              }
              <li className="list-group-item">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Vardas"onChange={addVardas} value={vardas}/>
              </li>
              <li className="list-group-item">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Pavardė"onChange={addPavarde} value={pavarde}/> 
              </li>
              <button type="button" className="btn btn-primary btn-sm m-4" onClick={addKlientas}>Atidaryti Sąskaita</button>
            </ul>
          </div>
    </>
  );
}

export default App;