import { AuthState } from './AuthProvider'

type AuthActionType = { type: 'Auth-Login' } | { type: 'Auth-Logout' }

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case 'Auth-Login':
      return {
        ...state,
        isLogged: true
      }
    case 'Auth-Logout':
      return {
        ...state,
        isLogged: false
      }
    default:
      return state
  }
}
