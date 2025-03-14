import React, { useState } from 'react';
import CGpick from "../images/CGpick.png";

function StreamList() {

  const [movie, setMovie] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  const handleAddMovie = () => {
    if (movie) {
      setMovieList([...movieList, movie]);
      setMovie('');
      console.log(movieList);
    }
  };

  return (
    
    <div className="CGsl-paragraph">
      <h1>StreamList - Your Personalized Movie List</h1>
      <img src={CGpick} alt='CG pick icon image'></img>
      
    </div>

  );
}

export default StreamList