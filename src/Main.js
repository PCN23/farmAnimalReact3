import React from 'react';
import AnimalList from './AnimalList';
import backgroundImg from './background.png';
import { animals } from './animal.js';
import './Main.css';

export default function Main() {
  return (
    <main style={{ background: `url(${backgroundImg})` }}>
      <AnimalList animals={animals}/>
    </main>
  );
}
