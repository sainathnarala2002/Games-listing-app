import React, { useEffect } from 'react'

function Banner({gameBanner}) {
    useEffect(() => {
        console.log("gameBanner", gameBanner);
    }, [])
    return (
        <div className='relative'>
            <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent rounded-lg w-full">
                <h2 className='text-[28px] font-bold'>{gameBanner?.name}</h2>
                <button className=' text-slate-100 font-semibold px-2 py-1 bg-blue-500 rounded-lg'>Get Now</button>
            </div>
            <img src={gameBanner?.background_image} className=' md:h-[320px] w-full object-cover rounded-lg' alt="image" />
        </div>
    )
}

export default Banner