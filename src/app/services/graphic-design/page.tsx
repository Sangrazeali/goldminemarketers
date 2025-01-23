import React from "react";
import Image from "next/image";
import Footer from "@/components/globals/footer";
import { graphicdesign } from "@/images";

const GraphicDesigningServices = () => {
    return (
        <main className="text-black">
            <div className="div-container flex flex-col">
                {/* Hero Section */}
                <section className="relative mt-10">
                    <div className="relative z-10 mx-auto py-20 space-y-3">
                        <h2 className="mt-5 text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl">
                            Creative Graphic Designing Services
                        </h2>
                    </div>
                    <Image
                        alt="Graphic Designing"
                        loading="lazy"
                        width="1792"
                        height="1024"
                        decoding="async"
                        className="rounded-lg"
                        src={graphicdesign}
                        style={{ color: "transparent" }}
                    />
                </section>

                {/* Mission Statement Section */}
                <section className="bg-white py-16 border-b">
                    <div className="mx-auto px-6 text-center">
                        <h2 className="mt-5 text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl mb-5">
                            Bring Your Vision to Life
                        </h2>
                        <p className="text-gray-600 text-lg">
                            In todays visually driven world, impactful design is at the heart
                            of every successful brand. At Goldmine Marketers, we specialize in
                            creating stunning graphic designs that not only capture attention
                            but also tell your brands story in a compelling way.
                        </p>
                    </div>
                </section>
            </div>

            {/* Why Choose Us Section */}
            <section className="bg-yellow-500 rounded-md py-16 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                    <p className="text-lg mb-6">
                        At Goldmine Marketers, we believe in the power of design to inspire,
                        engage, and transform. Our designs are more than just visuals; they
                        are a strategic extension of your brand. By combining creativity,
                        technology, and an understanding of your goals, we deliver designs
                        that set you apart from the competition.
                    </p>
                    <a
                        className="bg-black text-white font-semibold py-3 px-6 rounded-full transition shadow-lg"
                        href="https://wa.me/+447999369483"
                    >
                        Start Your Project Today
                    </a>
                </div>
            </section>

            {/* Services Section */}
            <section className="div-container py-20 sm:py-16 md:py-32">
                <p className="text-lg font-semibold md:text-xl">What We Offer</p>
                <ul className="mt-5 lg:mt-10">
                    {[
                        {
                            title: "Logo Design",
                            description:
                                "Create a distinctive logo that represents your brands personality and values.",
                        },
                        {
                            title: "Brand Identity Design",
                            description:
                                "Develop cohesive branding elements like business cards, letterheads, and packaging designs.",
                        },
                        {
                            title: "Social Media Graphics",
                            description:
                                "Stand out online with eye-catching visuals tailored for platforms like Instagram, Facebook, and LinkedIn.",
                        },
                        {
                            title: "Website & App Graphics",
                            description:
                                "Enhance user experience with clean, professional, and engaging graphics for digital interfaces.",
                        },
                        {
                            title: "Marketing Materials",
                            description:
                                "From brochures and flyers to posters and banners, we design materials that communicate your message effectively.",
                        },
                        {
                            title: "Custom Illustrations",
                            description:
                                "Add a unique touch to your projects with hand-crafted illustrations and artwork.",
                        },
                    ].map((service, index) => (
                        <li
                            key={index}
                            className="grid border-b border-black/20 py-12 lg:grid-cols-2 lg:space-y-0"
                        >
                            <p className="grid content-center text-base font-medium sm:text-lg lg:text-xl lg:font-semibold">
                                {service.title}
                            </p>
                            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                                {service.description}
                            </h3>
                        </li>
                    ))}
                </ul>
            </section>

            <Footer />
        </main>
    );
};

export default GraphicDesigningServices;
