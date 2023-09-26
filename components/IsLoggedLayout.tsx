import { FC, useContext, useEffect } from 'react'
import { AuthContext } from '../context/auth'
import { useRouter } from 'next/router'

interface Props {
  children: React.ReactNode
}

const IsLoggedLayout: FC<Props> = ({ children }) => {
  const { isLogged } = useContext(AuthContext)
  const router = useRouter()

  const path = router.pathname

  useEffect(() => {
    if (!isLogged) {
      router.push('/login')
    }
  }, [isLogged])

  return path === '/login' || isLogged ? <>{children}</> : null
}

export default IsLoggedLayout
