import React from "react";
import { Link } from "react-router-dom";
import { AddReviewForm } from "./addReviewForm";
import { MovieList } from "./Movies";

export function Home({movies, setMovies}){

    return(
        <>
            <div>
                 <h1>Movie Reviews</h1>
            </div>
            <nav>
                <Link to="/addReview">Add Review</Link>
            </nav>
            
            <MovieList movies={movies} onRemoveMovie = { movieName => {
                        const newMovies = movies.filter(movie => movie.name !== movieName);
                        setMovies(newMovies);
                    }
                } 
            />
        </>
    );
}

export function AddReview({movies, setMovies}){
    return(
        <>
            <div>
                 <h1>Add Review</h1>
            </div>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <AddReviewForm onAddReview={(name, date, actors, poster, rating) => {
                const newMovies = [
                    ...movies,
                    {name, date, actors, poster, rating}
                ];
                setMovies(newMovies);
            }}/>
        </>
    );
}