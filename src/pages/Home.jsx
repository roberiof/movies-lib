import { useState, useEffect } from 'react';
import CardMovie from '../components/CardMovie';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies , setTopMovies] = useState([])
  
  const getTopMovies = async(url) =>{
    const data = await fetch(url).then(res => res.json())
    setTopMovies(data.results)
  }
  
  useEffect( () =>{
    const topMoviesApi = `${moviesURL}top_rated?${apiKey}`
    getTopMovies(topMoviesApi)
  } , [])
  
  return (
    <div id="wrapper">
      <h1 id='title'> Best Movies </h1>
      <div id="movies-container">
        {topMovies.length === 0 && <p> Loading ...</p>}
        {topMovies && topMovies.map( (movie) => <CardMovie key={movie.id} movie={movie}/>)}
      </div>
    </div>

  )
}

export default Home
