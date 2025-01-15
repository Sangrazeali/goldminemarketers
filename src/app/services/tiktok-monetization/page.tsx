import React from 'react';
import Image from 'next/image';
import Footer from '@/components/globals/footer';
import { tiktok } from '@/images';

const TikTokMonetization = () => {
    return (
        <main className='text-black'>
            <div className="div-container flex flex-col">
                {/* Header Section */}
                <section className="relative mt-10">
                    <div className="relative z-10 mx-auto py-20 space-y-3">
                        <h2 className="mt-5 text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl">
                            TikTok Monetization Services
                        </h2>
                        <h1 className="text-3xl font-bold md:text-2xl lg:text-3xl">
                            Unlock the Power of TikTok Creator Rewards
                        </h1>
                    </div>
                    <Image
                        alt="TikTok Monetization Services"
                        loading="lazy"
                        width={1792}
                        height={1024}
                        decoding="async"
                        className="rounded-lg"
                        src={tiktok}
                        style={{ color: "transparent" }}
                    />
                </section>

                {/* Introduction Section */}
                <section className="bg-white py-16 border-b">
                    <div className="mx-auto px-6 text-center">
                        <p className="text-gray-600 text-lg">
                            Turn your passion into profit with TikTok. The TikTok Creator Rewards
                            Program pays creators to entertain and engage audiences. Our TikTok
                            Monetization services position you for this opportunity, taking you
                            through a step-by-step process to maximize your earning potential
                            through the platform’s monetization features.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-black rounded-md py-16 text-white text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-4">
                            Why Choose Our TikTok Monetization Services?
                        </h2>
                        <p className="text-lg mb-6">
                            TikTok is more than a social platform—it’s a place where creativity meets
                            opportunity. With our expertise, you can unlock your full earning
                            potential and turn your passion into a rewarding career.
                        </p>
                    </div>
                </section>
            </div>

            {/* Services Offered Section */}
            <section className="div-container py-20 sm:py-16 md:py-32">
                <p className="text-lg font-semibold md:text-xl">What We Offer</p>
                <ul className="mt-5 lg:mt-10">
                    {[
                        {
                            title: "TikTok Monetization Criteria Attainment",
                            description:
                                "We will monetize your TikTok account by meeting the requirements of 10,000 followers and 100,000 views within 2-3 days, ensuring your eligibility for the Creator Rewards Program.",
                        },
                        {
                            title: "Revenue Optimization Strategies",
                            description:
                                "Boost engagement and create high-performing videos to maximize earnings through TikTok rewards and other income channels, such as brand deals.",
                        },
                        {
                            title: "Sponsored Content and Partnerships",
                            description:
                                "Find and engage with brands and sponsors aligned with your niche for profitable collaborations.",
                        },
                        {
                            title: "Live Gifts and TikTok Coins Monetization",
                            description:
                                "Set up and manage live gifts, coins, and other features to encourage viewer contributions during live sessions.",
                        },
                        {
                            title: "Diverse Income Opportunities",
                            description:
                                "Explore additional income streams, including affiliate marketing, product promotions, and e-commerce integration with TikTok Shop.",
                        },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0"
                        >
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">
                                {item.title}
                            </p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                                {item.description}
                            </h3>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Call to Action Section */}
            <section className="bg-yellow-500 py-16 text-black text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">
                        Start Earning with Your TikTok Content
                    </h2>
                    <p className="text-lg mb-6">
                        Your creativity deserves recognition—and reward. Whether you’re just
                        starting or already have a strong following, our TikTok Monetization
                        services can help take your content to the next level.
                    </p>
                    <a
                        className="bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-900 transition shadow-lg"
                        href="https://wa.me/+447999369483"
                    >
                        Launch Your TikTok Monetization Journey
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default TikTokMonetization;
