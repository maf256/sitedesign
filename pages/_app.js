import '../styles/globals.css'
import Navbar from '../components/menu/Navbar'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false)
  
  const changeDarkMode = () => {
    setIsDark(!isDark)
    console.log('isDark',isDark);
  } 


  return ( 
    <div>
      <Navbar changeDarkMode={changeDarkMode}  />
      <Component isDark={isDark} {...pageProps} />
    </div>
  )
}

export default MyApp
