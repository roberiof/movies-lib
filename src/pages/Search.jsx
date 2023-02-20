import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardMovie from '../components/CardMovie';
const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState( [] ) 

  const query = searchParams.get('q')

  const getMovies = async(url) =>{
    const data = await fetch(url).then(res => res.json())
    setMovies(data.results)
  }
  
  useEffect( () =>{
    const moviesApi = `${searchURL}?${apiKey}&query=${query}`
    getMovies(moviesApi)
  } , [query])



  return (
    <div id="wrapper">
      <h1 id="title"> Results for: <span className="query-text"> {query} </span> </h1>
      <div id="movies-container">
        {movies.length === 0 && <p className="loading-warning-text"> Loading ... </p>}
        {movies && movies.map( (movie) => <CardMovie key={movie.id} movie={movie} showLink={false} />)}
        {movies.length === 0  && <p className="loading-warning-text"> There is no movie with this title. Please, choose another one. </p>}
      </div>
    </div>
  )
}

export default Search
