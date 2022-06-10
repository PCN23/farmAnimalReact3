import React from 'react';



export default function AnimalCard({ animal }) {
  console.log(animal);
  return (
    <div className='farm-animals'>
      <img src={`/images/${animal}.svg`}/>
      <p>{animal}</p>
    </div>
  );
}
