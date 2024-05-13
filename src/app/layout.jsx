import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import { Providers } from './Providers'
import { HeroHighlight } from "@/components/ui/hero-highlight";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinalStop",
  description: "final stop",
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
        </Providers>
      </body>
    </html>
  );
}
