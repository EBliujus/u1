import { useState } from "react";

function newAcc({setNewAccData}) {

    const [vardas, setVardas] = useState('');
    const [pavarde, setPavarde] = useState('');

    const doVardas = e => {
        setVardas(e.target.value);
    }
    const doPavarde = e => {
        setPavarde(e.target.value);
    }
    const newAcc = () => {
        setNewAccData({
            vardas,
            pavarde
        });
        setVardas('');
        setPavarde('')
    }

    return (
          <div className="card mt-5">
            <div className="card-header">
                <h3>Nauja Sąskaita</h3>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
              <input type="text" className="form-control" id="floatingInput" placeholder="Vardas" onChange={doVardas} value={vardas}/>
              </li>
              <li className="list-group-item">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Pavardė"onChange={doPavarde} value={pavarde}/>
              </li>
              <button type="button" className="btn btn-primary btn-sm"onClick={newAcc}>Atidaryti Sąskaita</button>
            </ul>
          </div>
    );
}

export default newAcc;