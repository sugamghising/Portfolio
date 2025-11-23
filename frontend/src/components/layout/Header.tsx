import { PersonalInfo } from '@/data/PersonalInfo'
import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='w-full py-4 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50'>
      <nav className='max-w-5xl mx-auto flex items-center justify-between px-4'>
      <h1 className='text-xl font-semibold' >
        {PersonalInfo.name}
      </h1>
      <div className="flex gap-4">
        <a href="#projects">Projects</a>
        <a href="#contact">
          <Button size="sm">Contact </Button>
        </a>
      </div>
      </nav>
    </header>
  )
}

export default Header