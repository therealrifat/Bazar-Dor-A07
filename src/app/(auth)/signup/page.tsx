"use client";
import SignWithSocial from "@/app/component/signWithSocial";
import { signUp } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";




const SignUpPage =() => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {name: string, email: string, password: string} 

    const {data, error} = await signUp.email(
      {
        ...user,
      }
    )
    if(data){
      toast.success("অ্যাকাউন্ট তৈরি করা হয়েছে")

      redirect("/");

    }

    if(error){
      toast.error(error.message as string)
    }

    
  
  };



  return (
    <div className="flex flex-col items-center  my-10">
      <h1 className="text-2xl font-bold my-3">অ্যাকাউন্ট তৈরি করুন</h1>
      <p className="text-[#48728d] mb-3">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>
      <div className="bg-white py-5 rounded-2xl border border-base-300 flex flex-col  ">
        <Form className="flex flex-col max-w-md gap-4 p-6 " onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            className="flex flex-col w-sm "
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="font-semibold text-[16px] text-black">নাম</Label>
            <Input placeholder="যেমন: রহিম উদ্দিন" className='w-full' />
            <FieldError />
          </TextField>


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
            <Input placeholder="আবার লিখুন" className="w-full" />

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
        <SignWithSocial />
        <p className="text-center my-2">অ্যাকাউন্ট আছে? <Link href='/signin' className="text-gray-500"> সাইন ইন করুন</Link></p>

      </div>
      <Link href="/"><p className="my-5">← হোম পেজে ফিরে যান</p></Link>
      
    </div>
  );
};

export default SignUpPage;
