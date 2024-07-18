// pages/_app.js
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Offers from '../components/Offers'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Offers />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

