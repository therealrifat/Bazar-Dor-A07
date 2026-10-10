"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { PiSignOutThin } from "react-icons/pi";

const ProfilePage = () => {
  const { data: session } = useSession();
  console.log(session);

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
        <button
          className="flex gap-2 items-center text-red-500 border px-3 py-2 rounded-lg"
          onClick={() => signOut()}
        >
          <PiSignOutThin />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
