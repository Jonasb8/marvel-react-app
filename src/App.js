import React, { useState, useEffect } from 'react';
import Heroes from './components/Heroes';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [heroesPerPage] = useState(5);

  useEffect(() => {
    const fetchheroes = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:5000/heroes');
      setHeroes(res.data.characters);
      setLoading(false)
    };

    fetchheroes();
  }, []);

  // Get current heroes
  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstPost = indexOfLastHero - heroesPerPage;
  const currentheroes = heroes.slice(indexOfFirstPost, indexOfLastHero);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Avenger candidates</h1>
      <Heroes
        heroes={currentheroes}
        loading={loading}
      />
      <Pagination
        heroesPerPage={heroesPerPage}
        totalHeroes={heroes.length}
        paginate={paginate}
      />

    </div>
  );
};

export default App;
