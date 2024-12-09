"use client"
import Faq from "@/components/globals/faq"
import Footer from "@/components/globals/footer"
import ServiceHeroCard from "@/components/service-hero-card"
import { TeamCard } from "@/components/team-card"
import {  Basit, FaqBanner, Instagram, Mahad, Muhammad, Sunny, Tiktok, Youtube } from "@/images"
import React from "react"

function page() {
    return (
        <>
            <div className="div-container py-16 md:py-32">
                <h1 className="text-3xl font-bold tracking-[-1px] sm:text-5xl md:text-[80px] md:tracking-[-3px] maxw:text-mob33 maxw:leading-[1.30] maxw400:text-mob8vw mmax1024:text-7xl mmax1024:leading-[1.1]"><span className="block">We are a Creative </span><span className="gmm-rainbow-text block whitespace-nowrap">Consumer-Experience</span><span className="gmm-rainbow-text block pb-4"> Agency.</span></h1>
                <p className="text-sm mt-7 font-medium leading-tight md:text-base maxw:text-base maxw:leading-6">
                    We design innovative strategies that connect with audiences, elevate brands, and deliver impactful results. <br /> Lets create something extraordinary together!
                </p>
            </div>
            <div className=" bg-black rounded-3xl">
                <div className="div-container content-center py-10 text-left md:min-h-screen md:py-20">
                    <h2 className="flex flex-col  text-4xl text-white md:space-y-3 md:text-[30px] maxw:text-mobh mb-20"><span className="font-bold">Our Expertise</span></h2>
                    <div className=" grid md:grid-cols-2 gap-10">
                        <ServiceHeroCard imageSrc={Youtube} title="YouTube Advertising" description="We craft innovative, data-driven strategies that captivate audiences through high-quality video content. By leveraging targeted campaigns, engaging storytelling, and SEO optimization, we elevate brands, boost visibility, and drive impactful results on YouTube. Whether its increasing subscribers or maximizing conversions, our approach ensures your brand stays ahead in a competitive video landscape." />
                        <ServiceHeroCard imageSrc={Tiktok} title="Tiktok Advertising" description="Our TikTok advertising strategies are tailored to tap into the platforms dynamic trends and viral culture. We create engaging, authentic content that resonates with diverse audiences, elevates brand presence, and drives real engagement. By utilizing TikToks unique algorithm, we ensure your brand reaches the right audience, fostering connections that lead to measurable success." />
                        <ServiceHeroCard imageSrc={Instagram} title="Instagram Advertising" description="We design Instagram advertising campaigns that showcase your brands story through visually compelling and innovative content. From feed posts to Reels, we leverage Instagrams powerful targeting tools to maximize engagement and deliver measurable results. Our goal is to transform followers into loyal customers by fostering authentic connections and boosting brand awareness." />
                    </div>
                </div>
            </div>
          
            <section className="bg-white py-12 md:pb-20 md:pt-16"><div className="div-container "><div className="flex flex-wrap md:flex-nowrap"><div className="mt-12 flex w-full items-center"><div className="space-y-5 md:space-y-12"><div className="flex flex-col md:space-y-8"><span data-aos="fade-up" className="text-4xl font-extralight tracking-[-1px] text-black md:text-[115px] md:tracking-[-10px] maxw:text-[40px] maxw400:text-mob10vw mmax1024:text-[90px]">From the</span><span data-aos="fade-up" className="gmm-rainbow-text block text-4xl font-bold leading-none tracking-[-1px] text-black md:text-[115px] md:tracking-[-7px] maxw:text-[40px] maxw400:text-mob10vw mmax1024:text-[90px]">UAE to the world</span></div><span data-aos="fade-up" className="ml-auto block w-full text-sm font-medium leading-normal text-gray-800 md:w-1/2 md:text-base maxw:text-base">Gold Mine Marketers has collaborated with some of the most prominent global brands, establishing enduring partnerships built on trust, creativity, and innovation. Over 10 years, we have successfully designed, implemented, and launched impactful projects across diverse industries. Our strategic alliances and exclusive marketing tools have propelled us to become a leading creative agency, operating across the UAE, USA, Saudi Arabia, Qatar, and beyond. Our commitment to delivering tailored solutions has solidified our position as a trusted partner, driving growth and innovation in the MENA region and worldwide..</span></div></div></div></div></section>
            <div className="div-container py-20">
                <h2 className="flex flex-col  text-4xl text-black md:space-y-3 md:text-[30px] maxw:text-mobh mb-20"><span className="font-bold">Meet Our Team of Professionals</span></h2>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                    <TeamCard imgUrl={Muhammad?.default?.src} name={"M. Usama Iqbal"} designation={"Founder"} />
                    <TeamCard imgUrl={Sunny?.default?.src} name={"Sangraze Ali"} designation={"Co Founder"} />
                    <TeamCard imgUrl={Mahad?.default?.src} name={"Mahad Ali Khan"} designation={"Vice President"} />
                    <TeamCard imgUrl={Basit?.default?.src} name={"Basit"} designation={"Managing Director"} />
                </div>
            </div>
            <div className="bg-cover bg-no-repeat bg-bottom py-20" style={{ backgroundImage: `url(${FaqBanner.default.src})`, filter: "hue-rotate(30deg) saturate(1.5) contrast(1.1)" }}>
                <Faq />
            </div>
            <Footer />

        </>
    )
}

export default page
