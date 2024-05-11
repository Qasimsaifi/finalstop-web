
import { PinContainer } from "./ui/3d-pin";
import { fetchServices } from "@/utils/utils";
export async function AnimatedPin() {
    const projectsData = await fetchServices(`${process.env.API_URL}/api/projects?populate=*`, process.env.API_TOKEN)
    // console.log(projectsData[0].attributes?.image?.data[0]?.attributes?.formats?.large?.url);
    return (
        <>
            <h1 className="text-4xl sm:text-4xl md:text-4xl my-8 lg:text-5xl xl:text-6xl font-bold text-center mb-4 mt-16">Our Projects</h1>

            <div className="md:w-[70vw] lg:w-[70vw] mb-28 mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
                {projectsData.map((item, index) => (
                    <PinContainer
                        title={item?.attributes?.url}
                        href={item?.attributes?.url}
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                {item?.attributes?.Title}
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    {item?.attributes?.description}
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 mb-4" />
                            <img className="w-full h-full mb-4 rounded-md" src={item?.attributes?.image?.data[0]?.attributes?.formats?.large?.url} alt="" />
                        </div>
                    </PinContainer>
                ))}
            </div>
        </>
    );
}
