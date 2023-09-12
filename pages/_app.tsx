import IsLoggedLayout from '../components/IsLoggedLayout'
import { AuthProvider } from '../context/auth'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <IsLoggedLayout>
        <Component {...pageProps} />
      </IsLoggedLayout>
    </AuthProvider>
  )
}

export default MyApp
