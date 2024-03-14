import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList';
import Banner from '../Components/Banner';
import GlobalApi from '../Services/GlobalApi';
import TrendingGames from '../Components/TrendingGames';
import GamesLIstByGenreId from '../Components/GamesLIstByGenreId';
function Home() {
  const [gamesList, setGamesList] = useState([]);
  const [gamesListByGenreId, setGamesListByGenreId] = useState([]);
  useEffect(() => {
    getGamesList();
    getGamesListByGenreId();
  }, [])
  const getGamesList = () => {
    GlobalApi.getGamesList.then((res) => {
      console.log(res?.data?.results);
      setGamesList(res?.data?.results);
    })
  }

  const getGamesListByGenreId=(id)=>{
    console.log("Genre Id:",id)
    GlobalApi.getGamesListByGenreId(id).then((res)=>{
      console.log(res?.data?.results);
      setGamesListByGenreId(res?.data?.results);
    })
  }
  return (
    <div className='grid grid-cols-4 dark:text-white'>
      <div className="p-2">
        <GenreList genreId={(setgenreId)=>getGamesListByGenreId(setgenreId)}/>
      </div>
      <div className="grid col-span-3 p-2">
        {
          gamesList?.length > 0 && gamesListByGenreId?.length>0 ?
            <div>
              <Banner gameBanner={gamesList[0]} />
              <TrendingGames allGamesList={gamesList}/>
              <GamesLIstByGenreId gamesList={gamesListByGenreId}/>
            </div>
            : null
        }
      </div>
    </div>
  )
}

export default Home;