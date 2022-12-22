"use client";

import Image from "next/image";
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) router.push("/");
    } catch (error) {
      alert("error: ", error);
    }
  };

  return (
    <div className="shadow-cyan-800 shadow-xl m-32 p-10 bg-white text-gray-700 rounded-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-8">Sign in</h1>
        <button
          className="flex items-center rounded-md h-10 col-span-1 bg-gradient-to-r from-cyan-800 to-blue-800 hover:from-green-800 hover:to-cyan-800 p-8"
          onClick={handleGoogleLogin}
        >
          <Image src="/google.svg" alt="google" width={20} height={20} />
          <p className="ml-2 text-white">Sign in with Google</p>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
