import { useAuthAction } from '@/hooks/use-auth-actions'
import { Avatar, Dropdown, DropdownHeader, Navbar, NavbarBrand } from 'flowbite-react'

export function NavbarBlock() {
  const { user } = useAuthAction()

  console.log(user)
  return (
    <Navbar fluid rounded className="fixed w-full top-0">
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Controle de financas
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={user?.photoURL || undefined} rounded />}
        >
          <DropdownHeader>
            <span className="block text-sm">{user?.displayName}</span>
            <span className="block truncate text-sm font-medium">{user?.email}</span>
          </DropdownHeader>
        </Dropdown>
      </div>
    </Navbar>
  )
}
