"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import Box from "../components/Box";

const ProfilePage = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const result = await signOut(auth);
      if (result) router.push("/login");
    } catch (error) {
      alert("error: ", error);
    }
  };

  useEffect(() => {
    if (!user) router.push("/login");
  }, [router, user]);

  return user ? (
    <div className="p-36 pt-5">
      <Box>
        <h2 className="text-xl font-bold mb-4">My account</h2>
        <Image src={user.photoURL} height={80} width={80} alt="user-photo" />
        <p className="mt-2">{user.displayName}</p>
        <div className="mt-4 flex">
          <p className="font-bold mr-2">email:</p>
          <p>{user.email}</p>
        </div>
        <button className="btn-primary mt-8" onClick={handleSignOut}>
          Sign out
        </button>
      </Box>
    </div>
  ) : null;
};

export default ProfilePage;
