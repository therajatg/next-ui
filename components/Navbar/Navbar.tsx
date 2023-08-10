"use client";

import { Switch } from "@/components/ui/switch";
import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import Link from "next/link";
import { navItems } from "./constants";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Label } from "../ui/label";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <nav className="lg:flex flex-col mb-16">
      <div
        className={`flex items-center justify-between mt-4 mx-2 md:mx-4 lg:mx-24`}
      >
        <Link
          href={"/"}
          className="font-bold"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          Nextbase
        </Link>
        <ul className="hidden lg:flex gap-8 font-medium items-center">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden absolute xl:flex gap-x-2 items-center right-[12%]">
          <BsSun />
          <Switch />
          <FiMoon />
        </div>
        <p className="font-bold hidden lg:inline hover:cursor-pointer">Login</p>
        <Menu
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="hover:cursor-pointer lg:hidden"
        />
      </div>
      {mobileMenuOpen && <hr className="mt-4" />}
      {mobileMenuOpen && (
        <ul className="lg:hidden w-full shadow-2xl flex flex-col items-center font-medium pb-2">
          {navItems.map(({ name, href }) => (
            <li key={name} className="px-4 py-2 rounded-lg hover:bg-gray-100">
              <Link href={href}>{name}</Link>
            </li>
          ))}
          <hr className="w-full h-2" />
          <p className="px-4 py-2 rounded-lg font-bold hover:cursor-pointer hover:bg-gray-100">
            Login
          </p>
        </ul>
      )}
    </nav>
  );
}

// hidden absolute xl:flex items-center space-x-2 right-60
