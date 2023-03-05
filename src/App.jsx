import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.scss";


function App() {

    const [vardas, setVardas] = useState('');
    const [pavarde, setPavarde] = useState('');
    const [suma, setSuma] = useState(0);
    const [klientas, setKlientas] = useState([]);



  return (
    <>
          <div className="card mt-5">
            <div className="card-header">
                <h3>Nauja Sąskaita</h3>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
              <input type="text" className="form-control" id="floatingInput" placeholder="Vardas"/>
              </li>
              <li className="list-group-item">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Pavardė"/>
              </li>
              <button type="button" className="btn btn-primary btn-sm">Atidaryti Sąskaita</button>
            </ul>
          </div>
    </>
  );
}

export default App;