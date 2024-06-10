import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { fetchServices } from "@/utils/utils";

export async function OurTeam() {
  const projectsData = await fetchServices(
    `${process.env.API_URL}/api/team-members?sort[0]=id:desc&populate=*`,
    process.env.API_TOKEN
  );

  return (
    <>
      <h1 className="text-4xl sm:text-4xl md:text-4xl my-8 lg:text-5xl xl:text-6xl font-bold text-center mb-8 mt-16">
        Our Team
      </h1>
      <div className="md:w-[70vw] lg:w-[80vw] mb-28 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-12 place-items-center justify-center">
        {projectsData.map((item, index) => (
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item?.attributes?.Name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item?.attributes?.Position}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item?.attributes?.image?.data?.attributes?.url}
                  height="1000"
                  width="1000"
                  className="h-2/4- w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}