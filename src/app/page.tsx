"use client";
import React from "react";
import GlobeMap from "../components/ui/globe-map";
import ServiceHeroCard from "@/components/service-hero-card";
import { FaqBanner, Instagram, Tiktok, Youtube } from "@/images";
import Services from "@/components/Services";
import Faq from "@/components/globals/faq";
import Footer from "@/components/globals/footer";
export default function AuroraBackgroundDemo() {


  return (
    <>
      <div className="h-screen w-full">
        <div className="div-container py-10 md:py-20">
          <div className="grid gird-cols-1 md:grid-cols-2  items-center gap-10">
            <div className="space-y-4">
              <h1 className="inline-block py-4 text-4xl font-bold leading-none tracking-[-3px]  md:text-[60px] lg:text-[65px] maxw:text-mob33 maxw:leading-tight maxw:tracking-[-1.5px] maxw400:text-mob9vw">
                Creativity & Brand Experience & Reimagined!
              </h1>
              <p className="text-sm mt-7 font-medium leading-tight md:text-base maxw:text-base maxw:leading-6">
                Integrated Creative, Branding,
                Marketing and Advertising Agency providing services around the globe.
              </p>
            </div>
            <div className="hidden sm:flex">
              <GlobeMap />
            </div>
          </div>
        </div>

        <div className="">
          <Services />
        </div>


        {/* <div className="py-20 div-container border-b">
          <h1 className="inline-block py-4 text-4xl mb-10 font-bold leading-none tracking-[-3px] md:text-[35px] lg:text-[40px] maxw:text-mob33 maxw:leading-tight maxw:tracking-[-1.5px] maxw400:text-mob9vw">
            What We Do ?
          </h1>
          <div className="grid grid-cols-3 gap-5">
            <ServiceHeroCard imageSrc={Youtube} title={"Youtube"} description={"Unlock earnings by sharing ads on your videos, offering memberships, and engaging with super chats during live streams to maximize revenue potential."} />
            <ServiceHeroCard imageSrc={Tiktok} title={"TikTok"} description={"Grow your income by leveraging the TikTok Creator Fund, brand partnerships, and live stream gifts to turn your content into profit."} />
            <ServiceHeroCard imageSrc={Instagram} title={"Instagram"} description={"Earn through sponsored posts, affiliate marketing, and Instagrams native shop features to promote products and generate revenue."} />
          </div>
        </div> */}
        <section className="div-container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <h2 className="flex flex-col  text-4xl text-black md:space-y-3 md:text-[30px] maxw:text-mobh mb-20"><span className="font-bold">What We Do ?</span></h2>
            <div className="grid content-start space-y-4 border border-b-0 border-black/20 p-8 sm:p-10 lg:col-start-3 lg:space-y-12 xl:space-y-20 2xl:p-12">
              <p className="text-2xl font-bold leading-none sm:text-3xl lg:text-2xl xl:text-4xl ">Authentic <br className="-lg:hidden" /> Storytelling</p>
              <p className="text-base lg:text-sm xl:text-base">Tell your clients which were your first steps and failures in this business.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="grid content-start space-y-4 border border-b-0 border-black/20 p-8 sm:p-10 lg:col-start-2 lg:space-y-12 lg:border-r-0 xl:space-y-20 2xl:p-12">
              <p className="text-2xl font-bold leading-none sm:text-3xl lg:text-2xl xl:text-4xl ">Optimized<br className="-lg:hidden" />Ads</p>
              <p className="text-base lg:text-sm xl:text-base">Optimize every word on your page for increasing the sales and reach the top of Google searching.</p>
            </div>
            <div className="grid content-start space-y-4 border border-b-0 border-black/20 p-8 sm:p-10 lg:col-start-3 lg:space-y-12 xl:space-y-20 2xl:p-12">
              <p className="text-2xl font-bold leading-none sm:text-3xl lg:text-2xl xl:text-4xl ">Community <br className="-lg:hidden" /> Engagement</p>
              <p className="text-base lg:text-sm xl:text-base">Develop business with similar companies or partners.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="grid content-start space-y-4 border border-black/20 p-8 sm:p-10 lg:col-start-1 lg:space-y-12 lg:border-r-0 xl:space-y-20 2xl:p-12">
              <p className="text-2xl font-bold leading-none sm:text-3xl lg:text-2xl xl:text-4xl ">Fostering <br className="-lg:hidden" /> Growth</p>
              <p className="text-base lg:text-sm xl:text-base">The accent on social media activities increases the number of your clients.</p>
            </div>
            <div className="grid content-start space-y-4 border border-black/20 p-8 sm:p-10 lg:col-start-2 lg:space-y-12 lg:border-r-0 xl:space-y-20 2xl:p-12 -lg:border-t-0">
              <p className="text-2xl font-bold leading-none sm:text-3xl lg:text-2xl xl:text-4xl ">Strategy &  <br className="-lg:hidden" /> visual design</p>
              <p className="text-base lg:text-sm xl:text-base">It is possible to see the future result with the prognosticate ground plan.</p>
            </div>
            <div className="grid content-start space-y-4 border border-black/20 p-8 sm:p-10 lg:col-start-3 lg:space-y-12 lg:border-r-1 xl:space-y-20 2xl:p-12 -lg:border-t-1">
              <p className="text-2xl font-bold leading-none sm:text-3xl lg:text-2xl xl:text-4xl ">Targeted <br className="-lg:hidden" />Content</p>
              <p className="text-base lg:text-sm xl:text-base">The targeting content helps you to push ahead less popular categories of goods.</p>
            </div>
          </div>
        </section>
        <div className="div-container grid content-center py-10 text-left md:min-h-screen md:py-20">
          <p className="gmm-rainbow-text mb-8 text-[21px] font-bold">Why Choose Gold Mine Marketers?</p>
          <h3 className="text-2xl font-medium !leading-none tracking-[-1px] sm:text-4xl sm:font-bold md:w-8/12 md:text-[45px] xl:text-[65px]">
            At Gold Mine Marketers, were not just another advertising agency  were your trusted partner in creating iconic brands that resonate in the dynamic market.
          </h3>
          <p className="mb-8 mt-5 text-[21px] font-bold">Unlock Success with Gold Mine Marketers—Your Trusted Advertising Partner.</p>
          <p className="my-6 md:w-7/12">
            With over 16 years of experience, Gold Mine Marketers has established a reputation for transparency and excellence. Our philosophy is simple: never compromise on quality. We design innovative strategies and combine cutting-edge data analysis with impactful digital campaigns. Our wide array of services, including marketing and advertising, branding and positioning, digital marketing, and web development, are tailor-made to suit the diverse needs of businesses in the digital age.
          </p>

          <div className="pointer-events-auto my-16 flex w-fit items-center space-x-5 maxw:space-x-2">
            <a href="/about" className="bg-yellow-500 group relative inline-flex items-center overflow-hidden p-1 text-gray-900 border border-yellow-500 h-11 rounded-full bg-transparent px-6 py-1 font-medium group-hover:text-white group-hover:!bg-white md:px-12 md:py-2 maxw400:min-w-[47%] maxw400:px-[1.1rem] maxw400:text-center mmax1024:h-[52px] mmax1024:py-4 mmax1024:text-[16px]">
              <span className="relative whitespace-nowrap text-sm mmax1024:text-[16px]">More About Gold Mine Marketers</span>
            </a>

          </div>
        </div>

        <div className="grid grid-cols-2 gap-px border-t border-b border-gray-100 bg-gray-200 text-center md:grid-cols-4 max-w-full border-0 mmax1024:grid-cols-2">
          <div className="flex h-64 flex-col justify-center space-y-1 bg-white max-w-full  gap-x-6 px-[10%] py-7">
            <span className="flex scale-110 items-center justify-center text-4xl font-semibold sm:text-7xl sm:tracking-[-4px]">
              <span className="gmm-rainbow-text inline-block">
                <span>20</span><span>+</span>
              </span>
            </span>
            <span className="text-sm font-semibold sm:text-[21px]">In-house Team</span>
          </div>

          <div className="flex h-64 flex-col justify-center space-y-1 bg-white max-w-full  gap-x-6 px-[10%] py-7">
            <span className="flex scale-110 items-center justify-center text-4xl font-semibold sm:text-7xl sm:tracking-[-4px]">
              <span className="gmm-rainbow-text inline-block">
                <span>10</span><span>+</span>
              </span>
            </span>
            <span className="text-sm font-semibold sm:text-[21px]">Years of Experience</span>
          </div>

          <div className="flex h-64 flex-col justify-center space-y-1 bg-white max-w-full  gap-x-6 px-[10%] py-7">
            <span className="flex scale-110 items-center justify-center text-4xl font-semibold sm:text-7xl sm:tracking-[-4px]">
              <span className="gmm-rainbow-text inline-block">
                <span>4</span><span>+</span>
              </span>
            </span>
            <span className="text-sm font-semibold sm:text-[21px]">Global Countries</span>
          </div>

          <div className="flex h-64 flex-col justify-center space-y-1 bg-white max-w-full  gap-x-6 px-[10%] py-7">
            <span className="flex scale-110 items-center justify-center text-4xl font-semibold sm:text-7xl sm:tracking-[-4px]">
              <span className="gmm-rainbow-text inline-block pr-1">
                <span data-counter-time="500">150</span><span>+</span>
              </span>
            </span>
            <span className="text-sm font-semibold sm:text-[21px]">Clients</span>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

