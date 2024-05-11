import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { fetchServices } from "@/utils/utils";

export async function Testimonials() {
  const testimonials = await fetchServices(
    `${process.env.API_URL}/api/testimonials?populate=*`,
    process.env.API_TOKEN
  );
  return (
    <>
      <h1 className="text-4xl sm:text-4xl md:text-4xl my-8 lg:text-5xl xl:text-6xl font-bold text-center mb-12 mt-20 ">
        Testimonials
      </h1>

      <div className=" rounded-md flex flex-col antialiased mb-24 items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}
