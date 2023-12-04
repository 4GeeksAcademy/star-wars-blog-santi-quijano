import React, { useContext } from 'react';
import CharacterCard from './CharacterCard';
import { Context } from '../store/appContext';

const CharactersList = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      &nbsp;
      <h1 style={{ color: "red", marginLeft: "10px" }}>Characters</h1>
      &nbsp;
      <div className="d-flex flex-row flex-nowrap overflow-auto" >
        {store.people.map((item, index) => {

          return <CharacterCard item={item} />
        })}
      </div>
    </div>
  )
}

export default CharactersList
