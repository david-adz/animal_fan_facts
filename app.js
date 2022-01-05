import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';


const title = '';
const showBackground = true;
const background = <img
  className='background'
  alt='ocean'
  src='/images/ocean.jpg'
/>;

const images = [];

for(const animal in animals) {
  images.push(
    <img 
        key={animal}
        className='animal'
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role='button'
        onClick={displayFact}
    />
  );
}

const animalFacts = (
  <div>
    <h1> { title === '' ? "Click an animal for a fun fact!" : title } </h1>
    {showBackground &&  background }
    <div className="animals">{ images }</div>
    <p id="fact"></p>
  </div>
);

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const randomFacts = Math.floor(Math.random() * animals[selectedAnimal].facts.length);
  const animalInfo = animals[selectedAnimal].facts[randomFacts];

  document.getElementById("fact").innerHTML = animalInfo;
} 



ReactDOM.render(
  animalFacts,
  document.getElementById("root")
);
