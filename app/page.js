"use client"
import "./globals.css";
import "./page.module.css";
import SizeLayout from './sizelayout.js';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
  <SizeLayout addStyle="bg-black">
    <div className="flex flex-row min-h-screen mt-40">
      <div className="justify-start text-slate-300">
        <div className="text-4xl font-sans font-semibold max-w-xl pt-5 pb-16">
          The Network Configuration and
          Monitoring Tool
        </div>
        <p className="text-gray-400">Proxies/VPN</p>
        <ul className="pb-5 px-2">
          <li>Multi-Hop</li>
          <li>Split-Tunneling</li>
          <li>TLS Camouflage</li>
        </ul>
        <p className="text-gray-400">App Monitoring</p>
        <ul className="pb-5 px-2">
          <li>Connection Killswitch</li>
          <li>Data Upload/Download</li>
        </ul>
        <ul>
          <li>DNS Servers</li>
          <li>Virtual SIM</li>
          <li>Bluetooth Rules</li>
        </ul>
        <Button variant="default" className="bg-white text-black hover:bg-gray-200 mt-6">Download</Button>
      </div>
    </div>
  </SizeLayout>
  );
}
