import React, { useEffect } from 'react'
import { TiStar } from "react-icons/ti";

function GamesLIstByGenreId({gamesList}) {
    useEffect(()=>{
        console.log("GamesLIStByGenreId:",gamesList)
    },[])
  return (
    <div>
        <h2 className='font-bold text-[30px] mt-8'>Popular Game</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3'>
            {
                gamesList.map((item,index)=>(
                    <div className=' bg-[#76a8f75e] rounded-lg p-3 pb-10 h-full 
                     hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer' key={item?.id}>
                        <img src={item?.background_image} alt="image" className='w-full h-[80%] rounded-xl object-cover'/>
                        <h2 className='text-[20px] font-bold'>{item?.name}<span className=' bg-green-100 p-1 rounded-sm ml-2 text-[10px] text-green-700 font-medium'> {item?.metacritic}</span></h2>
                        <h2 className=' dark:text-gray-300'>⭐{item?.rating} 💬{item?.reviews_count} 🔥{item?.suggestions_count}</h2>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default GamesLIstByGenreId