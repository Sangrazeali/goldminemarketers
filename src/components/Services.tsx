"use client"
import React from 'react'
import { ecommerce, graphicdesign, SEO, smm, tiktok, webdev, youtube } from '@/images/index'
import Image from 'next/image'
function Services() {
    return (
        <div className="bg-black">
        <div className="div-container grid grid-cols-1 gap-12 text-white py-20 sm:pt-32 lg:grid-cols-4 ">
           <p className="text-xl font-semibold -lg:mb-8">Experience our Cutting-edge Services.</p>
           <ul className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
              <li className="flex items-start space-x-6 border-b border-white/20  py-10 ">
                 <p className="mt-2 grid aspect-square h-fit place-content-center overflow-hidden rounded-full bg-[#a3a3a3] p-3.5 text-xs font-semibold">1</p>
                 <div className="space-y-2">
                    <Image alt="Youtube"  className="rounded-md" src={youtube} />
                    <h3 className="text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">YouTube Monetization</h3>
                    <p className="font-light text-white/70">Are you ready to turn your YouTube channel into a money-making machine? With millions of viewers on YouTube every day, the monetization feature is about to change the game for creators who want to share their passion and earn from doing so. Our YouTube Monetization services will help you monetize your YouTube channel by fulfilling the monetization criteria. </p>
                 </div>
              </li>
              <li className="flex items-start space-x-6 border-b border-white/20  lack/10 py-10 ">
                 <p className="mt-2 grid aspect-square h-fit place-content-center overflow-hidden rounded-full bg-[#a3a3a3] p-3.5 text-xs font-semibold">2</p>
                 <div className="space-y-2">
                    <Image alt="Youtube"  className="rounded-md" src={tiktok} />
                    <h3 className="text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">TikTok Monetization</h3>
                    <p className="font-light text-white/70">Turn your passion into profit with TikTok. The TikTok Creator Rewards Program pays creators to entertain and engage audiences. Our TikTok Monetization services position you for this opportunity, taking you through a step-by-step process to maximize your earning potential through the platforms monetization features. </p>
                 </div>
              </li>
              <li className="flex items-start space-x-6 border-b border-white/20  lack/10 py-10 ">
                 <p className="mt-2 grid aspect-square h-fit place-content-center overflow-hidden rounded-full bg-[#a3a3a3] p-3.5 text-xs font-semibold">3</p>
                 <div className="space-y-2">
                    <Image alt="Youtube"  className="rounded-md" src={SEO} />
                    <h3 className="text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Search Engine Optimization (SEO)</h3>
                    <p className="font-light text-white/70">Boost your websites visibility with expert SEO strategies designed to improve search rankings and drive organic traffic. From keyword research and on-page optimization to technical audits and link-building, we ensure your site stays ahead in search results. Let us help you achieve sustainable growth with proven SEO solutions tailored to your business goals.</p>
                 </div>
              </li>
              <li className="flex items-start space-x-6 border-b border-white/20  lack/10 py-10 ">
                 <p className="mt-2 grid aspect-square h-fit place-content-center overflow-hidden rounded-full bg-[#a3a3a3] p-3.5 text-xs font-semibold">4</p>
                 <div className="space-y-2">
                    <Image alt="Youtube"  className="rounded-md" src={graphicdesign} />
                    <h3 className="text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Graphic Designing</h3>
                    <p className="font-light text-white/70">In todays visually driven world, impactful design is at the heart of every successful brand. At Goldmine Marketers, we specialize in creating stunning graphic designs that not only capture attention but also tell your brands story in a compelling way.</p>
                 </div>
              </li>
              <li className="flex items-start space-x-6 border-b border-white/20  py-10 ">
                 <p className="mt-2 grid aspect-square h-fit place-content-center overflow-hidden rounded-full bg-[#a3a3a3] p-3.5 text-xs font-semibold">5</p>
                 <div className="space-y-2">
                    <Image alt="Youtube"  className="rounded-md" src={smm} />
                    <h3 className="text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Social Media Marketing</h3>
                    <p className="font-light text-white/70">In todays digital era, social media is more than just a platform—its a powerful tool for building connections, driving engagement, and growing your business. At Goldmine Marketers, we specialize in creating impactful social media strategies that help your brand stand out in a crowded marketplace</p>
                 </div>
              </li>
              <li className="flex items-start space-x-6 border-b border-white/20  py-10 ">
                 <p className="mt-2 grid aspect-square h-fit place-content-center overflow-hidden rounded-full bg-[#a3a3a3] p-3.5 text-xs font-semibold">6</p>
                 <div className="space-y-2">
                    <Image alt="Youtube"  className="rounded-md" src={ecommerce} />
                    <h3 className="text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Digital Drop-shipping</h3>
                    <p className="font-light text-white/70">Digital Drop-shipping is an innovative method of e-commerce that eliminates the need for inventory or shipping. Sell in-demand digital products effortlessly and build a profitable online business. We provide pre-created, ready-to-sell digital products tailored to meet the needs of your target audience. </p>
                 </div>
              </li>
              <li className="flex items-start space-x-6 border-b border-white/20  py-10 ">
                 <p className="mt-2 grid aspect-square h-fit place-content-center overflow-hidden rounded-full bg-[#a3a3a3] p-3.5 text-xs font-semibold">7</p>
                 <div className="space-y-2">
                    <Image alt="Youtube"  className="rounded-md" src={webdev}/>
                    <h3 className="text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Website Design &amp; Development </h3>
                    <p className="font-light text-white/70">Your website is often the first impression people get of your business—lets make it a great one. At Goldmine Marketers, we create beautiful, easy-to-use websites that help your brand stand out and connect with your audience. Whether you need a portfolio, an online store, or something completely custom, well work with you to bring your ideas to life. </p>
                 </div>
              </li>
              <li className="flex items-start space-x-6 border-b border-white/20  py-10 ">
                 <p className="mt-2 grid aspect-square h-fit place-content-center overflow-hidden rounded-full bg-[#a3a3a3] p-3.5 text-xs font-semibold">8</p>
                 <div className="space-y-2">
                    <Image alt="Youtube"  className="rounded-md" src={ecommerce} />
                    <h3 className="text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Online E-Commerce Store Creation </h3>
                    <p className="font-light text-white/70">Ready to take your business online? At Goldmine Marketers, we specialize in building powerful, user-friendly e-commerce stores that make selling online simple. Whether youre starting a brand-new online business or expanding an existing one, well create a store tailored to your needs. </p>
                 </div>
              </li>
           </ul>
        </div>
     </div>
    )
}

export default Services
