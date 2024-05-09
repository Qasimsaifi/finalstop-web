import {Hero} from "@/components/Hero";
import { AnimatedPin } from "@/components/Projects";
import { WhatWeDo } from "@/components/WhatWeDo";
import { HeroHighlight } from "@/components/ui/hero-highlight";

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
<div>

<Hero/>
</div>

{/* <SparklesPreview/> */}
<HeroHighlight>

<WhatWeDo/>
<AnimatedPin/>
</HeroHighlight>
  </>
  );
}
