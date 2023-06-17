import '../styles/globals.css'
import Navbar from '../components/menu/Navbar'
function MyApp({ Component, pageProps }) {
  return ( 
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
