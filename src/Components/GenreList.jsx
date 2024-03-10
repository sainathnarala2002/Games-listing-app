import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList() {
    useEffect(() => {
        getGenresList();
    }, [])
    const getGenresList = () => {
        GlobalApi.getGenreList.then((res) => {
            console.log(res);
        });
    }
    return (
        <div>GenreList</div>
    )
}

export default GenreList