import '../styles/globals.css'
import Footer from '../component/Footer'
function MyApp({ Component, pageProps }) {
  return(
    <div>
    <Component {...pageProps} />
    </div>
    )

}

export default MyApp
