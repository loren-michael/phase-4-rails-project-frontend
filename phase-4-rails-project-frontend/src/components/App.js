import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import MovieContainer from './MovieContainer';


function App() {
  const [movies, setMovies] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/movies')
    .then(r => r.json)
    .then(movies => setMovies(movies))
  }, [])

  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path={"/movies"} element={ <MovieContainer movies={movies} /> } />
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;