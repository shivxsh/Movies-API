import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/home/Home';
import api from './api/axiosConfig';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {

    try {
      const response = await api.get("/api/v1/movies");
      console.log(response);
      setMovies(response.data);
    }
    catch (err) {
      console.error(err);
    }

  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
