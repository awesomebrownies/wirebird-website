"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SizeLayout from '../sizelayout.js';

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      setError(res.error);
    }
    if (res?.ok) {
      return router.push("/");
    }
  };

  return (
    <SizeLayout addStyle="bg-black pt-64 min-h-screen">
    <section className="w-full flex items-center justify-center text-white">
      <form
        className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
        border border-solid border-white bg-black rounded"
        onSubmit={handleSubmit}>
        {error && <div className="text-white">{error}</div>}
        <h1 className="mb-5 w-full text-2xl font-bold">Login</h1>
        <label className="w-full text-sm">Email</label>
        <input
          type="email"
          placeholder=""
          className="w-full h-8 border border-solid border-black rounded p-2 bg-gray-800 text-white"
          name="email" />
        <label className="w-full text-sm">Password</label>
        <div className="flex w-full">
          <input
            type="password"
            placeholder=""
            className="w-full h-8 border border-solid border-black rounded p-2 bg-gray-800 text-white"
            name="password"
          />
        </div>
        <button className="w-full border border-solid border-black bg-gray-800 py-1.5 mt-2.5 rounded
        ease hover:bg-white hover:text-black">
          Next
        </button>
        <Link
          href="/register"
          className="text-sm text-[#888] transition duration-150 ease hover:text-white">
          Dont have an account?
        </Link>
      </form>
    </section>
    </SizeLayout>
  );
};