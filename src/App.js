import React,{ useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import "./style.css";
import Animelist from './animelist';
import AnimeInfo from './Animeinfo';
import AddToList from './AddToList';
import RemoveFromList from './RemoveFromList';
function App() {

  const [search,setSearch]=useState("naruto");
  const[animedata,setAnimedata]=useState("");
  const[animeInfo,setAnimeInfo]=useState();
  const[myAnimeList,setMyAnimeList]=useState([]);

  const Addto=(anime)=>{
    const index=myAnimeList.findIndex((myanime)=>{
        return myanime.mal_id==anime.mal_id;
    })
    if(index<0){
      const newArray=[...myAnimeList,anime];
    setMyAnimeList(newArray);
    }
    
  }

  const removefrom=(anime)=>{
    const newArray=myAnimeList.filter((myAnime)=>{
      return myAnime.mal_id!==anime.mal_id;
    })
    setMyAnimeList(newArray);
  }
  const removeFrom=(anime)=>{
    const newArray=myAnimeList.filter((myanime)=>{
      return myanime.mal_id !== anime.mal_id
    })
    setMyAnimeList(newArray)
  }

  const getData=async()=>{
    const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`);
    const resdata=await res.json();
    setAnimedata(resdata.data);
  }

  useEffect(()=>{
    getData();
    },[search])


  return (
    <>
   <div className='header'>
    <h1>my anime list</h1>
    <div className='search-box'>
      <input type-="search" placeholder="search your anime" onChange={(event)=>{setSearch(event.target.value)}}/>

    </div>
   </div>

   <div className='container'>
    <div className='animeInfo'>
      {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}
    </div>
    <div className='anime-row'>
       <h2 className="text-heading">Anime</h2>
    <div className='row'>
        <Animelist  animelist={animedata} 
         /* passing animedata from usestate in the animelist that will be called in animelist component */
        setAnimeInfo={setAnimeInfo}
        animeComponent={AddToList}
       /* above here AddToList is been passed as a parameter*/
        /*The above addtolist  is been passed to the animelist component where it is been called under overlay div*/

        handleList={(anime)=>{Addto(anime)}}

        />    
      </div>
      <h2 className="text-heading">My anime List</h2>
      <div className='row'>
    <Animelist  animelist={myAnimeList}   
    setAnimeInfo={setAnimeInfo}
    animeComponent={RemoveFromList}
   
    handleList={(anime)=>{removefrom(anime)}}
    />  
    </div>
   </div>
   </div>
    </>
  );
}

export default App;


