"use client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center  my-10">
      <h1 className="text-2xl font-bold my-3">সাইন ইন</h1>
      <p className="text-[#48728d] mb-3">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
      <div className="bg-white py-5 rounded-2xl border border-base-300 flex flex-col  ">
        <Form className="flex flex-col max-w-md gap-4 p-6 ">
          <TextField
            isRequired
            name="email"
            className="flex flex-col w-sm "
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="font-semibold text-[16px] text-black ">
              ইমেইল
            </Label>
            <Input placeholder="you@example.com" className="w-full" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            className="flex flex-col w-sm"
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="font-semibold text-[16px] text-black">
              পাসওয়ার্ড
            </Label>
            <Input placeholder="কমপক্ষে ৮ অক্ষর" className="w-full" />

            <FieldError />
          </TextField>
          <div className="flex gap-2 justify-center">
            <Button
              type="submit"
              className="btn bg-[#05893e] mt-4 font-semibold text-white text-lg w-full "
            >
              অ্যাকাউন্ট তৈরি করুন
            </Button>
          </div>
        </Form>
        <div className="divider px-5">অথবা</div>
        <div className="flex gap-2 justify-center">
          <button className=" text-sm border border-gray-400 p-2 rounded-lg flex items-center gap-2">
            <FcGoogle />
            Google দিয়ে চালিয়ে যান
          </button>
          <button className=" text-sm border border-gray-400 p-2 rounded-lg flex items-center gap-2">
            <FaGithub />
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>
        <p className="text-center my-2">অ্যাকাউন্ট নেই? <Link href='/signup' className="text-gray-500">সাইন আপ করুন</Link></p>

      </div>
      <Link href="/"><p className="my-5">← হোম পেজে ফিরে যান</p></Link>
    </div>
  );
};

export default SignUpPage;
