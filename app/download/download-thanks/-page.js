"use client"
import { Suspense } from 'react'
import SizeLayout from '../../sizelayout.js';

export default function Home() {

  return (
    <Suspense>
      <SizeLayout addStyle="bg-white">
        <div className="flex flex-col mt-16">
          <div className="flex flex-row items-center">
            <h1 className="text-4xl font-sans font-semibold">Thank you for downloading Wirebird</h1>
          </div>
          <p className="text-2xl font-sans mt-3 mb-10">Your download should start shortly.</p>
        </div>
      </SizeLayout>
    </Suspense>
  );
}