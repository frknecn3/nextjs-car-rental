import React from 'react'
import Link from 'next/link'
import Button from '../Button/index'


const Header = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16'>
            <Link href={'/'}>
                <img src="/bmw.png" width={100} alt="" />
            </Link>

            <Button designs={'bg-blue-500 rounded-xl text-white'} title={'Register'} />
        </nav>
    </header>
  )
}

export default Header

