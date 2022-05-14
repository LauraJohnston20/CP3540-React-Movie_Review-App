import React from 'react';

export function MovieList( { movies = [], onChangeMovies = f => f } ) {
    if ( movies == null || movies == undefined ) 
        return <h2>No movies available</h2>;
    
    return (
       <>
       {
        movies.map((movie, i) => {
            console.log(movie);
            return <h2>{movie.name}</h2>
        })
       }
        </>
    )
}
