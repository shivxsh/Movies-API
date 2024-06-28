import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import api from './api/axiosConfig';
import './App.css';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import { Movie } from './components/home/Home';

interface Review {
  id: number;
  body: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [singleMovie, setSingleMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response);
      setMovies(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  const getMovieData = async (movieId: string) => {
    try {
      const response = await api.get(`/api/v1/movie/${movieId}`);
      const singleMovieData = response.data;
      setSingleMovie(singleMovieData);
      setReviews(singleMovieData.reviews);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home movies={movies} />} />
          <Route path="Trailer/:ytTrailerId" element={<Trailer />} />
          <Route path="Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={singleMovie} reviews={reviews} setReviews={setReviews} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
