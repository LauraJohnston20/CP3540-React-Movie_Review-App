import React from 'react';

export function Movie( {name, date, actors, poster, rating, onRemove = f => f} ) {
    return(
        <>
            <h2>{name}</h2>
            <img src={poster} alt={name + "Movie Poster"}></img>
            <h3>Release Date: {date}</h3>
            <h3>Starring: {(actors).join(", ")}</h3>
            <h3>Rating: {rating}</h3>
            <button onClick={() => onRemove(name)}>Remove</button>
        </>
    );
}

export function MovieList( { movies = [], onRemoveMovie = f => f } ) {
    if ( movies == null || movies == undefined ||!movies.length) 
        return <h2>No movies available</h2>;
    
        return(
            <>
                {movies.map((movie, i) => {
                    return <Movie key={i} {...movie} onRemove={onRemoveMovie} />
                })
            }
            </>
        );
    }
