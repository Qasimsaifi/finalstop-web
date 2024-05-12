import { ConatctForm } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import {Hero} from "@/components/Hero";
import NewBar from "@/components/NewBar";
import { AnimatedPin } from "@/components/Projects";
import { OurTeam } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
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
{/* <NewBar/> */}
<div>

<Hero/>
</div>

{/* <SparklesPreview/> */}
<HeroHighlight>
<div id="services">

<WhatWeDo/>
</div>
<div >
<AnimatedPin/>
</div>
<div id="team">

<OurTeam/>
</div>
<div className="overflow-hi w-screen" id="testimonials">
<Testimonials/>
</div>
<div id="contact">

<ConatctForm/>
</div>
<Footer/>
</HeroHighlight>

  </>
  );
}
