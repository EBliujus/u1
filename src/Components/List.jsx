function List({list, setDeleteData, setModalData}) {

    const destroy = k => {
        setDeleteData(k);
    }

    if (null === list) {
        return (
            <div className="card mt-5">
                <div className="card-header">
                     <h2>Sąskaitų sąrašas kraunasi</h2>
                </div>
                <div className="card-body">
                    
                </div>
            </div>
    
        )
        
    }

    return (
        <div className="card mt-5">
            <div className="card-header">
                 <h2>Accounts List</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        list.length
                         ?
                        list.map(k => <li className="list-group-item">
                        {k.vardas} {k.pavarde} <i>{k.size}</i>
                        <div className="del-button" onClick={() => destroy(k)}></div>
                        <div className="nu-button"></div>
                        <div className="pri-button"></div>
                        </li>)
                        :
                        <li className="list-group-item">Naujų sąskaitų nėra</li>
                    }
                    
                </ul>
            </div>
        </div>

    )
}

export default List;