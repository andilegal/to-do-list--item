import { createContext } from 'react'
import { User } from 'firebase/auth'
type AuthContextProps = {
  singIn(): void
  user: User | null
  isAuth: boolean | null
  singOut(): void
}

export const AuthContext = createContext<AuthContextProps | null>(null)
