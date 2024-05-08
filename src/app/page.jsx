import {Hero} from "@/components/Hero";
import { AnimatedPin } from "@/components/Projects";
import { SparklesPreview } from "@/components/SaprklessView";
import { WhatWeDo } from "@/components/WhatWeDo";
import { fetchServices } from "@/utils/utils";
import Image from "next/image";

export default async function Home() {

  return (
  <>
  {/* <button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button> */}
<div className="h-[220vh]">
<Hero/>
</div>
{/* <SparklesPreview/> */}
<WhatWeDo/>
<AnimatedPin/>
  </>
  );
}
