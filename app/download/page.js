"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Suspense } from "react";
import Image from "next/image";
import SizeLayout from "../sizelayout.js";
import { useRouter, useSearchParams } from "next/navigation";

export default function DownloadPage() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get("section") || "windows"; // Default to Windows

  // Define content for each section
  const sectionDetails = {
    windows: {
      title: "Wirebird for Windows",
      description: "Windows 10 & above, 64-bit",
      downloadOptions: [
        { label: ".exe (Windows)", link: "/download/download-thanks" },
        { label: ".zip (Windows)", link: "/download/download-thanks" },
        { label: ".exe (Windows ARM64)", link: "/download/download-thanks" },
      ],
      logo: "/images/wirebird_unfinished_blue.png",
    },
    macos: {
      title: "Wirebird for MacOS",
      description: "El Capitan (10.11) & above",
      downloadOptions: [
        { label: ".dmg (Intel)", link: "/download/download-thanks" },
        { label: ".dmg (Apple Silicon)", link: "/download/download-thanks" },
      ],
      logo: "/images/wirebird_unfinished_blue.png",
    },
    linux: {
      title: "Wirebird for Linux",
      description: "Ubuntu/Debian & Fedora, 64-bit",
      downloadOptions: [
        { label: ".deb (Ubuntu/Debian)", link: "/download/download-thanks" },
        { label: ".rpm (Fedora)", link: "/download/download-thanks" },
      ],
      logo: "/images/wirebird_unfinished_blue.png",
    },
    android: {
      title: "Wirebird for Android",
      description: "API 16 (Android 4.1) & above",
      downloadOptions: [
        { label: ".apk", link: "/download/download-thanks" },
      ],
      logo: "/images/wirebird_unfinished_blue.png",
    },
    ios: {
      title: "Wirebird for iOS",
      description: "iOS 11 & above",
      downloadOptions: [
        { label: "App Store Link", link: "/download/download-thanks" },
      ],
      logo: "/images/wirebird_unfinished_blue.png",
    },
    routers: {
      title: "Wirebird for Routers",
      description: "Supports OpenWrt & DD-WRT",
      downloadOptions: [
        { label: "Setup Guide", link: "/download/download-thanks" },
      ],
      logo: "/images/wirebird_unfinished_blue.png",
    },
  };

  const currentSection = sectionDetails[section] || sectionDetails["windows"];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SizeLayout addStyle="bg-white">
        <div className="flex flex-col mt-16">
          <div className="flex flex-row items-center">
            <Image
              src={currentSection.logo}
              width={60}
              height={60}
              alt=""
              className=""
            />
            <h1 className="text-4xl font-sans font-semibold ml-2">
              {currentSection.title}
            </h1>
          </div>
          <p className="text-2xl font-sans mt-3">{currentSection.description}</p>

          <div className="flex items-center space-x-4 mt-10">
            <Button 
              onClick={() => {
                router.push("/download/download-thanks")
              }}
            className="w-28 rounded-r-none mr-[-0.85rem]"
            >
              Download
            </Button>

            <div className="relative">
              <Button
                onClick={() => {
                  setDropdownOpen(!isDropdownOpen);
                }}
                className="w-fit flex justify-between items-center rounded-l-none"
              >
                <span>{currentSection.downloadOptions[0].label}</span>
                <IoMdArrowDropdown
                  size={50}
                  className="flex-shrink-0 text-lg"
                />
              </Button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {currentSection.downloadOptions.map((option, index) => (
                    <a
                      key={index}
                      href={option.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </SizeLayout>
    </Suspense>
  );
}
