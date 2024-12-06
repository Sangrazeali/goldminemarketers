import React from "react"
import { Whastapp } from "@/images"
import Image from "next/image"

function Footer() {
    return (

        <>
            <div className="bg-black">
                <div className="div-container grid grid-cols-2  px-10 gap-5 py-20 border-t border-b border-white/20 justify-center items-center">
                    <div className="space-y-5">
                        <p className="text-white/70">UPKILL FOR A BETTER FUTURE</p>
                        <h1 className="text-xl md:text-4xl font-bold leading-none text-white">Request More Information</h1>
                        <p className="text-white/70">For inquiries and details, connect with us on WhatsApp today! Lets work together to achieve your goals.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image src={Whastapp?.default?.src} alt={"whstapp cta"} className="animate-bounce" width={100} height={100} />
                        <a href="https://wa.me/+447999369483" className=" group mt-10 relative inline-flex items-center overflow-hidden p-1 text-yellow-500 border border-yellow-500 h-11 rounded-full bg-transparent px-6 py-1 font-medium group-hover:text-white group-hover:!bg-white md:px-12 md:py-2 maxw400:min-w-[47%] maxw400:px-[1.1rem] maxw400:text-center mmax1024:h-[52px] mmax1024:py-4 mmax1024:text-[16px]">
                            <span className="relative whitespace-nowrap text-sm mmax1024:text-[16px]">WhastApp</span>
                        </a>
                    </div>
                </div>
            </div>
            <p className="bg-black text-center text-white/70 py-5">Copyright © 2023 Gold Mine Marketers</p>
        </>
    )
}

export default Footer
