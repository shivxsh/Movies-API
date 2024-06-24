import { useState, useEffect } from 'react';
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



  return (
    <div className="App">

    </div>
  );
}

export default App
