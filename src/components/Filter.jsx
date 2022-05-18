import React,{useEffect} from "react";
import "./style/Filter.css";
import { MdArrowForwardIos } from "react-icons/md";
import {GenerList} from './data/GenerList'
function Filter({setActiveGenre,activeGenre,setFilterd,movies}) {
  //*function that cretes a list of geners in the TMDB API//*
    const List = GenerList.map((genre) => {
        return (
          <button onClick={()=>setActiveGenre(genre.id)} className="filterButton" key={genre.id}>
          {genre.name} 
            </button>
        );
    })
    useEffect(() => {
      if(activeGenre=== 0){
       setFilterd(movies)

       return;
      }
      const filterd = movies.filter((movie)=>
      movie.genre_ids.includes(activeGenre));
      setFilterd(filterd);

   }, [activeGenre]);
   


    return (
      
    <div filter-card-container>
      <div className="filter-panel card">
        <div className="name">
          <h2>Sort</h2>
          <span className="icons">
            <MdArrowForwardIos />
          </span>
        </div>
      </div>
      <div className="filter-panel card ">
        <div className="name">
          <h2>Filters</h2>
          <span className="icons">
            <MdArrowForwardIos />
          </span>
        </div>
        <div className="filter-panel card">
            <h3 className="name genres">Genres</h3>
            <div className="filter-container">
            {List}
            </div>
            
        </div>
      </div>
      <div className="filter-panel card ">
        <div className="name">
          <h2>Watch to Watch </h2>
          <span className="icons">
            <MdArrowForwardIos />
          </span>
        </div>
      </div>
      <button className="btn"><p className="btn-title">Search</p></button>
    </div>
  );
}

export default Filter;
