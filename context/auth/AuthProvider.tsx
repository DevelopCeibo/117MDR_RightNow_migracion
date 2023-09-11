import { FC, useReducer } from 'react'
import { AuthContext, authReducer } from './'

export interface AuthState {
  isLogged: boolean
}

interface Props {
  children: React.ReactNode
}

const AUTH_INITIAL_STATE: AuthState = {
  isLogged: false
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)

  return (
    <AuthContext.Provider
      value={{
        ...state
      }}>
      {children}
    </AuthContext.Provider>
  )
}
