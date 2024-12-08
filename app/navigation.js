"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "./globals.css";
import "./page.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Poppins } from 'next/font/google';
import { FaUser } from "react-icons/fa6";

const fontthing = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '600',
})

export default function Navigation() {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="flex p-1 items-center hover:underline text-base h-full text-white"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });

          }}
        >
          Logout
        </button>
      )
    } else if (status === "loading") {
      return (
        <span className="text-[#888] text-base">...</span>
      )
    } else {
      return (
        <a href="/login" className="flex p-1 items-center hover:underline text-base h-full text-gray-400">
          <FaUser />
        </a>
      )
    }
  }
  return (
    <div className="flex flex-col">
<nav className="fixed left-0 w-full bg-[#19191c] z-50 overflow-visible justify-center flex h-[4.5rem] border-b-[1px] border-gray-700">
<div className="w-[80rem]">
  <div className="flex flex-wrap items-center justify-between mx-auto text-slate-100">
    <div className={`${fontthing.className} flex flex-row items-end`}>
    <Image
        src="/images/breakpointlogo.png"
        width={60}
        height={60}
        alt=""
        className=""
      />

      <div className="text-2xl mb-2">BREAKPOINT</div>
    </div>
    <ul className="flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 h-16">
      <li className="flex items-center text-sm gap-x-3 h-full">
        {showSession()}
      </li>
    </ul>
    </div>
  </div>
</nav>
<nav className="fixed left-0 w-full bg-[#19191d] z-50 overflow-visible justify-center flex mt-[4.5rem]">
  <div className="w-[80rem]">
    <div className="flex flex-wrap items-center justify-between mx-auto text-slate-800">
      <a href="/" className="mr-4 flex items-center cursor-pointer py-1.5  text-white text-lg font-medium">
        Wirebird
        <div className="ml-3 text-sm bg-[#303033] px-2 py-1 rounded-sm text-gray-400 font-normal">
          Application
        </div>
      </a>
      
      <div className="hidden lg:block">
        <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4 h-16">
          <li className="flex items-center text-sm gap-x-2 text-slate-300 h-full">
            <Button variant="outline" onClick={() => {
              router.push('/pricing');
            }}>Pricing</Button>
          </li>
          <li className="flex items-center text-sm gap-x-2 text-slate-300 h-full">
            <Button variant="default" onClick={() => {
              router.push('/download');
            }}>Download</Button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  );
}
