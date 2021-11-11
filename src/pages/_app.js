import { ShipmentProvider } from '../context/ShipmentContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ShipmentProvider>
      <Component {...pageProps} />
    </ShipmentProvider>
  )
}

export default MyApp
