import React from 'react';
import {Link} from 'react-router-dom' 
import {AiFillStar} from 'react-icons/ai'

const imgURL = import.meta.env.VITE_IMG


const  CardMovie= ({movie , showLink=true}) =>{
  return ( 
    <div className='card' data-aos="flip-left" data-aos-duration="1000">
      <img src={movie.poster_path ? imgURL + movie.poster_path : "https://nuft.edu.ua/assets/images/people/no-image.jpg"}/>
      <div className="card-text">
        <h3> {movie.title} </h3>
        <div className='card-div-icon-vote'>
          <span className='card-icon'> <AiFillStar/> </span>
          {movie.vote_average}
        </div>
        <Link to={`/movie/${movie.id}}`} className={showLink ? '' : 'hidden'}>
            <div className='card-button'> MORE </div> 
        </Link>
      </div>
    </div>
  )
}

export default CardMovie