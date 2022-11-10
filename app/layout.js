import "../styles/globals.css";
import Nav from "./components/Nav";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <>
          <title>MovieFlix</title>
        </>
        <Header />
        <Nav />
        <>{children}</>
      </body>
    </html>
  );
}
