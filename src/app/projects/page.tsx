"use client"
import Footer from '@/components/globals/footer'
import { P1, P2, P3, P4, P5 } from '@/images'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div>
            <div className='div-container py-16 md:py-32 space-y-5'>
                <h2 className="-5 text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl">Some of <br /> our Finest Work</h2>
                <p className="text-md mmax1024:text-base text-black">A showcase of creativity and innovation, where each project exemplifies our commitment to delivering excellence</p>
            </div>
            <div className="rounded-xl">
                <div className='div-container grid grid-cols-1 md:grid-cols-2 gap-10 py-16 md:py-20'>
                    <Image alt="Advertising" className="h-auto w-full rounded-xl" 
                        src={P1} />
                    <Image alt="Advertising" className="h-auto w-full rounded-xl" 
                        src={P2} />
                    <Image alt="Advertising" className="h-auto w-full rounded-xl" 
                        src={P3} />
                    <Image alt="Advertising" className="h-auto w-full rounded-xl" 
                        src={P4} />
                    <Image alt="Advertising" className="h-auto w-full rounded-xl" 
                        src={P5} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
