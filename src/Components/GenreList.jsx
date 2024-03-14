import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList({genreId}) {
    const [genreList, setGenresList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        getGenresList();
    }, [])
    const getGenresList = () => {
        GlobalApi.getGenreList.then((res) => {
            // const result = res?.data?.results;
            // console.log(result)
            setGenresList(res?.data?.results);
            console.log(res?.data?.results)
        });
    }
    return (
        <div className='hidden md:block'>
            <h3 className='text-[30px] font-bold px-4'>Genres</h3>

            {genreList.map((item,index) => (
                <div 
                onClick={()=>{
                    {setActiveIndex(index);genreId(item?.id)}
                }}
                className={`flex gap-2 mb-2 items-center px-4 cursor-pointer hover:bg-gray-300 rounded-lg group dark:hover:bg-slate-800
                ${activeIndex==index?"bg-gray-300 dark:bg-slate-800":null}`} key={item?.id}>
                    <img src={item?.image_background} alt="image" 
                    className='w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all ease-out duration-500' />
                    <h3 className='text-[18px]
                    group-hover:font-bold transition-all ease-out duration-500'>{item?.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default GenreList;