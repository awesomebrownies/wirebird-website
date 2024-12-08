"use client";
import "../globals.css";
import "../page.module.css";
import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FaWindows, FaAndroid, FaApple } from "react-icons/fa";
import { VscTerminalLinux } from "react-icons/vsc";
import { BsRouterFill } from "react-icons/bs";
import SizeLayout from '../sizelayout.js';

export default function DownloadLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [redirected, setRedirected] = useState(false); // State to track redirection

  useEffect(() => {
    // Define valid sections
    const validSections = ["windows", "macos", "linux", "android", "ios", "routers"];
    const currentSection = searchParams.get("section");

    // Only redirect if the user is on "/download" without a section or an invalid section
    if (pathname === "/download" && !redirected) {
      setRedirected(true); // Prevent further redirection once done
      if (!currentSection || !validSections.includes(currentSection)) {
        const userAgent = navigator.userAgent.toLowerCase();
        let detectedSection = null;

        if (userAgent.includes("win")) {
          detectedSection = "windows";
        } else if (userAgent.includes("mac")) {
          detectedSection = "macos";
        } else if (userAgent.includes("linux")) {
          detectedSection = "linux";
        } else if (userAgent.includes("android")) {
          detectedSection = "android";
        } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
          detectedSection = "ios";
        }

        const section = detectedSection || "windows";
        router.push(`/download?section=${section}`);
        
        // Replace current state in history to prevent going back to /download
        window.history.replaceState(null, "", `/download?section=${section}`);
      }
    }
  }, [pathname, searchParams, router, redirected]);

  return (
    <div>
      <SizeLayout addStyle="bg-white">
        <div className="flex w-full flex-col text-gray-800 mt-44">
          <div className="flex w-full flex-row justify-center space-x-16">
            <button className="flex flex-col items-center text-gray-500 hover:bg-gray-200 h-fit rounded-sm w-20 p-2" onClick={
              () => { router.push('/download?section=windows'); }
            }><FaWindows color="dimgray" size={50} className="mb-3"/>Windows</button>
            <button className="flex flex-col items-center text-gray-500 hover:bg-gray-200 h-fit rounded-sm w-20 p-2" onClick={
              () => { router.push('/download?section=macos'); }
            }><FaApple color="dimgray" size={50} className="mb-3"/>MacOS</button>
            <button className="flex flex-col items-center text-gray-500 hover:bg-gray-200 h-fit rounded-sm w-20 p-2" onClick={
              () => { router.push('/download?section=linux'); }
            }><VscTerminalLinux color="dimgray" size={50} className="mb-3"/>Linux</button>
            <button className="flex flex-col items-center text-gray-500 hover:bg-gray-200 h-fit rounded-sm w-20 p-2" onClick={
              () => { router.push('/download?section=android'); }
            }><FaAndroid color="dimgray" size={50} className="mb-3"/>Android</button>
            <button className="flex flex-col items-center text-gray-500 hover:bg-gray-200 h-fit rounded-sm w-20 p-2" onClick={
              () => { router.push('/download?section=ios'); }
            }><FaApple color="dimgray" size={50} className="mb-3"/>iOS</button>
            <button className="flex flex-col items-center text-gray-500 hover:bg-gray-200 h-fit rounded-sm w-20 p-2" onClick={
              () => { router.push('/download?section=routers'); }
            }><BsRouterFill color="dimgray" size={50} className="mb-3"/>Routers</button>
          </div>
        </div>
      </SizeLayout>
      {children}
      <SizeLayout addStyle="bg-black p-40 mt-52" />
    </div>
  );
}
