import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.scss";
import NewAcc from "./Components/Create";




const KEY = 'costumer';

function App() {

  const [list, setList] = useState(null);
  const [lastRefresh, setLastRefresh] = useState(Date.now());
  const [newAccData, setNewAccData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    setList(read(KEY));
  }, [lastRefresh]);

  useEffect (() => {
    if (null === newAccData) {
      return;
    }
    NewAcc(KEY, newAccData);
    setLastRefresh(Date.now())
  }, [newAccData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    // tipo klientas(narsykle)
    setList(l => l.filter(d => deleteData.id !== d.id))
    // tipo serveris
    destroy(KEY, deleteData.id);
    setLastResfresh(Date.now())
  }, [deleteData]);

  useEffect(() => {
    if (null === editData) {
      return;
    }
    edit(KEY, editData, editData.id);
    setLastResfresh(Date.now())
  }, [editData]);



  return (
    <>
      <div className="container">
      <div className="row">
          <div className="col-4">
              <NewAcc setNewAccData={setNewAccData} />
          </div>
      <div className="col-8">
          <List list={list} setDeleteData={setDeleteData} setModalData ={setModalData}/>
      </div>
      </div>
  </div>
  <Edit modalData={modalData} setModalData={setModalData} setEditData={setEditData}/>
    </>
  );
}

export default App;