"use client";

import "../styles/globals.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) router.push("/login");
  }, [router, user]);

  return (
    <html>
      <body>
        <>
          <title>MovieFlix</title>
        </>
        {user ? (
          <>
            <Header />
            {pathname !== "/profile" ? <Nav /> : null}
          </>
        ) : null}

        <>{children}</>
      </body>
    </html>
  );
}
