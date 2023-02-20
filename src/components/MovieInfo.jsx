import React from 'react';

const MovieInfo = ( {id , info, icon} ) => {
  const title = id[0].toUpperCase() + id.slice(1,id.length)

  return (
    <div  className="div-item-info" id={id}>
      <div className='div-icon-title'>
        <span> {icon} </span>
        <h3> {title} </h3>
      </div>
      <p> {info} </p>  
    </div>
  )
}

export default MovieInfo