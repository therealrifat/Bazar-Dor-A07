"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { PiSignOutThin } from "react-icons/pi";

const AuthBtn = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <div className="">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              {session?.user.name}
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <div className="flex flex-col items-start gap-0">
                  <p>
                    {session?.user.name}
                  </p>
                  <span className="text-gray-400 text-sm">{session.user.email}</span>
                </div>
              </li>
              <li>
                <Link href='/profile' className="flex items-center" ><FaRegUser />
                আমার প্রোফাইল 
                
                </Link>
              </li>
              <li>
                <button className="flex items-center text-red-500" onClick={()=> signOut()} ><PiSignOutThin />
                Sign out 
                
                </button>
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
