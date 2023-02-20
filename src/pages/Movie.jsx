import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


import { AiFillStar } from "react-icons/ai"
import  { RiHandCoinLine } from 'react-icons/ri'
import { BiTime , BiMoney } from 'react-icons/bi'
import { TbNotes } from 'react-icons/tb'

import MovieInfo from '../components/MovieInfo'

const movieURL = import.meta.env.VITE_API
const imgURL = import.meta.env.VITE_IMG
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const {id} = useParams()
  const adjustedId = id.slice(0,-1)
  const [infos, setInfos] = useState([])

  const getInfos = async(url) =>{
    const data = await fetch(url).then(res => res.json())
    setInfos(data)
  }
  
  useEffect( () =>{
    const movieApi = `${movieURL}${adjustedId}?${apiKey}`
    getInfos(movieApi)
  } , [])

  return (
    <>
        <div id='poster-div'>
          <img src={infos.poster_path ? imgURL + infos.poster_path : "https://nuft.edu.ua/assets/images/people/no-image.jpg"}/>
          <div className='div-icon-vote'>
            <span> <AiFillStar/> </span>
            {infos.vote_average}
          </div>
          <p>{infos.tagline ? infos.tagline : ''}</p>

        </div>  

        <div id='infos-div'>
          <MovieInfo 
          id={'budget'} 
          info={infos.budget === 0 ? 'Not Declared' : numeral(infos.budget).format('$ 0,000.00')} 
          icon={<BiMoney/>}/>

          <MovieInfo 
          id={'revenue'} 
          info={infos.revenue === 0 ? 'Not Declared' : numeral(infos.revenue).format('$ 0,000.00')} 
          icon={<RiHandCoinLine/>}/>

          <MovieInfo 
          id={'duration'} 
          info={infos.runtime === '' ? 'Not Declared' : infos.runtime + ' min' } 
          icon={<BiTime/>}/>

          <MovieInfo 
          id={'description'} 
          info={infos.overview = '' ? 'Not Declared' : infos.overview} 
          icon={<TbNotes/>}/> 
        </div>
    </>
  )
}

export default Movie
