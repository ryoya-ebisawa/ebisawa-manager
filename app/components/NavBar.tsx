'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

type typeMenuItem = {
  name: string
  link: string
}

export default function Navbar({ menu }: { menu: typeMenuItem[] }) {
  const [openMenu, setOpenMenu] = useState(false)

  function toggleOpenMenu() {
    setOpenMenu(!openMenu)
  }

  return (
    <nav className="flex">
      <div className="flex-none  sm:flex-1">
        <Link href="/">Ebi App</Link>
      </div>
      {openMenu ? (
        <div className="flex justify-end flex-row absolute z-10 top-0 right-0  min-h-fit min-w-full md:hidden">
          {/* <div className="basis-1/2"></div> */}

          <div className="w-2/3 bg-gray-900">
            <ul className=" text-center border-l-2 ">
              <li className="p-2">
                <XMarkIcon
                  onClick={toggleOpenMenu}
                  className="font-bold absolute top-0 right-0  h-10 w-20 cursor-pointer inline-block text-white"
                >
                  close
                </XMarkIcon>
              </li>
              {menu.map((value, index) => (
                <Link key={index} href={value.link} className="p-4 text-white">
                  <p>{value.name} </p>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      <div className="flex-initial text-gray-500 font-bold m-5 ">
        <ul className="md:flex  hidden flex-initial text-left">
          {menu.map((value, index) => (
            <li key={index}>
              <Link key={index} href={value.link} className="p-4">
                <p>{value.name} </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Bars3Icon
        onClick={toggleOpenMenu}
        className="flex-initial absolute top-0 right-0 md:hidden h-10 w-20 cursor-pointer"
      />
    </nav>
  )
}
