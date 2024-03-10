import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/Images/logo.png';
import { HiMoon, HiOutlineSearch, HiSun } from "react-icons/hi";
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
    // const [toogle, setToogle] = useState(true);
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        setTheme(localStorage.getItem('theme'));
    })
    return (
        <div className='flex items-center p-3'>
            <img src={logo} width={60} height={60} alt="logo" className=' rounded-full' />
            <div className="flex mx-5 rounded-full bg-slate-200 p-2 w-full items-center dark: bg-[#e26959]">
                <HiOutlineSearch />
                <input type="text" placeholder='Search Games' className='px-2 bg-transparent outline-none ' />
            </div>
            <div >
                {theme == 'light' ?
                    <HiMoon
                        onClick={() => { setTheme('dark'); localStorage.setItem('theme', 'dark') }}
                        className='text-[35px] bg-slate-200 p-1 rounded-full cursor-pointer' />
                    :
                    <HiSun
                        onClick={() => { setTheme('light'); localStorage.setItem('theme', 'light') }}
                        className='text-[35px] bg-slate-200 p-1 rounded-full cursor-pointer' />}
            </div>
        </div>
    )
}

export default Header;