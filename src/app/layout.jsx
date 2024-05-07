import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import { Providers } from './providers'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinalStop",
  description: "final stop",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="mytheme" lang="en">
      <body className={inter.className}>
        <Providers>

          <NavbarDemo />
          {children}
        </Providers>
      </body>
    </html>
  );
}
