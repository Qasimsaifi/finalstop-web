"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function WhatWeDo() {
    return (
        <>
        <h1 className="text-4xl sm:text-5xl md:text-6xl my-8 lg:text-7xl xl:text-8xl font-bold text-center mb-8">What We Provide</h1>

        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2> */}

                        <p className={twMerge("text-xl mb-4")}>
                            {item.title}
                        </p>

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
                </>
    );
}

const dummyContent = [
    {
        title: "Web Development",
        description: (
            <>
                <p>
                    Dive into the digital world with our web development service, where we craft visually stunning websites that are not just aesthetically pleasing but also optimized for seamless user experiences across devices. From responsive design to intuitive navigation, we ensure your website reflects your brand identity and drives conversions effectively. Our bespoke solutions blend creativity with technical expertise, setting you apart in the competitive digital landscape and fostering long-term brand loyalty.
                </p>

            </>
        ),
        // badge: "React",
        image:
            "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "App Development",
        description: (
            <>
                <p>
                    Explore endless possibilities with our app development service, where we transform your ideas into innovative mobile applications that prioritize user experience and functionality. From conceptualization to deployment, we guide you through every step, ensuring your app resonates with your target audience and elevates your brand's digital presence. Our scalable solutions are designed to grow with your business, driving success and standing out in the competitive market.
                </p>
            </>
        ),
        // badge: "Changelog",
        image:
            "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Graphics Design",
        description: (
            <>
                <p>
                    Ignite your brand's visual identity with our graphics design service, where we craft captivating designs that communicate your essence and captivate your audience. From logos to digital artwork, our precise and creative designs leave a lasting impression, setting you apart in a crowded marketplace and enhancing brand recognition. With a blend of artistic flair and strategic thinking, we deliver designs that align with your brand's objectives and resonate with your target demographic.
                </p>
            </>
        ),
        // badge: "Launch Week",
        image:
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "Content Writing",
        description: (
            <>
                <p>
                Unleash the power of words with our content writing service, where we craft compelling narratives that engage your audience and drive meaningful connections with your brand. Whether for websites, blogs, or social media, our passionate writers ensure your content resonates and fosters brand loyalty. With a focus on storytelling and audience engagement, we deliver content that drives tangible results and strengthens your brand's digital presence.
                </p>
            </>
        ),
        // badge: "Launch Week",
        image:
            "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Video Editing",
        description: (
            <>
                <p>
                Illuminate your brand's story with our video editing service, where we transform raw footage into polished masterpieces that captivate audiences and drive engagement. From promotional videos to brand films, our seamless transitions and captivating visuals resonate on an emotional level, leaving a lasting impression and enhancing your brand's digital presence. With our expert touch, your videos stand out in the competitive digital landscape, driving meaningful connections and brand advocacy.
                </p>
            </>
        ),
        // badge: "Launch Week",
        image:
            "https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Social Media Management",
        description: (
            <>
                <p>
                Harness the power of social media with our strategic management service, where we curate content and engage communities to drive meaningful interactions and brand advocacy. With tailored strategies and data-driven insights, we help you achieve your social media goals and stand out in the digital landscape. From content creation to community management, we ensure your brand resonates with your audience and drives tangible results, fostering long-term relationships and brand loyalty.
                </p>
            </>
        ),
        // badge: "Launch Week",
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
