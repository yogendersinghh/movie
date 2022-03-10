import React, { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import "./app.css";
import Card from "./Card";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const apikey = "ec2a521f";
  const searchMovie = async (title) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apikey}&s=${title}`
    );
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovie("");
  }, [search]);
  // const movie = {
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
  //   Title: "Italian Spiderman",
  //   Type: "movie",
  //   Year: "2007",
  //   imdbID: "tt2705436",
  // };
  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input
            type="text"
            placeholder="enter movie name"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => {
              searchMovie(search);
            }}
          />
        </div>
        {movies?.length > 0 ? (
          <>
            <div className="container">
              {movies.map((e) => {
                return <Card movie={e} />;
              })}
            </div>
          </>
        ) : (
          <div className="empty">
            <h2>no movie here</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
