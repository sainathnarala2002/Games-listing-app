import React from 'react'
import GenreList from '../Components/GenreList';

function Home() {
  return (
    <div className='grid grid-cols-4 dark:text-white'>
      <div className=" bg-red-600 p-2">
        <GenreList />
      </div>
      <div className="grid col-span-3 bg-lime-600 p-2">
        Games List
      </div>
    </div>
  )
}

export default Home;