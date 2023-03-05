import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import List from './Components/List';
import { create, destroy, read } from './Functions/localStorage';

const key = 'klientas';

function App() {

    const [createData, setCreateData] = useState(null);
    const [lastRefresh, setLastRefresh] = useState(Date.now());
    const [list, setList] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [modalData, setModalData] = useState(null);



    useEffect(() => {
      setList(read(key));
    }, [lastRefresh]);


    useEffect(() => {
      if (null === createData) {
        return;
      }
      create(key, createData);
      setLastRefresh(Date.now())
    }, [createData]);

    useEffect(() => {
      if (null === deleteData) {
        return;
      }
      // klientas
      setList(l => l.filter(d => deleteData.id !== d.id));
      
      
      // tipo serveris
      destroy(key, deleteData.id);
      setLastRefresh(Date.now())
    }, [deleteData]);

  return(
    <div className='container'>
        <div className='row'>
            <div className='col-4'>
             <Create setCreateData={setCreateData}/>
            </div>
            <div className='col-8'>
              <List list={list} setDeleteData={setDeleteData} setModalData={setModalData}/>
            </div>
        </div>
    </div>
  )
}

export default App;