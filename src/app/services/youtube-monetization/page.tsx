import Footer from "@/components/globals/footer";
import { youtube } from "@/images";
import Image from "next/image";

const YouTubeMonetizationServices = () => {
    return (
        <main className="text-black">
            <div className="div-container flex flex-col">
                {/* Hero Section */}
                <section className="relative mt-10">
                    <div className="relative z-10 mx-auto py-20 space-y-3">
                        <h2 className="mt-5 text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl">
                            YouTube Monetization Services
                        </h2>
                        <h1 className="text-3xl font-bold md:text-2xl lg:text-3xl">
                            Turn Your YouTube Channel into a Money-Making Machine
                        </h1>
                    </div>
                    <Image
                        alt="YouTube Monetization Services"
                        loading="lazy"
                        width={1792}
                        height={1024}
                        decoding="async"
                        className="rounded-lg"
                        src={youtube}
                    />
                </section>

                {/* Overview Section */}
                <section className="bg-white py-16 border-b">
                    <div className="mx-auto px-6 text-center">
                        <p className="text-gray-600 text-lg">
                            Are you ready to turn your YouTube channel into a money-making machine? With millions of viewers on YouTube every day, the monetization feature is changing the game for creators who want to share their passion and earn from it. Our YouTube Monetization services will help you meet all monetization criteria and optimize your earnings.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-black rounded-md py-16 text-white text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-4">
                            Why Choose Our YouTube Monetization Services?
                        </h2>
                        <p className="text-lg mb-6">
                            You’ve worked hard to grow your YouTube channel—let us help you unlock its full earning potential. From achieving monetization eligibility to maximizing ad revenue, we provide end-to-end support tailored to your goals.
                        </p>
                    </div>
                </section>
            </div>

            {/* Services Section */}
            <section className="div-container py-20 sm:py-16 md:py-32">
                <p className="text-lg font-semibold md:text-xl">What We Offer</p>
                <ul className="mt-5 lg:mt-10">
                    {[
                        {
                            title: "Meeting Monetization Criteria",
                            description:
                                "We help you reach 1,000 subscribers and 4,000 watch hours, qualifying your channel for the YouTube Partner Program.",
                        },
                        {
                            title: "Ad Revenue Optimization",
                            description:
                                "Strategically set up and optimize ad placements to increase revenue while maintaining an excellent viewer experience.",
                        },
                        {
                            title: "Customized Strategies",
                            description:
                                "Each channel is unique. We develop a monetization plan tailored to your content, audience, and goals.",
                        },
                        {
                            title: "Ongoing Support",
                            description:
                                "From the initial setup to scaling your revenue streams, our team supports you at every step.",
                        },
                        {
                            title: "Content Monetization Insights",
                            description:
                                "Analyze your channel’s performance and unlock additional revenue streams, such as memberships and sponsorships.",
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

            {/* Call-to-Action Section */}
            <section className="bg-yellow-500 py-16 text-black text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">
                        Start Earning with Your Content
                    </h2>
                    <p className="text-lg mb-6">
                        You’ve put in the hard work building your YouTube channel; now it’s time to get rewarded. Whether you’re just starting or are already established, our YouTube Monetization services are designed to help you reach your financial goals.
                    </p>
                    <a
                        className="bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-900 transition shadow-lg"
                        href="https://wa.me/+447999369483"
                    >
                        Launch Your Monetization Journey
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default YouTubeMonetizationServices;
