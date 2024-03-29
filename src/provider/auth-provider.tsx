import React, { useEffect, useState } from 'react'
import { auth, googleProvider } from '@/firebase/config'
import { AuthContext } from '../context/auth-context'
import { User, signInWithPopup, signOut } from 'firebase/auth'
import { cookieName, storageUserData } from '@/constants'
import { setCookie, deleteCookie, getCookie } from 'cookies-next'

type AuthProviderProps = {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<User | null>(null)
  const [isAuth, setIsAuth] = useState<boolean | null>(null)

  useEffect(() => {
    setIsAuth(Boolean(getCookie(cookieName)))
    setUserData(JSON.parse(localStorage.getItem(storageUserData) as string))
  }, [isAuth])

  async function handleSingIn() {
    try {
      const { user } = await signInWithPopup(auth, googleProvider)
      setCookie(cookieName, 'true')
      setIsAuth(true)
      localStorage?.setItem(storageUserData, JSON.stringify(user))
    } catch (e) {
      console.log('singIn', e)
    }
  }

  async function handleSingOut() {
    await signOut(auth)
    setIsAuth(false)
    deleteCookie(cookieName)
    deleteCookie(storageUserData)
    localStorage?.removeItem(storageUserData)
  }

  return (
    <AuthContext.Provider
      value={{ singIn: handleSingIn, user: userData, isAuth, singOut: handleSingOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
