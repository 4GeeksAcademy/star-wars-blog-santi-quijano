import React, { useContext } from 'react';
import CharacterCard from './CharacterCard';
import { Context } from '../store/appContext';

const CharactersList = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className='card-group'>
      {store.people.map((item, index) => {

        return <CharacterCard item={item} />
      })}
    </div>
  )
}

export default CharactersList
