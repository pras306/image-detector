import React, { useState } from 'react';
import Particles from 'react-particles-js';
import axios from 'axios';

import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import ImageCard from '../components/ImageCard/ImageCard';
import ListItems from '../components/ListItems/ListItems';
import { CLARIFAI_BASE_URL, CLARIFAI_MODELS } from '../apis/requests';

const App = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [box, setBox] = useState({});
  const [listItems, setListItems] = useState([]);

  const onSearch = async (term) => {
    let response = await axios.post(CLARIFAI_BASE_URL + CLARIFAI_MODELS.faceModel, {
      term: term
    });

    console.log(response);
    setImageSrc(term);
    let width = document.getElementById("inputImage").width;
    let height = document.getElementById("inputImage").height;
    setBox({
      top_row: height * response.data.top_row,
      left_col: width * response.data.left_col,
      right_col: width - (width * response.data.right_col),
      bottom_row: height - (height * response.data.bottom_row)
    });

    findClosestCelebrity(term);
  }

  const findClosestCelebrity = async (term) => {
    let response = await axios.post(CLARIFAI_BASE_URL + CLARIFAI_MODELS.celebrityModel, {
      term: term
    });

    console.log(response);
    setListItems(response.data);
  }

  const particleOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      links: {
        color: {
          value: "#f0a07c"
        }
      },
      move: {
        enable: true,
        speed: 3
      }
    }  
  };

  return (
    <div className="app">
      <Particles className='app__particles' params={ particleOptions} />
      <div className="app__container">
        <SearchBar onSearchSubmit={onSearch} />
        <ImageCard src={imageSrc} box={box} />
      </div>
      <div className="app__container">
        <ListItems items={listItems} />
      </div>
    </div>
  );
}

export default App;
