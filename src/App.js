import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // AXIOS API
  useEffect(() => {
    async function getMovies() {
      const baseURL = `https://api.themoviedb.org/3/list/${process.env.REACT_APP_LIST_ID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
      const response = await axios.get(baseURL);
      console.log(response.data.items);
      setMovies(response.data.items);
    }
    getMovies();
  }, []);

  // FETCH API
  // useEffect(() => {
  //   async function getMovies() {
  //     const baseURL = "http://localhost:3002/startingMovies";
  //     const response = await fetch(baseURL);
  //     const fetchedMovies = await response.json();
  //     setMovies(fetchedMovies);
  //   }
  //   getMovies();
  // }, []);

  // useEffect() Alternatifi
  // useEffect(() => {
  //   async function getMovies() {
  //     const baseURL = "http://localhost:3002/startingMovies";
  //     await fetch(baseURL)
  //       .then((response) => response.json())
  //       .then((fetchedMovies) => setMovies(fetchedMovies));
  //   }
  //   getMovies();
  // }, []);

  // AXIOS API

  async function deleteMovie(movie) {
    axios.post(
      `https://api.themoviedb.org/3/list/${process.env.REACT_APP_LIST_ID}/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`
    );
    const newMovieList = movies.filter((m) => m.id !== movie.id);
    setMovies(newMovieList);
  }

  // async function deleteMovie(movie) {
  //   axios.delete(`http://localhost:3002/startingMovies/${movie.id}`);
  //   const newMovieList = movies.filter((m) => m.id !== movie.id);
  //   setMovies(newMovieList);
  // }

  // FETCH API
  // async function deleteMovie(movie) {
  //   const baseURL = `http://localhost:3002/startingMovies/${movie.id}`;
  //   await fetch(baseURL, { method: "DELETE" });
  //   const newMovieList = movies.filter((m) => m.id !== movie.id);
  //   setMovies(newMovieList);
  // }

  // function deleteMovie(movie) {
  //   const newMovieList = movies.filter((m) => m.id !== movie.id);
  //   setMovies(newMovieList);
  // }

  // deleteMovie() Alternatifi
  // function deleteMovie(movie) {
  //   setMovies(prev => prev.filter((m) => m.id !== movie.id));
  // }

  function searchMovie(event) {
    setSearchQuery(event.target.value);
  }

  let filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <SearchBar SearchMovieProp={searchMovie} />
        </div>
      </div>
      <MovieList moviesProp={filteredMovies} deleteMovieProp={deleteMovie} />
    </div>
  );
}

export default App;
