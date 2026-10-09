import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center my-10 ">
      <h1 className="text-2xl font-bold my-3">সাইন ইন</h1>
      <p className="text-[#48728d] mb-3">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
      
      <div className="bg-white py-5 rounded-2xl border border-base-300 ">
        <form className="flex flex-col items-center">
            <fieldset className="fieldset  w-md py-5 px-10">

            <label className="label font-semibold text-[16px] text-black">ইমেইল</label>
            <input type="email" className="input  w-sm" placeholder="you@example.com" />

            <label className="label font-semibold text-[16px] text-black">পাসওয়ার্ড</label>
            <input type="password" className="input  w-sm" placeholder="কমপক্ষে ৮ অক্ষর" />


            <button className="btn bg-[#05893e] mt-4 font-semibold text-white text-lg">অ্যাকাউন্ট তৈরি করুন</button>
        </fieldset>
        </form>
          <div className="divider px-5">অথবা</div>
          <div className="flex gap-2 justify-center">
            <button className=" text-sm border border-gray-400 p-2 rounded-lg flex items-center gap-2"><FcGoogle />Google দিয়ে চালিয়ে যান</button>
            <button className=" text-sm border border-gray-400 p-2 rounded-lg flex items-center gap-2"><FaGithub/>GitHub দিয়ে চালিয়ে যান</button>
          </div>
          <p className="text-center my-2">অ্যাকাউন্ট নেই? <Link href='/signup' className="text-gray-500">সাইন আপ করুন</Link></p>

      


      </div>
      <Link href="/"><p className="my-5">← হোম পেজে ফিরে যান</p></Link>


    </div>
  );
};

export default SignInPage;
