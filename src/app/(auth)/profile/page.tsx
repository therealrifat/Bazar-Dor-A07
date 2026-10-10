"use client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { updateUser, useSession } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

import toast from "react-hot-toast";
import SignOut from "@/app/component/signOut";

const ProfilePage = () => {
  const { data: session } = useSession();


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as { name: string };

    await updateUser({
      ...user,
    });

    toast.success(`Update Successfull ${user.name}`);
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto my-20">
      <div className="my-10">
        <h3 className="text-2xl">আমার প্রোফাইল</h3>
        <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      </div>
      <div className="flex gap-5 justify-between  items-center bg-white w-2xl md:rounded-2xl p-5">
        <div className="flex gap-2.5 items-center">
          <div className="overflow-hidden object-center w-20 h-20 rounded-lg">
            {session?.user.image ? (
              <Image
                src={session.user.image}
                width={100}
                height={100}
                alt="user-profile"
              />
            ) : (
              <Image
                src={`https://i.pinimg.com/originals/0f/4f/56/0f4f560ef645a2eb83d898e895ee7be0.jpg`}
                width={100}
                height={100}
                alt="user-profile"
              />
            )}
          </div>
          <div>
            <h4 className="text-2xl font-bold">{session?.user.name}</h4>
            <p className="text-gray-500">{session?.user.email}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center text-red-500 border px-3 py-2 rounded-lg ">

        <SignOut/>
        </div>
      </div>

      {/* update Profile */}

      <div className="mt-10 bg-white flex flex-col  p-5 rounded-2xl">
        <h4 className="font-bold text-left">তথ্য</h4>
        <div className=" flex flex-col items-center p-5 rounded-2xl">
          <Form
            onSubmit={onSubmit}
            className="flex flex-col max-w-md gap-4 p-6  "
          >
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
              <Label className="font-semibold text-[16px] text-black">
                নাম
              </Label>
              <Input placeholder="যেমন: রহিম উদ্দিন" className="w-full" />
              <FieldError />
            </TextField>

            <div className="flex gap-2 justify-center">
              <Button
                type="submit"
                className="btn bg-[#05893e] mt-4 font-semibold text-white text-lg w-full "
              >
                আপডেট
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
