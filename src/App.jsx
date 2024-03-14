import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={`${theme} ${theme == 'dark' ? 'bg-black' : null} min-Fh-[100vh]`}>
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
