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
    <header>
      <nav className="flex px-4 lg:px-6 py-2.5 bg-white mx-auto ">
        <div className="flex flex-wrap justify-between items-center w-full mx-auto">
          <div className="bg-black text-white px-8 py-4 font-bold ">
            <Link href="/">
              <p>Ebi App</p>
            </Link>
          </div>
          {openMenu ? (
            <div className="flex justify-end flex-row absolute z-10 top-0 right-0  min-h-fit min-w-full md:hidden ">
              <div className="w-2/3 h-3/4 bg-white block border-l-2 border-b-2 border-gray-400 rounded">
                <ul className=" text-center mt-6">
                  <XMarkIcon
                    onClick={toggleOpenMenu}
                    className="font-bold absolute top-0 right-0  h-10 w-20 cursor-pointer text-gray-800"
                  />
                  <li className="p-2">
                    {menu.map((value, index) => (
                      <Link
                        key={index}
                        href={value.link}
                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
                      >
                        <p>{value.name} </p>
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
          <div className="text-gray-700 font-bold w-4/5">
            <ul className="hidden md:flex text-left space-x-8">
              {menu.map((value, index) => (
                <li key={index}>
                  <Link key={index} href={value.link}>
                    <p className="p-4 hover:bg-bray-100">{value.name} </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Bars3Icon
            onClick={toggleOpenMenu}
            className="flex-initial absolute top-0 right-0 md:hidden h-10 w-20 cursor-pointer"
          />
        </div>
      </nav>
    </header>
  )
}
