import { createContext } from 'react'

interface ContextProps {
  isLogged: boolean
  login: () => void
  logout: () => void
}

export const AuthContext = createContext({} as ContextProps)
