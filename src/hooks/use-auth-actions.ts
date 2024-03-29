import { useContext } from 'react'
import { AuthContext } from '../context/auth-context'

export function useAuthAction() {
  const context = useContext(AuthContext)

  if (context === null) throw new Error('AuthContext has not been initialized yet')

  return context
}
