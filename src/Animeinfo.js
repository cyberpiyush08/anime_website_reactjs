import React from 'react'
import "./style.css"

const AnimeInfo = ({animeInfo}) => {
    const{title,rank,score,popularity,members,status,rating,duration}=animeInfo
  return (
    <div>
     
      <div className='anime-content'>
        <h3>{title}</h3>
        <img src={animeInfo.images.jpg.large_image_url} alt="image"/>
        <div className='info'>
            <h3>#Rank : {rank} </h3>
            <h3>#Score : {score} </h3>
            <h3>#Popularity : {popularity} </h3><br/>
            <hr/><br/>
            <h4>#Members : {members} </h4>
            <h4>#Status : {status} </h4>
            <h4>#Rating : {rating} </h4>
            <h4>#Duration : {duration} </h4>
            

            
        </div>
        
      </div>
    </div>
  )
}

export default AnimeInfo
