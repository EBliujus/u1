import { useState } from 'react';

function NewAcc({setNewAccData}) {


    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [money, setMoney] = useState(0);

    const addName = e => {
        setName(e.target.value);
    }

    const addSurname = e => {
        setSurname(e.target.value);
    }

    const newAcc = () => {
        setNewAccData({
            name,
            surname,
            money
        });
        setName(' ');
        setSurname('');
        setMoney(0)
    }



    return (
          <div className="card mt-5">
            <div className="card-header">
                <h3>Nauja Sąskaita</h3>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
              <input type="text" className="form-control" id="floatingInput" placeholder="Vardas" onChange={addName} value={name}/>
              </li>
              <li className="list-group-item">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Pavardė"onChange={addSurname} value={surname}/>
              </li>
              <button type="button" className="btn btn-primary btn-sm"onClick={newAcc}>Atidaryti Sąskaita</button>
            </ul>
          </div>
    );
}

export default newAcc;