"use client"
import "../globals.css";
import "../page.module.css";
import SizeLayout from '../sizelayout.js';

export default function Home() {
  return (
  <SizeLayout addStyle="bg-white">
    <div className="flex flex-row min-h-screen mt-40">
      <div className="justify-start text-black">
        <div className="text-4xl font-sans font-semibold max-w-xl pt-5 pb-16">
          Pricing
        </div>
        <p className="text-gray-800">Pricing plans will be released in the future.</p>
      </div>
    </div>
  </SizeLayout>
  );
}
