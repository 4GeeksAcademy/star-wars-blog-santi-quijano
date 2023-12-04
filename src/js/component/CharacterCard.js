import React, { useContext } from 'react'
import { Context } from "../store/appContext";


const CharacterCard = ({ item }) => {

  const { store, actions } = useContext(Context);

  return (
    <div className='container w-50'>
      &nbsp;
      <div className="card me-3" style={{ minWidth: "300px" }}>
        <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text" style={{ padding: "0" }}></p>
          <a href="#" className="btn btn-primary">Learn more!</a>
        </div>
      </div>
    </div>
  )
};

export default CharacterCard;
