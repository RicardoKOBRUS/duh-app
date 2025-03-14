import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import '../App.css';
import CGpick from "../images/CGpick.png";

const Layout = () => {

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
    <div className="StreamList">
      <nav>
        <table className="App-divcontainer">
          <td> <Link to="/" className="CGsl-button">  {"  CG StreamList   "} </Link></td>
          <td><Link to="/movies" className="CGsl-button">  {"  movies   "} </Link></td>
          <td><Link to="/cart" className="CGsl-button">  {"  cart  "} </Link></td>
          <td><Link to="/about" className="CGsl-button">  {"  about   "} </Link></td>
          

        </table>
      </nav>

      <Outlet />

      

      <div className="stream-list">      
        <input
          type="text"
          value={movie}
          onChange={handleChange}
          placeholder="Enter a movie or program"
        />
        <button onClick={handleAddMovie}>Add to List</button>
        <h3>Your List</h3>
        <ul>
          {movieList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Layout;



