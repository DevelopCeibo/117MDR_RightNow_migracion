import { createContext } from 'react'

interface ContextProps {
  isLogged: boolean
}

export const AuthContext = createContext({} as ContextProps)
