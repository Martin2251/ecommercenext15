"use client"
import { useUser } from "@clerk/nextjs"
const Header = () => {
    const {user} = useUser()
    console.log(user)
  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">

    </header>
  )
}

export default Header
