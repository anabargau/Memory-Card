import React, { useState} from 'react';
import './App.css';
import Title from './components/Title';
import Instructions from './components/Instructions';
import Score from './components/Score';
import Grid from './components/Grid';
import images from './images/images';

function App() {
  const [score, setScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  function clickImage(event) {
    const id = event.target.id;
    if (clickedImages.includes(id)) {
      resetScore();
      setClickedImages([]);
    } else {
      clickedImages.push(id)
      setClickedImages(clickedImages);
      incrementScore();  
    }
    randomizeArray();
  };

  function resetScore() {
    setScore(0);
  };

  function incrementScore() {
    setScore(score + 1);
  };

  function checkIfBestScore() {
    if (score > bestScore) {
      setBestScore(score);
    };
  };

  function randomizeArray(array = images) {
    for(let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
  };

  return (
    <div className='app'>
      <Title />
      <Instructions />
      <Score  bestScore={bestScore} score={score} checkIfBestScore={checkIfBestScore}/>
      <Grid images={images} clickImage={clickImage} randomizeArray={randomizeArray}/>
    </div>
  );
};

export default App;
