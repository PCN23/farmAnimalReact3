import React from 'react';
import AnimalCard from './AnimalCard.js';

export default function AnimalList({ animals }) {
  return (
    <div>

      {
        animals.map((animal, i) => <AnimalCard {...animal} 
          key={animal.name + i}/>)
      }
    </div>

  );
}






  


