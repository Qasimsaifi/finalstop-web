
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { HoverEffect } from "./ui/card-hover-effect";
import { fetchServices } from "@/utils/utils";


export async function WhatWeDo() {
    
    const servicesData = await fetchServices(`${process.env.API_URL}/api/services?populate=*` , process.env.API_TOKEN)

    // console.log(servicesData);

    return (
        <>
        <h1 className="text-4xl sm:text-4xl md:text-4xl my-8 lg:text-5xl xl:text-6xl font-bold text-center mt-2 mb-8">What We Provide</h1>

            <div className="md:w-[70vw] lg:w-[70vw] mx-auto antialiased pt-4 relative">
                <HoverEffect items={servicesData} />
            </div>
                </>
    );
}
