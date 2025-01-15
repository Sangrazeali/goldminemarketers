import React from "react";
import { smm } from "@/images";
import Image from "next/image";
import Footer from "@/components/globals/footer";

const GoldmineMarketers = () => {
  return (
    <main className="text-black">
      <div className="div-container flex flex-col">
        {/* Hero Section */}
        <section className="relative mt-10">
          <div className="relative z-10 mx-auto py-20 space-y-3">
            <h2 className="mt-5 text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to Goldmine Marketers
            </h2>
            <h1 className="text-3xl font-bold md:text-2xl lg:text-3xl">
              Your Trustworthy Digital Marketing Partner
            </h1>
          </div>
          <Image
            alt="Digital Marketing"
            loading="lazy"
            width="1792"
            height="1024"
            decoding="async"
            data-nimg="1"
            className="rounded-lg"
            src={smm}
            style={{ color: "transparent" }}
          />
        </section>

        {/* Mission Statement Section */}
        <section className="bg-white py-16 border-b">
          <div className="mx-auto px-6 text-center">
            <h2 className="mt-5 text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl mb-5">
              In the Ever-Changing Digital World
            </h2>
            <p className="text-gray-600 text-lg">
              Your business needs a marketing strategy that leads the way. At
              Goldmine Marketers, we create innovative digital marketing
              solutions designed to expand your online presence and deliver
              results that truly matter.
            </p>
          </div>
        </section>
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-yellow-500 rounded-md py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-6">
            At Goldmine Marketers, your success is our priority. With a
            data-driven approach, cutting-edge tools, and a commitment to
            excellence, we craft strategies that not only meet but exceed
            expectations.
          </p>
          <a
            className="bg-black text-white font-semibold py-3 px-6 rounded-full transition shadow-lg"
            href="https://wa.me/+447999369483"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="div-container py-20 sm:py-16 md:py-32">
        <p className="text-lg font-semibold md:text-xl">What We Offer</p>
        <ul className="mt-5 lg:mt-10">
          {[
            {
              title: "Search Engine Optimization (SEO)",
              description:
                "Enhance your website's search engine rankings and connect with the right audience using our effective SEO techniques."
            },
            {
              title: "Pay-Per-Click Advertising (PPC)",
              description:
                "Maximize your returns with precise, data-driven PPC campaigns."
            },
            {
              title: "Social Media Marketing",
              description:
                "Engage your audience and grow your brand presence on leading social platforms."
            },
            {
              title: "Content Marketing",
              description:
                "Build credibility and trust with captivating content that resonates with your audience."
            },
            {
              title: "Email Marketing",
              description:
                "Stay connected with customers through impactful email campaigns."
            },
            {
              title: "Web Design & Development",
              description:
                "Deliver an intuitive, responsive, and visually appealing digital experience."
            }
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

export default GoldmineMarketers;
