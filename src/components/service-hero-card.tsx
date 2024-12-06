import Image from "next/image"
import React from "react"

function ServiceHeroCard({ imageSrc, title, description }: { imageSrc: string, title: string, description: string }) {
    return (
        <div className="">
                <div className="relative space-y-5 rounded-2xl border border-[#2D2D2D] p-10 text-white md:px-32 md:pb-48 md:pt-24 lg:px-16 maxw:space-y-3 maxw:pb-12 maxw400:px-[7%] maxw400:py-10">
                    <Image alt="Advertising" className="h-auto w-[200px] -ml-10" 
                        src={imageSrc} />
                    <div className="mt-10 text-black space-y-5">
                        <h3 className="h-auto text-white text-[30px] font-semibold leading-10 md:text-[40px] maxw:leading-8">{title}</h3>
                        <p className="text-sm mmax1024:text-base text-white/70">{description}</p>
                    </div>
                </div>
        </div>

    )
}

export default ServiceHeroCard
