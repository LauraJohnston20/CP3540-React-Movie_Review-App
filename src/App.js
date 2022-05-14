import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { MovieList } from './Movies';


function App({secret: sc}) {

  const [movies, setMovies] = useState(null);

  useEffect( () => {
    //load the json data
    fetch("./movies.json")
    .then( response => response.json() )
    .then( setMovies )
    .then( console.log(movies) )
    .catch( e => console.log(e.message) );
  }, [])

  return (
    <MovieList movies={movies} setMovies={setMovies}/>
  )

}

export default App;
