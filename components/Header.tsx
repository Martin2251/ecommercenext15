"use client"
import { useUser } from "@clerk/nextjs"
import Link from "next/link"
const Header = () => {
    const {user} = useUser()
    console.log(user)
  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
        <div>
            <Link href="/">Shopr</Link>
        </div>
    </header>
  )
}

export default Header
