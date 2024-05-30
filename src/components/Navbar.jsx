"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2"  />
      
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-[9999999999999]", className)}
    >
      <Menu setActive={setActive}>
      
        <MenuItem setActive={setActive}  active={active} hrefLink="/" item="Home"/>
        <MenuItem setActive={setActive}  active={active} hrefLink="/contact" item="Contact"/>
        {/* <MenuItem setActive={setActive}  active={active} hrefLink="/projects" item="Projects"/> */}
        <MenuItem setActive={setActive}  active={active} hrefLink="/about" item="About"/>
        {/* <MenuItem setActive={setActive}  active={active} hrefLink="/services" item="Services"/> */}
          

      </Menu>
    </div>
  );
}
