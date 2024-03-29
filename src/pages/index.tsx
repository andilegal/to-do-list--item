import { NavbarBlock } from '@/components/navbar'
import { useAuthAction } from '@/hooks/use-auth-actions'
import Home from '@/pages/home'
import SignIn from '@/pages/sign-in'

export default function Index() {
  const { isAuth } = useAuthAction()

  return (
    <>
      {isAuth ? (
        <>
          <NavbarBlock />
          <Home />
        </>
      ) : (
        <SignIn />
      )}
    </>
  )
}
