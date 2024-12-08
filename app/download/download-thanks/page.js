"use client"
import { Button } from "@/components/ui/button";
import { useState} from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import SizeLayout from '../../sizelayout.js';

export default function Home() {

  return (
    <SizeLayout addStyle="bg-white">
      <div className="flex flex-col mt-16">
        <div className="flex flex-row items-center">
          <h1 className="text-4xl font-sans font-semibold">Thank you for downloading Wirebird</h1>
        </div>
        <p className="text-2xl font-sans mt-3 mb-10">Your download should start shortly.</p>
      </div>
    </SizeLayout>
  );
}