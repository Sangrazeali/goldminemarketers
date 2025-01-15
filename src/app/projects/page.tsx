"use client"
import Footer from '@/components/globals/footer'
import { AVA, bitcap, bridge, Mek, P1, P2, P3, P4, P5 } from '@/images'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className='text-black'>
            <div className='div-container pt-32 space-y-5'>
                <h2 className="inline-block py-1 text-4xl font-bold leading-none tracking-[-3px]  md:text-[60px] lg:text-[65px] maxw:text-mob33 maxw:leading-tight maxw:tracking-[-1.5px] maxw400:text-mob9vw">Some of  our Finest Work</h2>
                <p className="text-md mmax1024:text-base text-black">A showcase of creativity and innovation, where each project exemplifies our commitment to delivering excellence</p>
            </div>
            <div className="rounded-xl">
                <div className='div-container grid grid-cols-1 md:grid-cols-2 gap-10 py-16'>
                    <div className='space-y-5'>
                        <Image alt="Advertising" className="h-[400px] w-full rounded-xl border object-fit"
                            src={AVA} />
                        <h3 className='text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>AVA Group of Beverages</h3>
                        <p>AVA Group of Beverages is a prominent beverage company founded in Almaty, Kazakhstan. With a strong presence in Central Asia, AVA Group operates across several countries, including Pakistan and China. The company is committed to delivering high-quality, refreshing beverages that cater to the diverse tastes of the region. Through innovative marketing strategies and a customer-centric approach, we have helped AVA Group of Beverages enhance its brand recognition and expand its market reach in these dynamic markets.</p>
                    </div>
                    <div className='space-y-5'>
                        <Image alt="Advertising" className="h-[400px] w-full rounded-xl border object-fit"
                            src={bitcap} />
                        <h3 className='text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Bitcap INC</h3>
                        <p>Bitcap INC is a Canadian-based geosteering company that specializes in providing advanced directional drilling solutions for the oil and gas industry. With a strong presence in Canada, Bitcap INC extends its expertise to key regions across the Middle East, South America, and the United States. Our digital marketing services have helped Bitcap INC enhance their global outreach, drive client engagement, and establish a robust online footprint in the competitive energy sector.</p>
                    </div>
                    <div className='space-y-5'>
                        <Image alt="Advertising" className="h-[400px] w-full rounded-xl border object-fit"
                            src={Mek} />
                        <h3 className='text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>MEK Solutions</h3>
                        <p>MEK Solutions is a Pakistan-based company specializing in providing high-quality medical equipment to healthcare professionals across various medical fields. With a commitment to excellence and innovation, MEK Solutions offers a comprehensive range of products designed to meet the evolving needs of the global medical community. By delivering reliable and cutting-edge medical solutions, the company plays a crucial role in enhancing patient care and supporting healthcare providers worldwide.</p>
                    </div>
                    <div className='space-y-5'>
                        <Image alt="Advertising" className="h-[400px] w-full rounded-xl border object-fit"
                            src={bridge} />
                        <h3 className='text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Bridge Saudi Company Ltd</h3>
                        <p>Bridge Saudi Company Ltd offers Sustainable industrial environmental management solutions, SIEM services in line with the rapidly transforming and expanding oil and Gas and other industries.</p>
                    </div>
                
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
