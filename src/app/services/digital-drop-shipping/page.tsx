import { ecommerce } from '@/images';
import Image from 'next/image';
import React from 'react';

const DigitalDropshipping = () => {
  return (
    <main className='text-black'>
      <div className="div-container flex flex-col">
        <section className="relative mt-10">
          <div className="relative z-10 mx-auto py-20 space-y-3">
            <h2 className="mt-5 text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl">
              Digital Drop-shipping Services
            </h2>
            <h1 className="text-3xl font-bold md:text-2xl lg:text-3xl">
              Revolutionize Your Online Business with Digital Products
            </h1>
          </div>
          <Image
            alt="Digital Drop-shipping"
            loading="lazy"
            width="1792"
            height="1024"
            decoding="async"
            className="rounded-lg"
            src={ecommerce}
            style={{ color: 'transparent' }}
          />
        </section>
        <section className="bg-white py-16 border-b">
          <div className="mx-auto px-6 text-center">
            <p className="text-gray-600 text-lg">
              Digital Drop-shipping is an innovative method of e-commerce that eliminates the need for inventory or shipping. Sell in-demand digital products effortlessly and build a profitable online business. We provide pre-created, ready-to-sell digital products tailored to meet the needs of your target audience.
            </p>
          </div>
        </section>
        <section className="bg-black rounded-md py-16 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Why Choose Digital Drop-shipping?</h2>
            <p className="text-lg mb-6">
              With no inventory or shipping required, digital products simplify operations and offer substantial profit margins. Deliver goods instantly, scale effortlessly, and reach a global audience without logistical constraints.
            </p>
          </div>
        </section>
      </div>
      <section className="div-container py-20 sm:py-16 md:py-32">
        <p className="text-lg font-semibold md:text-xl">Our Digital Products</p>
        <ul className="mt-5 lg:mt-10">
          {[
            {
              title: 'E-Books',
              description:
                'Professionally designed e-books on a wide range of topics, ready to be resold with your branding.',
            },
            {
              title: 'Pre-Monetized YouTube Channels',
              description:
                'Sell monetization-ready YouTube channels, enabling buyers to start earning profits immediately.',
            },
            {
              title: 'Monetized TikTok Accounts',
              description:
                'Offer TikTok accounts already monetized, giving clients the ability to begin earning right away.',
            },
            {
              title: 'RDPs (Virtual Computers)',
              description:
                'Provide secure, high-performance Remote Desktop Protocol (RDP) services for personal or professional use.',
            },
            {
              title: 'Reel Bundles',
              description:
                'Curated collections of high-quality social media reels to boost engagement and visibility on platforms like Instagram and Facebook.',
            },
            {
              title: 'Websites',
              description:
                'Fully designed, ready-to-use websites optimized for various industries, available for immediate deployment.',
            },
          ].map((product, index) => (
            <li
              key={index}
              className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0"
            >
              <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">
                {product.title}
              </p>
              <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                {product.description}
              </h3>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-yellow-500 py-16 text-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Get Started with Digital Drop-shipping</h2>
          <p className="text-lg mb-6">
            Transform your business with our Digital Drop-shipping services. Whether you're an experienced entrepreneur or just starting, we provide the tools, products, and support you need to succeed.
          </p>
          <a
            className="bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-900 transition shadow-lg"
            href="https://wa.me/+447999369483"
          >
            Launch Your Business Today
          </a>
        </div>
      </section>
      <div className="bg-black">
        <div className="div-container grid grid-cols-2 px-10 gap-5 py-20 border-t border-b border-white/20 justify-center items-center">
          <div className="space-y-6">
            <p className="text-white/70">UPSKILL FOR A BETTER FUTURE</p>
            <h1 className="text-xl md:text-4xl font-bold leading-none text-white">
              Request More Information
            </h1>
            <p className="text-white/70">
              For inquiries and details, connect with us on WhatsApp today! Let's work together to
              achieve your goals.
            </p>
            <a
              href="https://wa.me/+447999369483"
              className="group mt-10 relative inline-flex items-center overflow-hidden p-1 text-green-500 border border-green-500 h-11 rounded-full bg-transparent px-6 py-1 font-medium group-hover:text-white group-hover:!bg-white"
            >
              <span className="relative whitespace-nowrap text-sm">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <p className="bg-black text-center text-white/70 py-5">
        Copyright © 2024 Gold Mine Marketers
      </p>
    </main>
  );
};

export default DigitalDropshipping;
