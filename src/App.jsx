import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <div className="card-header">
            <h3>Nauja Sąskaita</h3>
            </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
            <input type="email" class="form-control" id="floatingInput" placeholder="Vardas"/>
            </li>
            <li className="list-group-item">
                <input type="email" class="form-control" id="floatingInput" placeholder="Pavardė"/>
            </li>
            <li className="list-group-item"><button type="button" class="btn btn-primary btn-sm">Atidaryti Sąskaita</button></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
