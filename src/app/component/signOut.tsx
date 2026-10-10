import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import React from "react";
import toast from "react-hot-toast";
import { PiSignOutThin } from "react-icons/pi";

const SignOut = () => {
  const router =useRouter()

 const handleSignOut = async()=>{
    await signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/signin"); // redirect to login page
      toast.success("Sign out Succsesful")
    },
  },
});
 }

  return (
    <div>
      <button
        className="flex items-center text-red-500 cursor-pointer"
        onClick={handleSignOut}
      >
        <PiSignOutThin />
         Sign out
      </button>
    </div>
  );
};

export default SignOut;
