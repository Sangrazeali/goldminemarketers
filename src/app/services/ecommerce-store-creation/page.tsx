import Footer from '@/components/globals/footer';
import { ecommerce } from '@/images';
import Image from 'next/image';

const ECommerceStoreCreation = () => {
    return (
        <main className='text-black'>
            <div className="div-container flex flex-col">
                <section className="relative mt-10">
                    <div className="relative z-10 mx-auto py-20 space-y-3">
                        <h2 className="mt-5 text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl">
                            Online E-Commerce Store Creation
                        </h2>
                        <p className="text-2xl font-semibold md:text-xl">
                            Ready to take your business online? At Goldmine Marketers, we specialize in building powerful, user-friendly e-commerce stores that make selling online simple.
                        </p>
                    </div>
                    <Image
                        alt="Online E-Commerce Store Creation"
                        loading="lazy"
                        width={1792}
                        height={1024}
                        className="rounded-lg"
                        src={ecommerce}
                    />
                </section>

                <section className="bg-white py-16 border-b">
                    <div className="mx-auto px-6 text-center">
                        <p className="text-gray-600 text-lg">
                            Whether you're starting a brand-new online business or expanding an existing one, we will create a store tailored to your needs.
                        </p>
                    </div>
                </section>

                <section className="bg-black rounded-md text-white py-16 text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                        <p className="text-lg mb-6">
                            We know the e-commerce world inside and out. Whether you need a sleek Shopify store, a TikTok Shop to reach younger audiences, or integration with platforms like Amazon and Etsy, we'll make sure your business is set up for success. From design to functionality, we create stores that are intuitive, engaging, and built to convert.
                        </p>
                    </div>
                </section>

                <section className="div-container py-20 sm:py-16 md:py-32">
                    <p className="text-lg font-semibold md:text-xl">Here’s What We Can Do for You</p>
                    <ul className="mt-5 lg:mt-10">
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">Platform Expertise</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">We create stores on popular platforms like Shopify, TikTok Shop, WooCommerce, BigCommerce, Magento, and Wix.</h3>
                        </li>
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">Marketplace Integration</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Seamlessly sell on TikTok Shop, Amazon, Etsy, eBay, and other major online marketplaces.</h3>
                        </li>
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">Custom Design</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Your store will reflect your brand with a unique, professional design that captures your audience’s attention.</h3>
                        </li>
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">Mobile Optimization</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">We ensure your store looks and works perfectly on any device, from desktops to smartphones.</h3>
                        </li>
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">Secure Payment Gateways</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">We integrate trusted payment solutions like PayPal, Stripe, and more for smooth, secure transactions.</h3>
                        </li>
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">Inventory Management</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Easy-to-use tools to manage your products, track stock, and fulfill orders.</h3>
                        </li>
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">Scalable Solutions</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Whether you're launching with a handful of products or a full catalog, our stores are built to grow with your business.</h3>
                        </li>
                        <li className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0">
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">SEO &amp; Marketing Ready</p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Get discovered online with built-in SEO features and tools to run marketing campaigns.</h3>
                        </li>
                    </ul>
                </section>

            </div>
            <section className="bg-yellow-500 py-16 text-black text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">Get Started Today!</h2>
                    <p className="text-lg mb-6">
                        Let's help you bring your products to a global audience with a store that stands out.
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
};

export default ECommerceStoreCreation;
