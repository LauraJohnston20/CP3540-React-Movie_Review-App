import './App.css';
import { useEffect, useState } from 'react';
import { MovieList } from './Movies';
import { Routes, Route } from "react-router-dom";
import { Home, AddReview } from "./pages";


function App() {

  const [movies, setMovies] = useState(null);

  useEffect( () => {
    fetch("./movies.json")
    .then( response => response.json() )
    .then( setMovies )
    .catch( e => console.log(e.message) );
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home movies={movies} setMovies={setMovies}/>} />
        <Route path="/addReview" element={<AddReview movies={movies} setMovies={setMovies}/>} />
      </Routes>
    </div>
  )

}

export default App;
