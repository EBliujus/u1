import { useState } from "react";

function Create({setCreateData}) {

    const [vardas, setVardas] = useState('');
    const [pavarde, setPavarde] = useState('');
    const [size, setSize] = useState(0);


    const addVardas = e => {
        setVardas(e.target.value);
    }

    const addPavarde =  e => {
        setPavarde(e.target.value);
    }

     const create = () => {
        if(vardas === '' && pavarde === '') {
            create(null);
            return;
        }
        setCreateData({
            vardas,
            pavarde,
            size
        });
        setVardas('');
        setPavarde('');
        setSize(0)
     }   



  return (
    <div className="card mt-5">
        <div className="card-header">
            <h2>New Account</h2>
        </div>
            <div className="card-body">
                <div className="m-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Vardas" onChange={addVardas} value={vardas}/>
                </div>
                <div className="m-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Pavardė" onChange={addPavarde} value={pavarde}/> 
                </div>
                <button type="button" className="btn btn-primary btn-sm m-4" onClick={create}>Create New Account</button>
      </div>
    </div>
  );
}

export default Create;
