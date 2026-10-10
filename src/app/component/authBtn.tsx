"use client";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";

import SignOut from "./signOut";

const AuthBtn = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <div className="">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <div className="flex gap-2 items-center p-3 rounded-lg cursor-pointer hover:bg-green-300 ">
                {session?.user.image ? (
                  <div className="w-10 h-10 object-center overflow-hidden rounded-lg">
                    <Image
                      src={session.user.image}
                      width={40}
                      height={40}
                      alt="user-profile"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 object-center overflow-hidden rounded-lg">
                    <Image
                      src={`https://i.pinimg.com/originals/0f/4f/56/0f4f560ef645a2eb83d898e895ee7be0.jpg`}
                      width={40}
                      height={40}
                      alt="deafult-profile"
                    />
                  </div>
                )}
                <h3>{session?.user.name}</h3>
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <div className="flex flex-col items-start gap-0">
                  <p>{session?.user.name}</p>
                  <span className="text-gray-400 text-sm">
                    {session.user.email}
                  </span>
                </div>
              </li>
              <li>
                <Link href="/profile" className="flex items-center">
                  <FaRegUser />
                  আমার প্রোফাইল
                </Link>
              </li>
              <li>
                <SignOut/>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <Link href="/signin">
            <h4 className="font-bold">সাইন ইন </h4>
          </Link>
          <Link href="/signup">
            <h4 className="bg-green-700 py-2 px-4 rounded-lg font-bold text-white">
              সাইন আপ
            </h4>
          </Link>
        </div>
      )}

      {/* sign in and sign up btn */}
    </div>
  );
};

export default AuthBtn;
