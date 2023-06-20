import '../styles/globals.css'
import Navbar from '../components/menu/Navbar'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import theme from '../styles/theme'


function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState('nr')
  

  const changeLangeuge = () => {
    if (language=='nr'){
      setLanguage('en')
    }else {
      setLanguage('nr')
    }
    console.log('language',language);
  } 
  

  const changeDarkMode = () => {
    setIsDark(!isDark)
    console.log('isDark',isDark);
  } 


  return ( 
    <ThemeProvider theme={theme(isDark)}>
      <Navbar isDark={isDark} changeDarkMode={changeDarkMode} language={language} changeLangeuge={changeLangeuge} />
      <Component isDark={isDark} {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
