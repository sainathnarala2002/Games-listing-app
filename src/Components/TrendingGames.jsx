import React, { useEffect } from 'react'

function TrendingGames({ allGamesList }) {
    useEffect(() => {
        console.log(allGamesList);
    }, [])
    return (
        <div className='mt-5'>
            <h1 className='font-bold text-[30px]'>Trending Games</h1>
            <div className=' mt-3 hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {allGamesList?.map((item, index) => index < 4 && (
                    <div key={item?.id} className=' group hover:scale-110 transition-all ease-in-out cursor-pointer bg-[#76a8f75e] rounded-lg'>
                        <img src={item?.background_image} className='h-[280px] object-cover rounded-t-lg' alt="" />
                        <h2 className='font-bold text-[20px] p-2 rounded-lg'>{item?.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingGames