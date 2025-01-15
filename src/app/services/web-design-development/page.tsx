import Footer from '@/components/globals/footer';
import { webdev } from '@/images';
import Image from 'next/image';

const WebDesignComponent = () => {
    return (
        <main className='text-black'>
            <div className="div-container flex flex-col">
                <section className="relative mt-10">
                    <div className="relative z-10 mx-auto py-20 space-y-3">
                        <h2 className="mt-5 text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl">
                            Website Design & Development
                        </h2>
                        <p className="text-2xl md:text-xl">
                            Your website is often the first impression people get of your business—let’s make it a great one.
                        </p>
                    </div>
                    <div className="relative">
                        <Image
                            alt="Website Design & Development"
                            loading="lazy"
                            width={1792}
                            height={1024}
                            decoding="async"
                            src={webdev}
                            className="rounded-lg"
                        />
                    </div>
                </section>

                <section className="bg-white py-16 border-b">
                    <div className="mx-auto px-6 text-center">
                        <p className="text-gray-600 text-lg">
                            At Goldmine Marketers, we create beautiful, easy-to-use websites that help your brand stand out and connect with your audience. Whether you need a portfolio, an online store, or something completely custom, we’ll work with you to bring your ideas to life.
                        </p>
                    </div>
                </section>

                <section className="bg-black text-white rounded-md py-16 text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-4">Why Work with Us?</h2>
                        <p className="text-lg mb-6">
                            We care about your success. Our goal is to create a website that not only looks great but also works hard for your business. Plus, we’ll keep things simple and stress-free, with clear communication and on-time delivery.
                        </p>
                    </div>
                </section>

                <section className="div-container py-20 sm:py-16 md:py-32">
                    <p className="text-lg font-semibold md:text-xl">Here’s What We Can Do for You</p>
                    <ul className="mt-5 lg:mt-10">
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">Custom Website Design</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                                We design websites that are unique to your brand and built to impress.
                            </h3>
                        </li>
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">Mobile-Friendly Development</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                                Your site will look and work perfectly on any device—desktop, tablet, or smartphone.
                            </h3>
                        </li>
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">Online Stores</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                                Ready to sell online? We build stores on platforms like Shopify, TikTok Shop, Amazon, Etsy, and more.
                            </h3>
                        </li>
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">Easy Updates</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                                We can set up your site on platforms like WordPress or Shopify so you can easily update it yourself.
                            </h3>
                        </li>
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">SEO Built-In</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                                We make sure your site is set up to rank well on search engines like Google.
                            </h3>
                        </li>
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">Site Makeovers</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                                Got an outdated site? We’ll refresh it with a modern design and better functionality.
                            </h3>
                        </li>
                    </ul>
                </section>


            </div >
            <section className="bg-yellow-500 py-16 text-black text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">Let’s Chat!</h2>
                    <p className="text-lg mb-6">
                        Whether you’re starting from scratch or looking to upgrade your current website, we’re here to help. Let’s create something amazing together.
                    </p>
                    <a
                        className="bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-900 transition shadow-lg"
                        href="https://wa.me/+447999369483"
                    >
                        Get Your Free Consultation
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default WebDesignComponent;
