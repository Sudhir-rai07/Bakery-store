'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { navLinks } from '@/constants/constansts'
import { Menu, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='w-full hidden lg:flex justify-center items-center px-4'>
        <div className='flex mr-auto text-3xl font-sans font-extrabold text-[#351411]'>Rollin</div>
        <div className='flex'>
          {navLinks.map((navLink, index) => (
            <div key={index} className='mr-6 text-2xl font-semibold'>
              <Link href={navLink.link}>{navLink.name}</Link>
            </div>
          ))}
        </div>

        <div className='flex ml-auto'>
          <Button
            onClick={() => { }}
            variant={"default"}
            className='bg-yellow-400 h-12 text-[#351411] text-2xl font-semibold border-2 border-black'>
            Start Baking
          </Button>

          <div className='h-12 ml-4 w-12 bg-white flex items-center justify-center rounded-full'>
            <ShoppingBag />
          </div>
        </div>
      </div>

      {/* Mobiile View */}
      <div className='flex w-full items-center justify-between lg:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'outline'} className='cursor-pointer'>
              <Menu className='' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel className='text-xl'>Nav Links</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {navLinks.map((navLink, index) => (
            <DropdownMenuItem key={index} className='text-lg'>
              <Link href={navLink.link}>{navLink.name}</Link>
            </DropdownMenuItem>
          ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='flex ml-auto'>
          <Button
            onClick={() => { }}
            variant={"default"}
            className='bg-yellow-400 transition-colors cursor-pointer hover:bg-yellow-400 h-12 text-[#351411] text-2xl font-semibold border-2 border-black'>
            Start Baking
          </Button>

          <div className='h-12 ml-4 w-12 bg-white flex items-center justify-center rounded-full'>
            <ShoppingBag />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
