
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { fetchServices } from "@/utils/utils";


export async function WhatWeDo() {
    
    const servicesData = await fetchServices(`${process.env.API_URL}/api/services?populate=*` , process.env.API_TOKEN)

    // console.log(servicesData);

    return (
        <>
        <h1 className="text-4xl sm:text-5xl md:text-6xl my-8 lg:text-7xl xl:text-8xl font-bold text-center mb-8">What We Provide</h1>

        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {servicesData.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.attributes.badge}
                        </h2> */}

                        <p className={twMerge("text-xl font-bold mb-4")}>
                            {item.attributes.title}
                        </p>

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item?.attributes?.image && (
                                <Image
                                    src={item.attributes.image}
                                    alt="thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.attributes.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
                </>
    );
}
