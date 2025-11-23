import { PersonalInfo } from '@/data/PersonalInfo'
import React from 'react'
import { Button } from '../ui/button'
import SocialLinks from '../common/SocialLinks'

const HeroSection = () => {
  return (
    <section className="py-20 text-center" id= "hero">
        <h1 className='text-5xl font-bold mb-4'>
            {PersonalInfo.name}
        </h1>
        <p className="max-w-2xl mx-auto mb-6 ">{PersonalInfo.role}</p>
        <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">{PersonalInfo.description}</p>
        <div className="flex justify-center gap-4">
            <a href="#projects" className="">
                <Button>View Projects</Button>
            </a>
            <a href="{`mailto : ${personalInfo.email}}" className="">
                <Button variant="outline">Contact Me</Button>
            </a>
        </div>
        <SocialLinks />
    </section>
  )
}

export default HeroSection