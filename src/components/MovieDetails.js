import React from "react";
import MoviesList from "./MoviesList";

const MovieDetails = ({name, link}) => {
    return(
        <>
        <h4>{name}</h4>
        <h4>{link}</h4>
        </>

    )

}

export default MovieDetails;
