"use client";

import Image from "next/image";
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/navigation";
import Box from "../components/Box";

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
    <div className="flex items-center justify-center h-screen">
      <Box>
        <h1 className="text-2xl mb-8">Sign in</h1>
        <button className="btn-primary" onClick={handleGoogleLogin}>
          <Image src="/google.svg" alt="google" width={20} height={20} />
          <p className="ml-2 text-white">Sign in with Google</p>
        </button>
      </Box>
    </div>
  );
};

export default LoginPage;
