"use client"
import Faq from "@/components/globals/faq"
import Footer from "@/components/globals/footer"
import { ServiesBanner, ecommerce, graphicdesign, SEO, smm, tiktok, webdev, youtube } from '@/images/index'
import Image from "next/image"
import React from "react"

function page() {
    const services = [
        {
            href: '/services/digital-marketing',
            imgSrc: smm,
            alt: 'Digital Marketing',
            title: 'Digital Marketing',
            description: 'In the ever-changing digital world, your business needs a marketing strategy that leads the way. At Goldmine Marketers, we create innovative digital marketing solutions designed to expand your online presence and deliver results that truly matter.',
        },
        {
            href: '/services/graphic-design',
            imgSrc: graphicdesign,
            alt: 'Graphic Designing',
            title: 'Graphic Designing',
            description: 'Amplify your brand with expert social media marketing. We specialize in creating impactful social media strategies that help your brand stand out in a crowded marketplace.',
        },
        {
            href: '/services/digital-drop-shipping',
            imgSrc: ecommerce,
            alt: 'Digital Drop-shipping',
            title: 'Digital Drop-shipping',
            description: 'Digital Drop-shipping is an innovative method of e-commerce that eliminates the need for inventory or shipping. Sell in-demand digital products effortlessly and build a profitable online business.',
        },
        {
            href: '/services/youtube-monetization',
            imgSrc: youtube,
            alt: 'YouTube Monetization',
            title: 'YouTube Monetization',
            description: 'Are you ready to turn your YouTube channel into a money-making machine? With millions of viewers on YouTube daily, monetization is a game-changer for creators to share their passion and earn from it.',
        },
        {
            href: '/services/tiktok-monetization',
            imgSrc: tiktok,
            alt: 'TikTok Monetization',
            title: 'TikTok Monetization',
            description: 'Turn your passion into profit with TikTok. Our TikTok Monetization services position you for success and maximize your earning potential through the platform’s features.',
        },
        {
            href: '/services/web-design-development',
            imgSrc: webdev,
            alt: 'Website Design & Development',
            title: 'Website Design & Development',
            description: 'Your website is the first impression people get of your business—let’s make it a great one. We create beautiful, user-friendly websites to help your brand connect with audiences.',
        },
        {
            href: '/services/ecommerce-store-creation',
            imgSrc: ecommerce,
            alt: 'Online E-Commerce Store Creation',
            title: 'Online E-Commerce Store Creation',
            description: 'Ready to take your business online? We specialize in building powerful, user-friendly e-commerce stores tailored to your needs.',
        },
    ];
    return (
        <div className="text-black">
            <div className="div-container py-16 md:py-32">
                <h1 className="text-3xl font-bold md:text-2xl lg:text-3xl">One Stop Marketing Solutions</h1>
                <h2 className="inline-block py-1 text-4xl font-bold leading-none tracking-[-3px]  md:text-[60px] lg:text-[65px] maxw:text-mob33 maxw:leading-tight maxw:tracking-[-1.5px] maxw400:text-mob9vw">Maximize user experience <br /> with Gold Mine Marketers <br /> Innovative Digital Solutions</h2>
            </div>
            <div className="bg-cover bg-no-repeat bg-bottom py-20" style={{ backgroundImage: `url(${ServiesBanner.default.src})`, filter: "hue-rotate(30deg) saturate(1.5) contrast(1.1)" }}>
                <div className="div-container grid grid-cols-1 gap-10 text-white lg:grid-cols-2">
                    <p className="text-lg font-semibold md:text-xl">
                        Searching for top-tier graphic design services in Dubai?
                    </p>
                    <div>
                        <p className="mb-5 text-base font-light">
                            Welcome to Gold Mine Marketers—where creativity meets strategy to bring your brand to life.
                        </p>
                        <h2 className="mb-8 text-3xl font-semibold sm:text-4xl md:text-5xl">
                            From logo creation to complete brand identity, web design, packaging, and event displays, our graphic design solutions are crafted to make your brand unforgettable.
                        </h2>
                        <p className="font-light">
                            Discover how compelling design can transform your business and captivate your audience!
                        </p>

                    </div>
                </div>

            </div>
            <section className="bg-[#f0f0f0] py-20 text-[#000000] sm:py-16 md:py-32">





                <div className="div-container">
                    <h2 className="mb-12 text-7xl font-bold leading-none sm:text-8xl md:text-[132px]">Services</h2>
                    <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-28 md:grid-cols-3">
                        {services.map((service, index) => (
                            <a key={index} className="group" href={service.href}>
                                <div className="border-b border-black/20 pb-10 space-y-3 hover:scale-105 transform transition duration-300 ease-in-out">
                                    <Image
                                        src={service.imgSrc}
                                        alt={service.alt}
                                        width={1792}
                                        height={1024}
                                        className="rounded-md"
                                        priority
                                    />
                                    <h3 className="text-3xl font-bold group-hover:text-yellow-500">{service.title}</h3>
                                    <p className="mt-5 text-gray-400 group-hover:text-yellow-500">{service.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>





            </section>
            <section className="div-container py-20 sm:py-16 md:py-32">
                <p className="text-lg font-semibold md:text-xl">
                    How to Choose the Best Digital Marketing and Web Development Company
                </p>
                <ul className="mt-5 lg:mt-10">
                    <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                        <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">
                            Proven Expertise
                        </p>
                        <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            Gold Mine Marketers brings decades of success in SEO, web development, and digital marketing.
                        </h3>
                    </li>
                    <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                        <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">
                            Robust Global Network
                        </p>
                        <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            Our global reach in UAE, USA, Saudi Arabia, and Qatar ensures maximum visibility.
                        </h3>
                    </li>
                    <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                        <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">
                            Tailored Strategies
                        </p>
                        <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            Customized solutions in web design, social media monetization, and reel bundling for your goals.
                        </h3>
                    </li>
                    <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                        <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">
                            Transparent Communication
                        </p>
                        <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            Real-time updates, clear reporting, and honest feedback on every project.
                        </h3>
                    </li>
                </ul>
            </section>



            <Footer />

        </div>
    )
}

export default page
