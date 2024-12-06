import { Logo } from '@/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function header() {
  return (
    <div className='navbar border-b border-black/20 py-5'>
      <div className='div-container flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center'>
        <Link href={'/'}><Image src={Logo} className='w-[300px]' alt={'logo'} /></Link>
        <ul className='flex justify-end flex-wrap md:flex-nowrap gap-5 md:gap-10 text-sm pt-5 md:pt-0'>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/about'}>About</Link></li>
          <li><Link href={'/services'}>Services</Link></li>
          <li><Link href={'/projects'}>Projects</Link></li>
          <li><Link href={'https://wa.me/+447999369483'}>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default header
