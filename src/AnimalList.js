import React from 'react';
import AnimalCard from './AnimalCard.js';

export default function AnimalList({ animals }) {
  console.log(animals);
  return (
    <div className='animal-row'>
      {
        animals.map((animal, i) => <AnimalCard {...animal} 
          key={animal.name + i}/>)
      }
    </div>

  );
}






  


