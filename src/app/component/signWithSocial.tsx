import { signIn } from "@/lib/auth-client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignWithSocial = () => {

    const signInGoogle = async()=>{
        const data = await signIn.social(
            {
                provider: "google"
            }

        )
        

     
    }


  return (
    <div className="flex gap-2 justify-center">
      <button onClick={signInGoogle} className=" text-sm border border-gray-400 p-2 rounded-lg flex items-center gap-2">
        <FcGoogle />
        Google দিয়ে চালিয়ে যান
      </button>
      <button className=" text-sm border border-gray-400 p-2 rounded-lg flex items-center gap-2">
        <FaGithub />
        GitHub দিয়ে চালিয়ে যান
      </button>
    </div>
  );
};

export default SignWithSocial;
