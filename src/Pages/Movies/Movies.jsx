// import React from 'react';

import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";


const Movies = () => {
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-10" style={{mt: "60px"}}>
            {
                movies?.map(movie => <MovieCard
                key={movie._id}
                movie={movie}
                ></MovieCard>)
                
            }
             
        </div>
    );
};

export default Movies;