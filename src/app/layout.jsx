import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import { Providers } from './Providers'
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinalStop: Your Ultimate Destination for Digital Solutions",
  description: "Discover FinalStop, where expertise meets creativity. From web and app development to graphic design, branding, video editing, and social media management, we're your one-stop solution for all your digital needs.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="mytheme" lang="en">
      <body className='bg-white dark:bg-black' >
        <Providers>
        <HeroHighlight>


          <NavbarDemo />

          {children}

        </HeroHighlight>
<Footer/>
        </Providers>
      </body>
    </html>
  );
}
