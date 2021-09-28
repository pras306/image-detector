import React, { useState } from 'react';
import Particles from 'react-particles-js';
import axios from 'axios';

import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import ImageCard from '../components/ImageCard/ImageCard';
import ListItems from '../components/ListItems/ListItems';
import Loader from '../components/Loader/Loader';
import { CLARIFAI_BASE_URL, CLARIFAI_MODELS } from '../apis/requests';

const App = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [box, setBox] = useState({});
  const [listItems, setListItems] = useState([]);
  const [loader, setLoader] = useState(false);

  const onSearch = async (term) => {
    try {
      setLoader(true);
      let response = await axios.post(CLARIFAI_BASE_URL + CLARIFAI_MODELS.faceModel, {
        term: term
      });
      
      if(response.data.Error) {
        throw new Error(response.data.Error);
      }
      setLoader(false);
      setImageSrc(term);
      let width = document.getElementById("inputImage").width;
      let height = document.getElementById("inputImage").height;
      setBox({
        top_row: height * response.data.top_row,
        left_col: width * response.data.left_col,
        right_col: width - (width * response.data.right_col),
        bottom_row: height - (height * response.data.bottom_row)
      });

      setLoader(true);
      findClosestCelebrity(term);
      setLoader(false);
    } catch(err) {
      alert(err.message);
      setLoader(false);
    }
  }

  const findClosestCelebrity = async (term) => {
    let response = await axios.post(CLARIFAI_BASE_URL + CLARIFAI_MODELS.celebrityModel, {
      term: term
    });

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

  const renderPage = () => {
    if(loader) {
      return <Loader />
    } else {
      return(
        <React.Fragment>
          <div className="app__body__searchbar">
            <SearchBar onSearchSubmit={onSearch} />
          </div>
          <div className="app__body__container">
            <ImageCard src={imageSrc} box={box} />
            <ListItems items={listItems} />
          </div>
        </React.Fragment>
      )
    }
  }

  return (
    <div className="app">
      <Particles className='app__particles' params={ particleOptions} />
      <div className="app__body">
        { renderPage() }
      </div>
    </div>
  );
}

export default App;
