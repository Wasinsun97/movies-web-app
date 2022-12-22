"use client";

import "../styles/globals.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function RootLayout({ children }) {
  const [user] = useAuthState(auth);

  return (
    <html>
      <body>
        <>
          <title>MovieFlix</title>
        </>
        {user ? (
          <>
            <Header />
            <Nav />
          </>
        ) : null}

        <>{children}</>
      </body>
    </html>
  );
}
