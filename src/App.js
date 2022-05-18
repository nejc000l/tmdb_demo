import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Button from './components/Button';
function App() {
  const BASE_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);
  const [filterd, setFilterd] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);


  const getApi = async () => {
    const {
      data: { results },
    } = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    });
    setMovies(results);
    setFilterd(results);
  };
  useEffect(() => {
    getApi();
  }, []);
  
  const showMovies = () =>
  filterd.map((movie) => <MovieCard key={movie.id} movie={movie} />);
  return (

    <div className="App">
    <BrowserRouter>
      <Navbar />
      <main>
        <div className="container-wrapper">
          <div className="title">Popular Movies</div>
          <div className="container-content">
            <div className="filter">
            <Filter
                movies={movies}
                setFilterd={setFilterd}
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
              />
            </div>
            <div>
              <div className="container">{showMovies()}</div>
              <Button/>
            </div>
          </div>
        </div>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
