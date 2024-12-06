"use client"
import Faq from "@/components/globals/faq"
import Footer from "@/components/globals/footer"
import { FaqBanner, ServiesBanner } from "@/images"
import React from "react"

function page() {
    return (
        <div>
            <div className="div-container py-16 md:py-32">
                <h1 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">One Stop Marketing Solutions</h1>
                <h2 className="mt-5 text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl">Maximize user experience <br /> with Gold Mine Marketers <br /> Innovative Digital Solutions</h2>
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
            <section className="div-container py-20 sm:py-16 md:py-32">
                <p className="text-lg font-semibold md:text-xl">
                    How to Choose the Best Digital Marketing and Web Development Company
                </p>
                <ul className="mt-5 lg:mt-10">
                    <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                        <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">
                            Proven Expertise
                        </p>
                        <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            Gold Mine Marketers brings decades of success in SEO, web development, and digital marketing.
                        </p>
                    </li>
                    <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                        <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">
                            Robust Global Network
                        </p>
                        <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            Our global reach in UAE, USA, Saudi Arabia, and Qatar ensures maximum visibility.
                        </p>
                    </li>
                    <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                        <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">
                            Tailored Strategies
                        </p>
                        <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            Customized solutions in web design, social media monetization, and reel bundling for your goals.
                        </p>
                    </li>
                    <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                        <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">
                            Transparent Communication
                        </p>
                        <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            Real-time updates, clear reporting, and honest feedback on every project.
                        </p>
                    </li>
                </ul>
            </section>

            <section className="bg-[#f0f0f0] py-20 text-[#000000] sm:py-16 md:py-32">
                <div className="div-container">
                    <h2 className="mb-12 text-7xl font-bold leading-none sm:text-8xl md:text-[132px]">Services</h2>
                    <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-28 md:grid-cols-3 lg:grid-cols-4">
                        <div className="border-b border-black/20 pb-10">
                            <p className="text-lg font-bold sm:text-xl">Website Design & Development</p>
                            <p className="mt-5 font-extralight">
                                Creating visually stunning, highly functional websites that deliver seamless user experiences and drive measurable results.
                            </p>
                        </div>
                        <div className="border-b border-black/20 pb-10">
                            <p className="text-lg font-bold sm:text-xl">Graphic Design</p>
                            <p className="mt-5 font-extralight">
                                Crafting captivating visuals including branding, logos, and marketing materials to elevate your brands identity.
                            </p>
                        </div>
                        <div className="border-b border-black/20 pb-10">
                            <p className="text-lg font-bold sm:text-xl">Digital Marketing</p>
                            <p className="mt-5 font-extralight">
                                Offering end-to-end digital marketing strategies to boost your online presence, engagement, and conversions.
                            </p>
                        </div>
                        <div className="border-b border-black/20 pb-10">
                            <p className="text-lg font-bold sm:text-xl">SEO (Search Engine Optimization)</p>
                            <p className="mt-5 font-extralight">
                                Enhancing your visibility on search engines through tailored strategies that drive organic traffic and improve rankings.
                            </p>
                        </div>
                        <div className="border-b border-black/20 pb-10">
                            <p className="text-lg font-bold sm:text-xl">App Marketing</p>
                            <p className="mt-5 font-extralight">
                                Promoting your app with innovative marketing techniques to boost downloads, engagement, and user retention.
                            </p>
                        </div>
                        <div className="border-b border-black/20 pb-10">
                            <p className="text-lg font-bold sm:text-xl">Reel Bundles</p>
                            <p className="mt-5 font-extralight">
                                Curating engaging short video content for social media platforms to amplify brand awareness and engagement.
                            </p>
                        </div>
                        <div className="border-b border-black/20 pb-10">
                            <p className="text-lg font-bold sm:text-xl">Social Media Monetization</p>
                            <p className="mt-5 font-extralight">
                                Helping brands monetize their presence on TikTok, LinkedIn, Instagram, and Facebook through strategic content and ads.
                            </p>
                        </div>
                        <div className="border-b border-black/20 pb-10">
                            <p className="text-lg font-bold sm:text-xl">Social Media Marketing (SMM)</p>
                            <p className="mt-5 font-extralight">
                                Managing and growing your social media channels to foster community engagement and brand loyalty.
                            </p>
                        </div>
                        <div className="border-b border-black/20 pb-10">
                            <p className="text-lg font-bold sm:text-xl">Digital Drop Shipping</p>
                            <p className="mt-5 font-extralight">
                                Assisting in setting up and managing profitable drop shipping businesses with cutting-edge digital strategies.
                            </p>
                        </div>
                        <div className="border-b border-black/20 pb-10">
                            <p className="text-lg font-bold sm:text-xl">UI/UX Designing</p>
                            <p className="mt-5 font-extralight">
                                Designing intuitive user interfaces and experiences that ensure ease of use while maximizing engagement and satisfaction.
                            </p>
                        </div>
                        <div className="border-b border-black/20 pb-10">
                            <p className="text-lg font-bold sm:text-xl">Brand Development</p>
                            <p className="mt-5 font-extralight">
                                Building and refining your brands identity to create a lasting impact, ensuring consistency across all touchpoints.
                            </p>
                        </div>
                        <div className="border-b border-black/20 pb-10">
                            <p className="text-lg font-bold sm:text-xl">Video Editing</p>
                            <p className="mt-5 font-extralight">
                                We offer professional video editing services to help bring your story to life. Whether its promotional videos, social media content, or advertisements, we create high-quality, engaging videos that resonate with your audience. </p>
                        </div>
                    </div>
                </div>
            </section>
         
            <Footer />

        </div>
    )
}

export default page
