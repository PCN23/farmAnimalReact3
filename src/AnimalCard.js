import React from 'react';



export default function AnimalCard(animal) {
  console.log(animal);
  return (
    <div className='farm-animals'>
      <img src={`/images/${animal.type}.svg`}/>
      <p>{animal.name}</p>
    </div>
  );
}
