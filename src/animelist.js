import React from 'react'
import "./style.css";


const Animelist = ({animelist,setAnimeInfo,animeComponent,handleList}) => {
  const AddToList1=animeComponent;
  // the above value is passe as an component at line 24  and this will call and thw will came from app.js line 46
  //where Whole addtoList coponent is been passed as a parameter
  return (
    <>
        {
           animelist ?(
            animelist.map((anime,index)=>{
                return (
                    <div className='card' key={index}  onClick={()=>setAnimeInfo(anime)}>
                    <img src={anime.images.jpg.large_image_url} alt="anime img"/>
                    <div className='anime-info'>
                        <h4>{anime.title}</h4>
                        <div className='overlay' onClick={()=>handleList(anime)}>
                          <h4>{anime.title_japanese}</h4>
                          <h3>Synopsis</h3>
                          <div className='synopsis'>
                            <p>{anime.synopsis}</p>
                          </div>
                          <AddToList1/>  
                          
                        </div>
                    </div>
                  </div>
                )
            })
           ) :"Not Found"
        }
        </>


    
  )
}

export default Animelist;
