"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/register";
import SizeLayout from '../sizelayout.js';


export default function Register() {
    const [error, setError] = useState();
    const router = useRouter();
    const ref = useRef(null);

    const handleSubmit = async (formData) => {
        const r = await register({
            email: formData.get("email"),
            password: formData.get("password"),
            name: formData.get("name")
        });
        ref.current?.reset();
        if (r?.error) {
            setError(r.error);
            return;
        } else {
            return router.push("/login");
        }
    };

    return (
        <SizeLayout addStyle="bg-black pt-64 min-h-screen">
        <section className="w-full flex items-center justify-center text-white">
            <form ref={ref}
                action={handleSubmit}
                className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
            border border-solid border-white bg-black rounded">
                {error && <div className="">{error}</div>}
                <h1 className="mb-5 w-full text-2xl font-bold">Register</h1>

                <label className="w-full text-sm">Full Name</label>
                <input
                    type="text"
                    placeholder=""
                    className="w-full h-8 border border-solid border-black bg-gray-800 py-1 px-2.5 rounded text-[13px] text-white"
                    name="name"
                />

                <label className="w-full text-sm">Email</label>
                <input
                    type="email"
                    placeholder=""
                    className="w-full h-8 border border-solid border-black bg-gray-800 py-1 px-2.5 rounded"
                    name="email"
                />

                <label className="w-full text-sm">Password</label>
                <div className="flex w-full">
                    <input
                        type="password"
                        placeholder=""
                        className="w-full h-8 border border-solid border-black bg-gray-800 py-1 px-2.5 rounded"
                        name="password"
                    />
                </div>

                <button className="w-full border border-solid border-black bg-gray-800 py-1.5 mt-2.5 rounded
             ease hover:bg-white hover:text-black">
                    Sign up
                </button>


                <Link href="/login" className="text-sm text-[#888] transition duration-150 ease hover:text-white">
                    Already have an account?
                </Link>
            </form>
        </section>
        </SizeLayout>
    )
}
