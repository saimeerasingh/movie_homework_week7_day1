import React from "react";
import MovieDetails from "./MovieDetails";

const MoviesList = ({movies}) => {
    const movieNodes = movies.map(movie => {   
    return (
    <MovieDetails name = {movie.name} key = {movie.id} link = {movie.link}></MovieDetails>
     )
     })
return(
    <>
    <h3>Upcoming Film releases for UK</h3>
    {movieNodes}
    </>
);
}

export default MoviesList;
